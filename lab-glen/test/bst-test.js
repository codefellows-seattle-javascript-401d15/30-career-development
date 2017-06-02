'use strict';

const expect = require('chai').expect;
const BST = require('../lib/bst.js');
const testArray = [1,2,3,4,5,6,7,8,9];

describe('BST constructor test', function() {
  it('should create a new Binary Seach Tree', () => {
    const testBst = new BST.BST();
    expect(testBst).to.be.an.instanceOf(Object);
  });
});

describe('BST insert node ', function() {
  it('should insert a node', () => {
    const testBst = new BST.BST();
    testBst.insertNode(4);
    console.log(testBst);
    expect(testBst).to.be.an.instanceOf(Object);
    expect(testBst.root.data).to.equal(4);
    expect(testBst.root.left).to.equal(null);
    expect(testBst.root.right).to.equal(null);
  });
});

describe('BST from Array test', function() {
  it('should create a new Binary Seach Tree from an Array', () => {
    const testBst = new BST.bstFromArray(testArray);
    console.log(testBst);
    expect(testBst).to.be.an.instanceOf(Object);
    expect(testBst.data).to.equal(5);
    expect(testBst.left.data).to.equal(2);
    expect(testBst.left.left.data).to.equal(1);
    expect(testBst.right.data).to.equal(7);
    expect(testBst.right.right.data).to.equal(8);
  });
});

describe('BST min, max and find methods', function() {

  const testBst = new BST.BST();
  testBst.insertNode(1);
  testBst.insertNode(2);
  testBst.insertNode(3);
  testBst.insertNode(4);
  console.log(testBst);

  it('should find min value', () => {
    var min = testBst.min();
    expect(min).to.equal(1);
  });

  it('should find max value', () => {
    var max = testBst.max();
    expect(max).to.equal(4);
  });

  it('should find a given value and return a node', () => {
    var find = testBst.find(3);
    expect(find.data).to.equal(3);
  });


});
