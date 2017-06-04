'use strict';

let BST = require('./bst.js');
let bst = new BST(5);

bst.appendChild(2);
bst.appendChild(8);
bst.appendChild(100);


bst.find(100); 
bst.find(200); //should be null

bst.contains(100);
bst.contains(200); //should be false

console.log('min', bst.min(bst));
console.log('max', bst.max(bst));
//node index.js to run

console.log('bft', bst.breadthFirst());

let arrayNode = new BST(5);
// console.log();
console.log('from array', BST.fromArray(arrayNode, [1, 15, 8, 3, 9, 2, 4]));
console.log('bft array node', arrayNode.breadthFirst());
// console.log('bft array node', arrayNode.preOrder());
// // console.log('bst treeify', bst.treeify());
// console.log('height', bst.height(bst));
console.log('height', arrayNode.height(arrayNode));

// console.log(arrayNode.find(1));
// console.log(arrayNode.find(19));
// console.log(arrayNode.contains(1));
// console.log(arrayNode.contains(19));