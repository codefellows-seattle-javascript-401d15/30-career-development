'use strict';

const BinaryTree = require('./lib/bst');

let myTree = new BinaryTree(13); //1

myTree.insert(15); //2
myTree.insert(14); //3
myTree.insert(12); //4
myTree.insert(20); //5
myTree.insert(10); //6
myTree.insert(45); //7
myTree.insert(40); //8
myTree.insert(11); //9
console.log('size', myTree.totalSize()); // 9
console.log('minDepth', myTree.minDepth()); // 3
console.log('maxDepth', myTree.maxDepth()); // 5
console.log('balanced', myTree.checkBalanced()); // false
