'use strict';

const BstNode = module.exports = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

//O(log n)
BstNode.prototype.find = function(val) {
  if (val < this.val) {
    if (!this.left) return null;
    return this.left.find(val);
  } else if (val > this.val) {
    if (!this.right) return null;
    return this.right.find(val);
  } return this;
};

//O(log n)
BstNode.prototype.insert = function(val) {
  if(!this) return;
  if(val === this.val) throw new Error('no duplicate values');
  if(val > this.val) {
    !this.right ? this.right = new BstNode(val) : this.right.insert(val);
  }
  if(val < this.val) {
    !this.left ? this.left = new BstNode(val) : this.left.insert(val);
  }
};

//O(log n)
BstNode.prototype.max = function() {
  if (!this.right) return this;
  return this.right.max();
};

//O(log n)
BstNode.prototype.min = function() {
  if (!this.left) return this;
  return this.left.min();
};

//O(n)
let size = 0;
BstNode.prototype.totalSize = function() {
  return dfs(this);
  function dfs(node) {
    size++;
    if(node){
      if(node.left) dfs(node.left);
      if(node.right) dfs(node.right);
    }
    return size;
  }
};

//O(log n)
let depths = [];
BstNode.prototype.maxDepth = function(d, itt) {
  if(!this) return 0;
  if(!itt) itt = 1;
  if(!d) d = 1;
  let leftDepth = d;
  let rightDepth = d;
  if(this.left) leftDepth = this.left.maxDepth(d+1);
  if(this.right) rightDepth = this.right.maxDepth(d+1);
  if(!this.left && !this.right) {
    leftDepth >= rightDepth ? depths.push(leftDepth) : depths.push(rightDepth);
  }
  return Math.max.apply(null, depths);
};
//O(log n)
BstNode.prototype.minDepth = function(d, itt) {
  if(!this) return 0;
  if(!itt) itt = 1;
  if(!d) d = 1;
  let leftDepth = d;
  let rightDepth = d;
  if(this.left) leftDepth = this.left.maxDepth(d+1);
  if(this.right) rightDepth = this.right.maxDepth(d+1);
  if(!this.left && !this.right) {
    leftDepth >= rightDepth ? depths.push(leftDepth) : depths.push(rightDepth);
  }
  return Math.min.apply(null, depths);
};

//O(n)
BstNode.prototype.fromArray = function(arr) {
  if(!arr) throw new Error('no array');
  // let root = new BstNode(arr[0]);
  for(let i = 0; i < arr.length; i++) {
    this.insert(arr[i]);
  }
};
//O(log n)
BstNode.prototype.checkBalanced = function() {
  let min = this.minDepth();
  let max = this.maxDepth();
  let difference = Math.abs(min - max);
  return difference > 1 ? false : true;
};
