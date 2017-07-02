'use strict';

//creating a constructor for the tree node
function Node(val) {
  this.value = val
  this.data = null
  this.left = null
  this.right = null
  this.parent = null
}

//creating a constructor for the binary search tree
function BinarySearchTree() {
  this.root = null
}

//nodes to the left of the root are smaller values than the root
//nodes to the right of the root are higher values than the root

BinarySearchTree.prototype.push = function(val) {
  let root = this.root
  if(!root) {
    this.root = new Node(val)
    return;
  }
  let currentNode = root
  let newNode = new Node(val)

  while(currentNode) {
    if(val < currentNode.value) {
      if(!currentNode.left) {
        currentNode.left = newNode
        break
      } else {
        currentNode = currentNode.left
      }
    } else {
      if(!currentNode.right) {
        currentNode.right = newNode
        break
      } else {
        currentNode = currentNode.right
      }
    }
  }
}

//finding min node value in tree
function minNode(node) {
  if(!node) {
    return 0
  }
  if(node.left) {
    return minNode(node.left)
  }
  return node.value
}

//finding max node value in tree
function maxNode(node) {
  if(!node) {
    return 0
  }
  if(node.right) {
    return maxNode(node.right)
  }
  return node.value
}

//Binary tree from array method
function bstFromArray(num) {
  function recurse(num, start, end) {
    if(start > end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let root = new Node(num[mid]);
    root.left = recurse(num, start, mid - 1);
    root.right = recurse(num, mid + 1, end);
    return root;
  }
  return recurse(num, 0, num.length - 1);
}

//inserting a node into the binary search tree
BinarySearchTree.prototype.insertNode = function(data) {

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
        if(!currentNode) {
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

//setting up a find method to return node that contains the value and otherwise returns null
BinarySearchTree.prototype.find = function(data) {
  let current = this.root;
  while(current.data != data) {
    if(data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if(current === null) {
      return null;
    }
  }
  return current;
};

//Setting up traversal method in order to implement toArray method
BinarySearchTree.prototype = {
  traverse: function(process) {
    function inOrder(node) {
      if(node) {
        //traverse left subtree
        if (node.left !== null) {
          inOrder(node.left);
        }
        //call the process method on this nodep
        process.call(this, node);

        // traverse right subtree
        if (node.right !== null) {
          inOrder(node.right);
        }
      }
    }
    //start with the root
    inOrder(this._root);
  },
};

//binary search tree methods that return size of BinarySearchTree
//to array method and to string
BinarySearchTree.prototype = {
  size: function() {
    let length = 0;
    this.traverse(function(node) {
      length++;
    });
    return length;
  },

  toArray: function() {
    let result = [];
    this.traverse(function(node) {
      result.push(node.value);
    });
    return result;
  },

  toString: function() {
    return this.toArray().toString();
  },
};
