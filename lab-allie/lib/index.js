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

// bst.min(bst);
console.log('min', bst.min(bst));
console.log('max', bst.max(bst));
//node index.js to run

console.log('bft', bst.breadthFirst());