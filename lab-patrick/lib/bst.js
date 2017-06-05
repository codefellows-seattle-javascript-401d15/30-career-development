'use strict';

let Viz = require('viz.js');

const bstNode = module.exports = function(val){
  this.val = val;
  this.data = null;
  this.parent = null;
  this.left = null;
  this.right = null;
};

//O(n)
bstNode.prototype.append = function (val) {
  if(!this) return;
  if(val === this.val) throw new Error('must be unique val');

  if(val > this.val){
    if(!this.right){
      this.right = new bstNode(val);
      this.right.parent = this;
    } else this.right.append(val);
  } else if (val <this.val){
    if(!this.left){
      this.left = new bstNode(val);
      this.left.parent = this;
    } else this.left.append(val);
  }
  return;
};

//O(n^2)
bstNode.prototype.fromArray = function (array) {
  array.forEach(val => this.append(val));
};

//O(n)
bstNode.prototype.find =function(val){
  if(val<this.val){
    if(!this.left) console.log(null);
    else return this.left.find(val);
  } else if (val > this.val){
    if(!this.right) console.log(null);
    else return this.right.find(val);
  } else {
    console.log(this);
    return this;
  }
};
//O(n)
bstNode.prototype.min = function(){
  if(this.left){
    return this.left.min();
  }
  console.log(this.val);
  return this.val;
};

//O(n)
bstNode.prototype.max = function(){
  if(this.right){
    return this.right.max();
  }
  console.log(this.val);
  return this.val;
};

bstNode.prototype.preOrder = function(cb) {
  _walk(this);
  function _walk(node) {
    cb(node);
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  }
};
bstNode.prototype.getDotInfo = function() {
  let result = `digraph { `;

  this.preOrder(node => {
    if(!node) return;
    if(node.left) result += `${node.val} -> ${node.left.val} `;
    if(node.right) result += `${node.val} -> ${node.right.val} `;
  });

  return `${result};}`;
};

bstNode.prototype.treeify = function(){
  return Viz(this.getDotInfo());
};
