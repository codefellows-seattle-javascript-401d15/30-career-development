'use strict';

const bstNode = require('./lib/bst');
let bst, bstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function fromArray(arr) {
  let center = arr[Math.floor(arr.length / 2)];
  if (center === arr[0]) {
    bst.appendChild(center);
    return bst;
  }
  if (bst === undefined) {
    bst = new bstNode(center);
  }
  let leftArr = arr.slice(0, arr.indexOf(center));
  let rightArr = arr.slice((arr.indexOf(center) + 1), arr.length);
  bst.appendChild(center);
  fromArray(leftArr);
  fromArray(rightArr);
}

fromArray(bstArray);
