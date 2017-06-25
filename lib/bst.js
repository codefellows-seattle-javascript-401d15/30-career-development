'use strict';

const Viz = require('viz.js');


const bstNode = module.export = module.exports = function(val) {
  this.val = val;
  this.data = null;
  this.parent = null;
  this.left = null;
  this.right = null;
};

bstNode.prototype.appendChild = function(val) {
  if(!this) return;
  if(val === this.val) throw new Error('must be unique val');
  if(val > this.val){
    if(!this.right) {
      this.right = new bstNode(val);
      this.right.parent = this;
    } else this.right.appendChild(val);
  } else if(val < this.val) {
    if(!this.left) {
      this.left = new bstNode(val);
      this.left.parent = this;
    }else this.left.appendChild(val);
  }
  return;
};

bstNode.prototype.fromArray = function(arr) {
  if(!this) return;
  arr.forEach(node => this.appendChild(node));
};

bstNode.prototype.min = function() {
  if(!this) return;
  if(this.left) {
    return this.left.min();
  }
  return this.val;
};


bstNode.prototype.max = function() {
  if(!this) return;
  if(this.right) {
    return this.right.max();
  }
  return this.val;
};

bstNode.prototype.find = function(val) {
  if(!this) return;
  if(this.val === val) return this;
  if(this.val < val) {
    if(!this.right) return;
    return this.right.find(val);
  }
  if (this.val > val) {
    if(!this.left) return;
    return this.left.find(val);
  }
};
