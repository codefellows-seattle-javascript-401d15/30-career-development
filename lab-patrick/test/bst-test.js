'use strict';

const bstNode = require('../lib/bst');
const expect = require('chai').expect;
let testNode = new bstNode(50);
let testArray = [1, 20, 5, 19, 3, 10]

describe('bstNode methods', function(){
  describe('bstNode append methods', function(){
    it('should not change the root node', done =>{
      testNode.append(8);
      console.log(testNode);
      expect(testNode.val).to.equal(50)
      done()
    })
    it('should append ', done =>{
      testNode.append(9);
      console.log(testNode.left);
      expect(testNode.left.val).to.equal(8)
      done()
    })
  })
})
