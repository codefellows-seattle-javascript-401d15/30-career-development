'use strict';

const BST = module.exports = exports = function() {
  this.root = null;
};

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

var bstFromArray = function (nums) {
  function recurse(nums, start, end) {
    if(start > end) {
      return null;
    }
    let mid = Math.floor((end + start) / 2);
    let root = new Node(nums[mid]);
    root.left = recurse(nums, start, mid - 1);
    root.right = recurse(nums, mid + 1, end);
    return root;
  }
  return recurse(nums, 0, nums.length - 1);
};

BST.prototype.insertNode = function(data) {

  let node = {
    data: data,
    left: null,
    right: null,
  };

  let currentNode;

  if(!this.root) {
    this.root = node;
  } else {
    currentNode = this.root;
    while(currentNode) {
      if(data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = node;
          break;
        }
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if(!currentNode.right) {
          currentNode.right = node;
          break;
        }
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
  }
};

BST.prototype.min = function(node) {
  if(!node) {
    node = this.root;
  }
  while(node.left) {
    node = node.left;
  }
  return node.data;
};

BST.prototype.max = function (node) {
  if(!node) {
    node = this.root;
  }
  while(node.right) {
    node = node.right;
  }
  return node.data;
};

BST.prototype.find = function (data) {
  let current = this.root;
  while(current.data != data) {
    if(data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if(current == null) {
      return null;
    }
  }
  return current;
};
