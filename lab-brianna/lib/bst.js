'use strict';

const BST = module.exports = function() {
  this.root = null;
};

const BstNode = module.exports = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.parent = null;
  this.data = null;
};

BST.prototype.insert = function(val) {
  if(!this) return;
  if(val === this.val) throw new Error('The value must be unique.');
  if(val > this.val) {
    if(!this.right) {
      this.right = new BstNode(val);
      this.right.parent = this;
    } else {
      this.right.insert(val);
    }
  } else if(val < this.val) {
    if(!this.left) {
      this.left = new BstNode(val);
      this.left.parent = this;
    } else {
      this.left.insert(val);
    }
  }
  return;
};

BST.prototype.findNode = function(val) {
  if(val < this.val) {
    if(!this.left) return null;
    else return this.left.findNode(val);
  } else if(val > this.val) {
    if(!this.right) return null;
    else return this.right.findnode(val);
  } else {
    return this;
  }
};

BST.prototype.findMax = function() {
  if(this.right) {
    this.right.findMax();
  } else {
    return this.val;
  }
};

BST.prototype.findMin = function() {
  if(this.left) {
    this.left.findMin();
  } else {
    return this.val;
  }
};

// function BST.FromArray(arr) {
//   arr.sort();
//   arr.length / 2;
// }
