'use strict';

const expect = require('chai').expect;
const BSTNode = require('../lib/bst');

describe('testing the BSTNode construtor', function() {
  it('should create a new binary search tree', () => {
    let testBst = new BSTNode(4);
    expect(testBst).to.be.an('object');
    expect(testBst).to.be.an.instanceof(BSTNode);
    expect(testBst).to.have.property('value');
    expect(testBst).to.have.property('parent');
    expect(testBst).to.have.property('left');
    expect(testBst).to.have.property('right');
    expect(testBst.value).to.equal(4);
  });
});

describe('testing the appendChild method', function() {

  let testBST = new BSTNode(6);
  testBST.appendChild(15);
  testBST.appendChild(11);
  testBST.appendChild(17);
  testBST.appendChild(4);
  testBST.appendChild(5);
  testBST.appendChild(1);

  it('should insert nodes to the binary search tree', () => {
    expect(testBST.left).to.not.be.empty;
    expect(testBST.right).to.not.be.empty;
    expect(testBST.left).to.be.an.instanceof(BSTNode);
    expect(testBST.right).to.be.an.instanceof(BSTNode);
    expect(testBST.left).to.be.an('object');
    expect(testBST.right).to.be.an('object');
  });

  it('nodes left of root/parent should be smaller than root/parent', () => {
    expect(testBST.left.value).to.equal(4);
    expect(testBST.left.left.value).to.equal(1);
    expect(testBST.right.left.value).to.equal(11);
  });

  it('nodes right of root/parent should be larger than root/parent', () => {
    expect(testBST.right.value).to.equal(15);
    expect(testBST.right.right.value).to.equal(17);
    expect(testBST.left.right.value).to.equal(5);
  });
});

describe('testing the min method', () => {
  let testBST = new BSTNode(6);
  testBST.appendChild(5);
  testBST.appendChild(1);
  let expectedMin = testBST.min();

  it('should return the min value in bst', () => {
    expect(expectedMin).to.equal(1);
    expect(expectedMin).to.equal(testBST.left.left.value);
    expect(testBST.left.left.left).to.equal(null);
  });
});

describe('testing the max method', () => {
  let testBST = new BSTNode(6);
  testBST.appendChild(9);
  testBST.appendChild(10);
  let expectedMax = testBST.max();

  it('should return the max value in bst', () => {
    expect(expectedMax).to.equal(10);
    expect(expectedMax).to.equal(testBST.right.right.value);
    expect(testBST.right.right.right).to.equal(null);
  });
});

describe('testing the find method', () => {
  let testBST = new BSTNode(6);
  testBST.appendChild(5);
  let result = testBST.find(5);

  it('should return the node that contains the value', () =>{
    expect(result).to.be.an('object');
    expect(result.value).to.equal(5);
  });

  it('should return null if bst does not contain the value', () =>{
    let result = testBST.find(2);
    expect(result).to.equal(null);
  });
});

describe('testing the sorted array to bst function', () => {

  it('should throw an error if array is empty', () => {
    let arr = [];
    let err = 'array is empty';
    expect(function() {
      BSTNode.fromArray(arr).to.throw(err);
    });
  });

  it('should throw an error if array is not sorted', () => {
    let arr = [5,1,2];
    let err = 'array must be sorted';
    expect(function() {
      BSTNode.fromArray(arr).to.throw(err);
    });
  });

  it('should create bst from items in the array', () => {
    let arr = [1,2,3,4,5];
    let bst = BSTNode.fromArray(arr);

    expect(bst.value).to.equal(3);
    expect(bst.left.value).to.equal(1);
    expect(bst.left.right.value).to.equal(2);
    expect(bst.right.value).to.equal(4);
    expect(bst.right.right.value).to.equal(5);
    expect(bst).to.be.an.instanceof(BSTNode);
  });
});
