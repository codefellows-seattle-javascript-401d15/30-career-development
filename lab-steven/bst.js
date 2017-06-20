'use strict';

//O(1)
const BstNode = module.exports = function(val){
  this.val = val;
  this.parent = null;
  this.left = null;
  this.right = null;
  //O(n log n)
  this.fromArray = function(array){
    array.forEach(item => this.appendChild(item));
    return this;
  };
};

//O(log n)
BstNode.prototype.min = function(){
  return _goLeft(this);

  function _goLeft(node){
    if (node.left) return _goLeft(node.left);
    return node.val;
  }
};

//O(log n)
BstNode.prototype.max = function(){
  return _goRight(this);

  function _goRight(node){
    if (node.right) return _goRight(node.right);
    return node.val;
  }
};

//O(log n)
BstNode.prototype.appendChild = function(val){
  if(!this) return;

  if(val === this.val) throw new Error('val must be unique');

  if(val > this.val) {
    if(!this.right) {
      this.right = new BstNode(val);
      this.right.parent = this;
    } else {
      this.right.appendChild(val);
    }
  } else if (val < this.val) {
    if(!this.left) {
      this.left = new BstNode(val);
      this.left.parent = this;
    } else {
      this.left.appendChild(val);
    }
  }
  return;
};

// BstNode.prototype.delete = function(){
//
// };

//O(log n)
BstNode.prototype.contains = function(val){
  if(val < this.val) {
    if(!this.left) return false;
    else return this.left.contains(val);
  } else if (val > this.val) {
    if(!this.right) return false;
    else return this.right.contains(val);
  } else return true;
};

//O(log n)
BstNode.prototype.find = function(val){
  if(val < this.val) {
    if(!this.left) return null;
    else return this.left.find(val);
  } else if (val > this.val) {
    if(!this.right) return null;
    else return this.right.find(val);
  } else return this;
};

//O(n)
BstNode.prototype.breadthFirst = function(){
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

//O(n)
BstNode.prototype.preOrder = function(cb){
  _walk(this);

  function _walk(node, cb) {
    if(!node) return;
    cb(node);
    this.left.preOrder(node);
    this.right.preOrder(node);
  }
};

//O(n)
BstNode.prototype.postOrder = function(cb){
  _walk(this);

  function _walk(node, cb) {
    if(!node) return;
    this.left.postOrder(node);
    this.right.postOrder(node);
    cb(node);
  }

};

//O(n)
BstNode.prototype.inOrder = function(cb){
  _walk(this);

  function _walk(node, cb) {
    if(!node) return;
    this.left.inOrder(node);
    cb(node);
    this.right.inOrder(node);
  }

};
