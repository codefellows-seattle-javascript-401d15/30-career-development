'use strict';

let BST = require('./bst');
let Promise = require('bluebird');
let fs = Promise.promisifyAll(require('fs'), {suffix: 'Prom'});
let bst;

let arr = [...Array(20).keys()];
arr.sort(() => .5 - Math.random()).forEach((n, i) => {
  if(i === 0) bst = new BST(n);
  else bst.append(n);
});

bst.max();
bst.min();

let svg = bst.treeify();

fs.writeFileProm(`${__dirname}/../data/tree.html`, svg)
.catch(console.error);
