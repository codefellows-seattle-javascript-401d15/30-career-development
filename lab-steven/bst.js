'use strict';

const bstNode = module.exports = function(val){
  this.val = val;
  this.parent = null;
  this.left = null;
  this.right = null;
}

bstNode.fromArray = function(array){
  array.forEach(val => bstNode.appendChild(val));
}

bstNode.prototype.min = function(){
  return _goLeft(this)

  function _goLeft(node){
    if (node.left) return _goLeft(node.left);
    return node.val;
  }
};

bstNode.prototype.max = function(){
  return _goRight(this)

  function _goRight(node){
    if (node.right) return _goRight(node.right);
    return node.val;
  }
}

bstNode.prototype.appendChild = function(val){
  if(!this) return;

  if(val === this.val) throw new Error('val must be unique');

  if(val > this.val) {
    if(!this.right) {
      this.right = new bstNode(val);
      this.right.parent = this;
    } else {
      this.right.appendChild(val);
    }
  } else if (val < this.val) {
    if(!this.left) {
      this.left = new bstNode(val);
      this.left.parent = this;
    } else {
      this.left.appendChild(val);
    }
  }
  return;
};

bstNode.prototype.delete = function(){

};

bstNode.prototype.contains = function(val){
  if(val < this.val) {
    if(!this.left) return false;
    else return this.left.contains(val);
  } else if (val > this.val) {
    if(!this.right) return false;
    else return this.right.contains(val);
  } else return true;
};

bstNode.prototype.find = function(val){
  if(val < this.val) {
    if(!this.left) return null;
    else return this.left.find(val);
  } else if (val > this.val) {
    if(!this.right) return null;
    else return this.right.find(val);
  } else return this;
};

bstNode.prototype.breadthFirst = function(){
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

bstNode.prototype.preOrder = function(cb){
  _walk(this);

  function _walk(node, cb) {
    if(!node) return;
    cb(node);
    this.left.preOrder(node);
    this.right.preOrder(node);
  }
};

bstNode.prototype.postOrder = function(cb){
  _walk(this);

  function _walk(node, cb) {
    if(!node) return;
    this.left.postOrder(node);
    this.right.postOrder(node);
    cb(node);
  }

};

bstNode.prototype.inOrder = function(cb){
  _walk(this);

  function _walk(node, cb) {
    if(!node) return;
    this.left.inOrder(node);
    cb(node);
    this.right.inOrder(node);
  }

};

// bstNode.prototype.getDotInfo = function() {
//   let result = `digraph { `
//
//   this.preOrder(node => {
//     if(!node) return
//     if(node.left) result += `${node.val} -> ${node.left.val} `
//     if(node.right) result += `${node.val} -> ${node.right.val} `
//   })
//
//   return `${result};}`
// }
//
// bstNode.prototype.treeify = function() {
//   return Viz(this.getDotInfo())
// }
