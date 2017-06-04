'use strict';

const bstNode = module.exports = function(val) {
  this.val = val,
  this.data = null,
  this.left = null,
  this.right = null, 
  this.parent = null;
};

// let Viz = require('viz.js');

// O(log n)
bstNode.prototype.appendChild = function(val) {
  if(!this) return;
  if (val === this.val) throw new Error('val must be unique');
  if(val > this.val) {
    if(!this.right) {
      this.right = new bstNode(val);
      this.right.parent = this;
    } else this.right.appendChild(val);
  } else if (val < this.val) {
    if(!this.left) {
      this.left = new bstNode(val);
      this.left.parent = this;
    } else this.left.appendChild(val);
  }
  return;
};

// O(log n)
bstNode.prototype.contains = function(val) {
  if(val < this.val) {
    if(!this.left) return false;
    else return this.left.contains(val);
  } else if(val > this.val) {
    if(!this.right) return false;
    else return this.right.contains(val);
  } else return true;
};

// O(log n)
bstNode.prototype.find = function(val) {
  if(val < this.val) {
    if(!this.left) return null;
    else return this.left.find(val);
  } else if(val > this.val) {
    if(!this.right) return null;
    else return this.right.find(val);
  } else return this;
};

// O(log n)
bstNode.prototype.min = function(node) {
  if(!node) return null;
  
  if(node.left) return this.min(node.left);
  
  return node.val;
};

// O(log n)
bstNode.prototype.max = function(node) {
  if(!node) return null;
  
  if(node.right) return this.max(node.right);
  
  return node.val;
};

// O(n)
bstNode.fromArray = function (node, array){
  if(!array) return null;
  
  for(let i = 0; i < array.length; i++) {
    node.appendChild(array[i]);
  }
  return node;
};


// ** STRETCH GOAL ** //
// O(n)
// bstNode.prototype.balance = function(array) {};





// O(n)
bstNode.prototype.breadthFirst = function() {
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

// O(n)
bstNode.prototype.preOrder = function(cb) {
  _walk(this);
  
  function _walk(node) {
    if(!node) return;
    cb(node);
    this.left.preOrder(node);
    this.right.preOrder(node);
  }
};

// O(n)
bstNode.prototype.postOrder = function(cb) {
  _walk(this);
  
  function _walk(node) {
    if(!node) return;
    this.left.postOrder(node);
    this.right.postOrder(node);
    cb(node);
  }
};

// O(n)
bstNode.prototype.inOrder = function(cb) {
  _walk(this);
  
  function _walk(node) {
    if(!node) return;
    this.left.inOrder(node);
    cb(node);
    this.right.inOrder(node);
  }
};

// bstNode.prototype.getDotInfo = function() {
//   let result = `diagraph {`;
//     
//   this.preOrder(node => {
//     if(!node) return;
//     if(node.left) result += `${node.val} -> ${node.left.val}`;
//     if(node.right) result += `${node.val} -> ${node.right.val}`;
//   });
//   return `${result}`;
// };
// 
// bstNode.prototype.treeify = function() {
//   return Viz(this.getDotInfo());
// };


bstNode.prototype.height = function(node) {
  if(!node) return 0;
  
  let leftHeight = this.height(node.left);
  let rightHeight = this.height(node.right);
  
  return Math.max(leftHeight, rightHeight) + 1;
};


bstNode.prototype.isBalanced = function(node) {
  if(!node) return null;
  
  let leftHeight = this.height(node.left);
  let rightHeight = this.height(node.right);
  
  let difference = leftHeight - rightHeight;
  console.log('difference', difference);
  
  if(Math.abs(difference) > 1) {
    return false;
  } else {
    return true;
  }

};