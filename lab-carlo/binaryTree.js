'use strict';

let BST = require('./bst.js');

let binaryTree = new BST(9);
let numArray = [1,2,3,4,5,6];

binaryTree.fromArray(numArray);
console.log(binaryTree);
