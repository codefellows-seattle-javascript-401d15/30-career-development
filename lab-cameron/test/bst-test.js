'use strict';

require('mocha');
const expect = require('chai').expect;
const bstNode = require('../lib/bst');


describe('Testing fromArray()', function() {
  let bst;
  let testArray = [1, 2, 3, 4, 5, 6, 7];
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
  it('should create a new bst from testArray', () => {
    fromArray(testArray);
    expect(bst.val).to.equal(testArray[Math.floor(testArray.length / 2)]);
    expect(bst.left.val < bst.val).to.equal(true);
    expect(bst.right.val > bst.val).to.equal(true);
  });
});

describe('Testing bstNode constructor', function() {
  let bst = new bstNode(3);
  it('should create a new bst node', () => {
    console.log(bst);
    expect(bst.val).to.equal(3);
    expect(typeof bst).to.equal(typeof {});
    expect(bst.left).to.equal(null);
    expect(bst.right).to.equal(null);
  });
});
