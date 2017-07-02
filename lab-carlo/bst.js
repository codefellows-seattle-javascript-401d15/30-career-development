'use strict';

let Viz = require('viz.js');

const bstNode = module.exports = function(val) {
  this.val = val; //unique id of the node
  this.data = null; //optional
  this.parent = null;
  this.left = null;
  this.right = null;
};

bstNode.prototype.insert = function(val){
  if(!this) return;
  if(val === this.val) throw new Error('val must be unique');
  //could also call .contains() or .lookuo() to validate unique value
  if(val > this.val) {
    if(!this.right){
      this.right = new bstNode(val);
      this.right.parent = this;
    }else this.right.insert(val);
  }else if(val < this.val) {
    if(!this.left){
      this.left = new bstNode(val);
      this.left.parent = this;
    } else this.left.insert(val);
  }
  return;
};

bstNode.prototype.delete = function(){

};

bstNode.prototype.contain = function(val){
  if(val < this.val){
    if(!this.left) return false;
    else return this.left.contains(val);
  }else if(val > this.val){
    if(!this.right) return false;
    else return this.right.contains(val);
  }else return true;
};

bstNode.prototype.lookup = function(val){
  if(val < this.val){
    if(!this.left) return false;
    else return this.left.lookup(val);
  }else if(val > this.val){
    if(!this.right) return false;
    else return this.right.lookup(val);
    console.log(this);
  }else return this;
};

bstNode.prototype.breadthFirst = function(){
  let q = [this];
  let result = '';
  let current;

  while(q.length > 0){
    current = q.pop();
    result += current.val + ' ';
    if(current.left) q.unshift(current.left);
    if(current.right) q.unshift(current.right);
  }
  return result;
};

bstNode.prototype.preOrder = function(cb){
  _walk(this);

  function _walk(node) {
    // if(!node) return;
    cb(node);
    if(node.left) _walk(node.left);
    if(node.right) _walk(node.right);
  };

};

bstNode.prototype.postOrder = function(cb){
  _walk(this);

  function _walk(node) {
    if(!node) return;
    this.left.postOrder(node);
    this.right.postOrder(node);
    cb(node);
  };
};

bstNode.prototype.inOrder = function(){
  _walk(this);

  function _walk(node) {
    if(!node) return;
    this.left.postOrder(node);
    cb(node);
    this.right.postOrder(node);
  };
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

bstNode.prototype.fromArray = function(array){
  array.forEach(val => this.insert(val));
};
