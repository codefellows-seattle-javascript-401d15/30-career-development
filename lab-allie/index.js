'use strict';

let BST = require('./lib/bst.js');
let bst = new BST(5);
bst.appendChild(2);
bst.appendChild(8);
bst.appendChild(100);
bst.appendChild(6);
bst.appendChild(1);
bst.appendChild(40);
bst.appendChild(70);
bst.appendChild(55);
console.log('min', bst.min(bst));
console.log('max', bst.max(bst));




// let Promise = require('bluebird');
// let fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});
// 
// bst.balance(bst);
// let svg = bst.treeify();
// 
// fs.writeFileProm(`${__dirname}/data/tree.html`, svg)
// .catch(console.error);

// 
// console.log('isbalanced', bst.isBalanced(bst));
// console.log('isbalanced', bst.isBalanced(bst));
// 
// 
// 
// // console.log(bst);
// // console.log(bst.left);
// // console.log(bst.height(bst));
// 
// bst.find(100); 
// bst.find(200); //should be null
// 
// bst.contains(100);
// bst.contains(200); //should be false
// 
// // console.log(bst.height(bst.find(bst)));
// // console.log(bst.isBalanced(bst));
// 
// // console.log('min', bst.min(bst));
// // console.log('max', bst.max(bst));
// //node index.js to run
// 
// // console.log('bft', bst.breadthFirst());
// 
// let arrayNode = new BST(15);
// // // console.log();
// console.log('from array', BST.fromArray(arrayNode, [1, 5, 8, 3, 9, 2, 4, 32, 19, 62, 33, 90]));
// // console.log('balanced', arrayNode.isBalanced(arrayNode));
// // console.log('bft array node', arrayNode.breadthFirst());
// console.log('bft array node', arrayNode.preOrder((node => {
//   if(!node) return;
//   console.log(node.val);
// })));
// // // // console.log('bst treeify', bst.treeify());
console.log('height', bst.height(bst));
// // console.log('height', arrayNode.height(arrayNode));
// // console.log('height', arrayNode.height(arrayNode.find(3)));
// 
// // console.log(arrayNode.find(1));
// // console.log(arrayNode.find(19));
// // console.log(arrayNode.contains(1));
// // console.log(arrayNode.contains(19));
// 
// let balance = new BST(15);
// BST.fromArray(balance, [1, 5, 8, 3, 9, 2, 4, 32, 19, 62, 33, 90, 91, 92, 60, 63, 44, 47, 39, 30]);
// // console.log('isbalanced', balance.isBalanced(balance));
// // console.log('call balance', balance.balance(balance));
// // console.log('isbalanced', balance.isBalanced(balance));
