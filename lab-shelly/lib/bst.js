'use strict';

const BSTNode = module.exports = function(value) {
  this.value = value;
  this.parent = null;
  this.left = null;
  this.right = null;
};

//O(log n)
BSTNode.prototype.appendChild = function(value) {
  if(!this) return;
  if(value > this.value) {
    if(!this.right) {
      this.right = new BSTNode(value);
      this.right.parent = this;
    } else this.right.appendChild(value);
  } else if(value < this.value) {
    if(!this.left) {
      this.left = new BSTNode(value);
      this.left.parent = this;
    } else this.left.appendChild(value);
  }
  return;
};

//O(log n)
BSTNode.prototype.min = function() {
  let current = this;
  if(!current) return;

  while(current.left) {
    current = current.left;
  }
  return current.value;
};

//O(log n)
BSTNode.prototype.max = function() {
  let current = this;
  if(!current) return;

  while(current.right) {
    current = current.right;
  }
  return current.value;
};

//O(log n)
BSTNode.prototype.find = function(value) {
  if(value === this.value) return this;
  if(value < this.value) {
    if(!this.left) return null;
    else return this.left.find(value);
  } else if(value > this.value) {
    if(!this.right) return null;
    else return this.right.find(value);
  }
};

// O(log n)
//refactored http://www.geeksforgeeks.org/sorted-array-to-balanced-bst/
BSTNode.fromArray = function(arr) {
  if(arr.length === 0) {
    throw new Error('array is empty');
  } else if(arr[0] > ([arr.length - 1])) {
    throw new Error('array must be sorted');
  } else return sortedArrToBST(arr, 0, arr.length - 1);

  function sortedArrToBST(arr, start, end) {
    if(start > end) return null;

    let middle = Math.floor((start + end)/2);
    let bstNode = new BSTNode(arr[middle]);

    bstNode.left = sortedArrToBST(arr, start, middle - 1);
    bstNode.right = sortedArrToBST(arr, middle + 1, end);
    return bstNode;
  }
};
