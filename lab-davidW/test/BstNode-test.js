'use strict';

const expect = require('chai').expect;
const BstNode = require('../lib/bst');


describe('BstNode', function() {
  describe('#insert', function() {
    let bst = new BstNode(10);
    bst.insert(1);
    bst.insert(2);
    bst.insert(5);
    bst.insert(30);
    bst.insert(31);
    bst.insert(100);

    it('should have smaller nodes on left than on right', () => {
      expect(bst.left.val).to.equal(1);
    });

    it('should have larger values on right', () => {
      expect(bst.right.val).to.equal(30);
    });
  });

  describe('#fromArray', function(){
    let bst = new BstNode(30);
    BstNode.fromArray(bst, [29, 28, 31, 32]);

    it('should have insert into bst', () => {
      expect(bst.left.val).to.equal(29);
      expect(bst.right.val).to.equal(31);
    });
  });

  describe('#min', function() {
    let bst = new BstNode(10);
    it('should return the min val found in tree', () => {
      bst.insert(3);
      expect(bst.min()).to.equal(3);
    });
  });

  describe('#max', function() {
    let bst = new BstNode(14);
    it('should return the max val found in tree', () => {
      bst.insert(15);
      expect(bst.max()).to.be.a('number')
      .that.equals(15);
    });
  });
  describe('#lookup', function() {
    let bst = new BstNode(10);
    BstNode.fromArray(bst, [13, 20, 11, 9, 77]);
    it('should lookup a node with the value of 11', () => {
      expect(bst.lookup(11)).to.be.an('object')
        .that.has.property('val')
        .that.equals(11);
    });
    it('should return null if the node does not exist eg. 22', () => {
      expect(bst.lookup(22)).to.equal(null);
    });
  });
});
