'use strict';

const Viz = require('viz');

const bstNode = module.exports = function(val) {
  this.val = val;
  this.data = null;
  this.parent = null;
  this.left = null;
  this.right = null;
};

bstNode.prototype.insert = function(val) {
  if(!this) return;
  if(val === this.val) throw new Error('val must be unique');

  if(val > this.val) {
    if(!this.right) {
      this.right = new bstNode(val);
      this.right.parent = this;
    } else this.right.insert(val);
  } else if(val < this.val) {
    if(!this.left) {
      this.left = new bstNode(val);
      this.left.parent = this;
    } else this.left.insert(val);
  }
  return;
};

bstNode.prototype.deleteIfLeaf = function () {
  if(this.left || this.right) {
    return false;
  }

  // The leaf is a root
  if(!this.parent) {
    delete this.val;
    this.data = [];
    return true;
  }

  if(this.parent.left === this) {
    this.parent.left = null;
  } else {
    this.parent.right = null;
  }

  return true;
};

bstNode.prototype.deleteIfOnlyOneChild = function () {
  var child;

  if (this.left && !this.right) {
    child = this.left;
  }
  if (!this.left && this.right) {
    child = this.right;
  }
  if (!child) {
    return false;
  }

  // Root
  if (!this.parent) {
    this.key = child.key;
    this.data = child.data;
    this.left = null;

    if (child.left) {
      this.left = child.left;
      child.left.parent = this;
    }

    this.right = null;
    if (child.right) {
      this.right = child.right;
      child.right.parent = this;
    }

    return true;
  }

  if (this.parent.left === this) {
    this.parent.left = child;
    child.parent = this.parent;
  } else {
    this.parent.right = child;
    child.parent = this.parent;
  }

  return true;
};

bstNode.prototype.getRightDescendant = function () {
  if (this.left) {
    return this.left.getRightDescendant();
  } else {
    return this;
  }
};


bstNode.prototype.delete = function(val) {
  let replaceWith;

  if(this.contains(val, this.val) < 0) {
    if(this.left) {
      this.left.delete(val, val);
    }

    return;
  }

  if(this.contains(val, this.val) > 0) {
    if(this.right) {
      this.right.delete(val, val);
    }

    return;
  }

  if(!this.contains(val, this.val) === 0) return;

  if(this.deleteIfLeaf()) return;

  if(this.deleteIfOnlyOneChild()) return;

  if(Math.random() >= 0.5) {
    replaceWith = this.left.getLeftDescendant();

    this.val = replaceWith.val;
    this.data = replaceWith.data;

    if(this === replaceWith.parent) {
      this.left = replaceWith.left;

      if(replaceWith.left) {
        replaceWith.left.parent = replaceWith.parent;
      }
    } else {
      replaceWith.parent.right = replaceWith.left;

      if (replaceWith.left) { replaceWith.left.parent = replaceWith.parent;
      }
    }
  } else {
    replaceWith = this.right.getRightDescendant();

    this.val = replaceWith.val;
    this.data = replaceWith.data;

    if(this === replaceWith.parent) {
      this.right = replaceWith.right;

      if(replaceWith.right) {
        replaceWith.right.parent = replaceWith.parent;
      }
    } else {
      replaceWith.parent.left = replaceWith.right;

      if(replaceWith.right) {
        replaceWith.right.parent = replaceWith.parent;
      }
    }
  }
};

bstNode.prototype.contains = function(val) {
  if(val < this.val) {
    if(!this.left) return false;

    else return this.left.contains(val);
  } else if(val > this.val) {
    if(!this.right) return false;

    else return this.right.contains(val);
  } else return true;
};

bstNode.prototype.lookup = function(val) {
  if(val < this.val) {
    if(!this.left) return null;

    else return this.left.lookup(val);
  } else if(val > this.val) {
    if(!this.right) return null;

    else return this.right.lookup(val);
  } else return this;
};

bstNode.prototype.breadthFirst = function() {
  let q = [this];
  let result = '';
  let current;

  while(q.length > 0) {
    current = q.pop();
    result += current.val + ' ';

    if(current.left) q.unshift(current.left);
    if(current.right) q.unshift(current.right);
  }

  return result;
};

bstNode.prototype.preOrder = function(cb) {
  _walk(this);
  function _walk(node) {
    cb(node);
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  }
};

bstNode.prototype.postOrder = function(cb) {
  _walk(this);
  function _walk(node) {
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
    cb(node);
  }
};

bstNode.prototype.inOrder = function(cb) {
  _walk(this);
  function _walk(node) {
    if(node.left) _walk(node.left);
    cb(node);
    if(node.right) _walk(node.right);
  }
};

// assuming all node vals are numbers
// for string vals ...convert to ascii or something
bstNode.prototype.sumOfAllNodeVals = function() {
  let total;

  this.preOrder(node => {
    total += node.val;
  });

  return total;
};

bstNode.prototype.getDotInfo = function() {
  let result = `digraph {`;

  this.preOrder(node => {
    if(!node) return;
    if(node.left) result += `${node.val} -> ${node.left.val} `;
    if(node.right) result += `${node.val} -> ${node.right.val} `;
  });

  return `${result};}`;
};

bstNode.prototype.treeify = function() {
  return Viz(this.getDotInfo());
};
