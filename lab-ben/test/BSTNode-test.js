'use strict';

const expect = require('chai').expect;

const BSTNode = require('../lib/BSTNode.js');

describe('BSTNode', function() {
  describe('#Insert', function() {
    let bst = new BSTNode(5);
    bst.insert(7);
    bst.insert(3);
    bst.insert(2);
    it('should add a node to the Binary Search Tree', () => {
      expect(bst.right.val).to.equal(7);
    });
    it('should have left nodes ', () => {
      expect(bst.left.val).to.equal(3);
    });
    it('should have a right node larger than the start', () => {
      expect(bst.val).to.be.lessThan(bst.right.val);
    });
  });

  describe('#fromArray', function() {
    let bst = new BSTNode(10);
    it('should add multiple items for each value in the array', () => {
      bst.fromArray([4, 8, 25]);
      expect(bst.left.val).to.equal(4);
      expect(bst.left.right.val).to.equal(8);
      expect(bst.right.val).to.equal(25);
    });
    it('should be able to add values more than once', () => {
      bst.fromArray([50, 100, 24]);
      expect(bst.right.right.right.val).to.equal(100);
    });
    it('should be typeof object', () => {
      expect(bst).to.be.an('object');
    });
  });

  describe('#min', function() {
    let bst = new BSTNode(6);
    it('should have the root if there is only one node', () => {
      expect(bst.min()).to.equal(6);
    });
    it('should have a new min if a lower value is added', () => {
      bst.insert(3);
      expect(bst.min()).to.equal(3);
    });
    it('should have the same min if a higher value is added', () => {
      bst.insert(7);
      expect(bst.min()).to.equal(3);
    });
  });

  describe('#max', function() {
    let bst = new BSTNode(6);
    it('should have the root if there is only one node', () => {
      expect(bst.max()).to.equal(6);
    });
    it('should have a new max if a higher value is added', () => {
      bst.insert(7);
      expect(bst.max()).to.equal(7);
    });
    it('should have the same max if a lower value is added', () => {
      bst.insert(3);
      expect(bst.max()).to.equal(7);
    });
  });

  describe('#find', function() {
    let bst = new BSTNode(15);
    bst.fromArray([4, 9, 24, 19, 23]);
    it('should return an object when the value is found', () => {
      expect(bst.find(19)).to.be.an('object');
    });
    it('should return the correct value', () => {
      expect(bst.find(23).val).to.equal(23);
    });
    it('should return and error when a value is not included', ()=> {
      expect(bst.find(1)).to.equal('value not found');
    });
  });
});
