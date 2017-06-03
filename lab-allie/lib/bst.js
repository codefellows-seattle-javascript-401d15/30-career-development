'use strict';

const bstNode = module.exports = function(val) {
  this.val = val,
  this.data = null,
  this.left = null,
  this.right = null, 
  this.parent = null;
};

// O(n)
bstNode.prototype.appendChild = function(val) {
  if(!this) return;
  if (val === this.val) throw new Error('val must be unique');
  if(val > this.val) {
    if(!this.right) {
      this.right = new bstNode(val);
      this.right.parent = this;
    } else this.right.appendChild(val);
  } else if (val < this.val) {
    if(!this.left) {
      this.left = new bstNode(val);
      this.left.parent = this;
    } else this.left.appendChild(val);
  }
  return;
};

// O(n)
bstNode.prototype.contains = function(val) {
  if(val < this.val) {
    if(!this.left) return false;
    else return this.left.contains(val);
  } else if(val > this.val) {
    if(this.right) return false;
    else return this.right.contains(val);
  } else return true;
};

// O(n)
bstNode.prototype.find = function(val) {
  if(val < this.val) {
    if(!this.left) return null;
    else return this.left.find(val);
  } else if(val > this.val) {
    if(this.right) return null;
    else return this.right.find(val);
  } else return this;
};

// O(n)
bstNode.prototype.min = function(node) {
  if(!node) return null;
  
  if(node.left) return this.min(node.left);
  
  return node.val;
};

// O(n)
bstNode.prototype.max = function(node) {
  if(!node) return null;
  
  if(node.right) return this.max(node.right);
  
  return node.val;
};

// O(n)
bstNode.fromArray = function (node, array){
  if(!array) return null;
  
  for(let i = 0; i < array.length; i++) {
    node.appendChild(array[i]);
  }
  return node;
};


// ** STRETCH GOAL ** //
// O(n)
bstNode.prototype.balance = function(array) {};





// O(n)
bstNode.prototype.breadthFirst = function() {
  let q = [this];
  let result = '';
  let current;
  
  while(q.length > 0) {
    current = q.pop();
    result += current.val + '';
    if(current.left) q.unshift(current.left);
    if(current.right) q.unshift(current.right);
  }
  return result;
};

// O(n)
bstNode.prototype.preOrder = function(cb) {
  _walk(this);
  
  function _walk(node) {
    if(!node) return;
    cb(node);
    this.left.preOrder(node);
    this.right.preOrder(node);
  }
};

// O(n)
bstNode.prototype.postOrder = function(cb) {
  _walk(this);
  
  function _walk(node) {
    if(!node) return;
    this.left.postOrder(node);
    this.right.postOrder(node);
    cb(node);
  }
};

// O(n)
bstNode.prototype.inOrder = function(cb) {
  _walk(this);
  
  function _walk(node) {
    if(!node) return;
    this.left.inOrder(node);
    cb(node);
    this.right.inOrder(node);
  }
};