'use strict';

const expect = require('chai').expect;
const bstNode = require('../lib/bstNode.js');

describe('bstNode', function(){
  describe('#insert', function(){
    let bst = new bstNode(6);
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);
    bst.insert(7);
    bst.insert(8);
    bst.insert(9);
    it('should have nodes on the left that are small', () => {
      expect(bst.left.val).to.equal(1);
    });
    it('should have node on the right that are big', () => {
      expect(bst.right.val).to.equal(7);
    });
  });
  describe('#fromArray', function(){
    let bst = new bstNode(30);
    bst.fromArray([29, 28, 31, 32]);
    it('should have insert into bst', () => {
      expect(bst.left.val).to.equal(29);
      expect(bst.right.val).to.equal(31);
    });
  });
  describe('#min', function() {
    let bst = new bstNode(10);
    it('should return min val', () => {
      bst.insert(3);
      expect(bst.min()).to.equal(3);
    });
  });
  describe('#max', function() {
    let bst = new bstNode(14);
    it('should return max val', () => {
      bst.insert(15);
      expect(bst.max()).to.equal(15);
    });
  });
  describe('#find', function(){
    let bst = new bstNode(10);
    bst.fromArray([15, 30, 15, 9, 7]);
    it('should find the node', () => {
      expect(bst.find(30).val).to.equal(30);
    });
    it('should return an object', () => {
      expect(bst.find(30)).to.be.an('object');
    });
  });
});
