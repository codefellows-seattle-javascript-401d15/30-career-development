'use strict';

let BST = require('./bst.js');
let bst = new BST(4);
bst.appendChild(6);
bst.appendChild(3);
bst.appendChild(2);
bst.appendChild(100);
bst.appendChild(99);
bst.appendChild(5);

let arr = [55, 1, 10, 11, 22, 20, 15];
// let arrNode = new BST(4);
// console.log('bft', bst.breadthFirst());
// console.log('bst', bst);

console.log('fromArray', bst.fromArray(arr));
// console.log('fromArray', );
console.log('min********', bst.min());
console.log('max********', bst.max());
