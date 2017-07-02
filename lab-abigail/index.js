'use strict';

let BST = require('./lib/BSTNode.js');
let bst = new BST(30);
bst.appendChild(4);
bst.appendChild(110);
bst.appendChild(15);
bst.appendChild(78);
console.log('bst', bst);
console.log('minimum', bst.min(bst));
console.log('maximum', bst.max(bst));
