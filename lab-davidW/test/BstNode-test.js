'use strict';

const expect = require('chai').expect;
const BstNode = require('../bst.js');

describe('fromArray', function() {
  it('should ');
});

describe('BstNode', function() {
  describe('insert', function() {
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


    describe('min', function() {
      let bst = new BstNode(10);
      it('should return the min val found in tree', () => {
        bst.insert(3);
        expect(bst.min()).to.equal(3);
      });
    });

    describe('max', function() {
      let bst = new BstNode(14);
      it('should return the max val found in tree', () => {
        bst.insert(15);
        expect(bst.max()).to.equal(15);
      });
    });
  });
});
