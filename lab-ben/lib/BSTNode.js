'use strict';

const BstNode = module.exports = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.parent = null;
};

// O(n)
BstNode.prototype.insert = function(val) {
  if(!this) return;
  if(val === this.val) return new Error('val must be unique');
  if(val > this.val) {
    if(!this.right) {
      this.right = new BstNode(val);
      this.right.parent = this;
    } else this.right.insert(val);
  } else {
    if(!this.left) {
      this.left = new BstNode(val);
      this.left.parent = this;
    } else this.left.insert(val);
  }
  return;
};

// O(n^2)
BstNode.prototype.fromArray = function(array) {
  array.forEach(item => this.insert(item));
};

// O(n)
BstNode.prototype.min = function() {
  if(!this) return;
  if(this.left) {
    return this.left.min();
  }
  return this.val;
};

//O(n)
BstNode.prototype.max = function() {
  if(!this) return;
  if(this.right) {
    return this.right.min();
  }
  return this.val;
};

// O(n)
BstNode.prototype.find = function(val) {
  if(!val) return new Error('Please enter a value');
  if(this.val === val) return this;
  if(this.val > val) {
    if(!this.left) return 'value not found';
    return this.left.find(val);
  }
  if(this.val < val) {
    if(!this.right) return 'value not found';
    return this.right.find(val);
  }
};
