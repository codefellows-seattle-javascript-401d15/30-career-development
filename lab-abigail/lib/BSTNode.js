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

BstNode.prototype.min = function(bst) {
  if(!bst) return new Error('no val');
  if(this.left) {
    return this.left.min();
  }
  return bst;
};

BstNode.prototype.max = function(bst) {
  if(!bst) return new Error('no val');
  if(this.right) {
    return this.right.max();
  }
  return bst;
};

BstNode.prototype.find = function(val) {
  if(val < this.val) {
    if(!this.left) return null;
    else return this.left.find(val);
  } else if(val > this.val) {
    if(!this.right) return null;
    else return this.right.find(val);
  } else return this;
}
