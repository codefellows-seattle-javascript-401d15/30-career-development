'use strict';

let BST = require('./bst.js');
let bst = new BST(4);
bst.appendChild(6);
bst.appendChild(3);
bst.appendChild(2);
bst.appendChild(100);
bst.appendChild(99);
bst.appendChild(5);

// console.log('bft', bst.breadthFirst());
// console.log('bst', bst);

console.log('min********', bst.min());
console.log('max********', bst.max());
