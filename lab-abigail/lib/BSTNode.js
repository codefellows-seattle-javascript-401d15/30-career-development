'use strict'

let BST = require('./bst');
let Promise = require('bluebird');
let fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});
let bst;

let array = [...Array(100).keys()]
arr.sort(() => .5 - Math.random()).forEach((n, i) => {
  if(i === 0) bst = new BST(n)
  else bst.insert(n)
});

const BstNode = module.exports = function(val) {
  this.val = val;
  this.data = null;
  this.parent = null;
  this.left = null;
  this.right = null;
}

BstNode.prototype.appendChild = function(val) {
  if(!this) return
  if(val === this.val) throw new Error('val must be unique')
  if(val > this.val) {
    if(!this.right) {
      this.right = new BstNode(val);
      this.right.parent = this;
    } else this.right.appendChild(val)
  } else if(val < this.val) {
    if(!this.left) {
      this.left = new BstNode(val);
      this.left.parent = this;
    } else this.left.appendChild(val);
  }
  return;
}

BstNode.fromArray = function(node, array) {
  for (let i = 0; i < array.length; i++) {
    BstNode.appendChild(array[i]);
  }
  return node;
};

BstNode.prototype.min = function(node) {
  if(!node) return new Error('no val');
  if(this.left) {
    return this.left.min();
  }
  return this.val;
};

BstNode.prototype.max = function(node) {
  if(!node) return new Error('no val');
  if(this.right) {
    return this.right.min();
  }
  return this.val;
};

BstNode.prototype.find = function(val) {
  if(!val) return new Error('no val');
  if(this.val === val) return this;
  if(this.val > val) {
    if(!this.left) return new Error('no val');
    return this.left.find(val);
  }
  if(this.val < val) {
    if(!this.right) return new Error('no val');
    return this.right.find(val);
  }
};
