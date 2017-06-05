'use strict';

const BstNode = module.exports = function(val) {
  this.val = val;
  this.data = null;
  this.parent = null;
  this.left = null;
  this.right = null;
};

//O(n^2)
BstNode.fromArray = function(node, array) {
  if(!array) return null;

  for(let i = 1; i < array.length; i++) {
    let bst = new BstNode(array[0])
    node.appendChild(array[i]);
    return
  }
};

//O(n)
BstNode.prototype.min = function() {
  if(!this) return;
  if(this.left) {
    return this.left.min()
  }
  return this.val;
}

//O(n)
BstNode.prototype.max = function() {
  if(!this) return;
  if(this.right) {
    return this.right.max()
  }
  return this.val;
}

//O(n)
BstNode.prototype.insert = function(val) {
  if(!this) return;
  if(val === this.val) throw new Error('val must be unique');
  if(val > this.val) {
    if(!this.right) {
      this.right = new BstNode(val);
      this.right.parent = this;
    } else this.right.insert(val);
  } else if(val < this.val) {
    if(!this.left) {
      this.left = new BstNode(val);
      this.left.parent = this;
    } else this.left.insert(val);
  }
  return;
};

//O(log n)
BstNode.prototype.contains = function(val) {
  if(val < this.val) {
    if(!this.left) return false;
    else return this.left.contains(val);
  } else if(val > this.val) {
    if(!this.right) return false;
    else return this.right.contains(val);
  } else return true;
};

//this is find
//O(n)
BstNode.prototype.lookup = function(val) {
  if(val < this.val) {
    if(!this.left) return null;
    else return this.left.lookup(val);
  } else if(val > this.val) {
    if(!this.right) return null;
    else return this.right.lookup(val);
  } else return this;
};

//O(log n)
BstNode.prototype.breadthFirst = function() {
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

BstNode.prototype.preOrder = function(cb) {
  _walk(this);
  function _walk(node) {
    cb(node);
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  }
};

BstNode.prototype.postOrder = function(cb) {
  _walk(this);
  function _walk(node) {
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
    cb(node);
  }
};

BstNode.prototype.inOrder = function(cb) {
  _walk(this);
  function _walk(node) {
    if(node.left) _walk(node.left);
    cb(node);
    if(node.right) _walk(node.right);
  }
};

BstNode.prototype.getDotInfo = function() {
  let result = `digraph { `;

  this.preOrder(node => {
    if(!node) return;
    if(node.left) result += `${node.val} -> ${node.left.val} `;
    if(node.right) result += `${node.val} -> ${node.right.val} `;
  });

  return `${result};}`;
};

BstNode.prototype.treeify = function() {
  return Viz(this.getDotInfo());
};
