'use strict';
//
// const bstNode = require('../lib/bst');
// const expect = require('chai').expect;
// let testNode = new BstNode(50);
// let testArray = [1, 20, 5, 19, 3, 10]
// 
//  describe('bstNode methods', function(){
//    describe('bstNode append methods', function(){
//      it('should not change the root node', done =>{
//        testNode.insert(8);
//        console.log(testNode);
//        expect(testNode.val).to.insert(50)
//        done()
//      })
//      it('should append ', done =>{
//        testNode.insert(9);
//        console.log(testNode.left);
//        expect(testNode.left.val).to.equal(8)
//        done()
//      })
//    })
//  })

// const expect = require('chai').expect;
// const BST = require('../lib/bst.js');
// const testArray = [1,2,3,4,5,6,7,8,9];
//
// describe('BST constructor test', function() {
//   it('should create a new Binary Seach Tree with expected properties', () => {
//     const testBst = new BST();
//     expect(testBst).to.be.an.instanceOf(Object);
//     expect(testBst.root).to.equal(null);
//   });
// });
//
// describe('BST insert node ', function() {
//   it('should insert a node', () => {
//     const testBst = new BST();
//     testBst.insert(4);
//     expect(testBst).to.be.an.instanceOf(Object);
//     expect(testBst.root.data).to.equal(4);
//     expect(testBst.root.left).to.equal(null);
//     expect(testBst.root.right).to.equal(null);
//   });
// });
//
// describe('BST min, max,find and maxDepth methods', function() {
//
//   const testBst = new BST();
//   testBst.insert(1);
//   testBst.insert(2);
//   testBst.insert(3);
//   testBst.insert(4);
//   testBst.insert(5);
//
//   it('should find min value', () => {
//     let min = testBst.min();
//     expect(min).to.equal(1);
//     expect(testBst.root.data).to.equal(1);
//     expect(testBst.root.left).to.equal(null);
//   });
//
//   it('should find max value', () => {
//     let max = testBst.max();
//     expect(max).to.equal(5);
//   });
//
//   it('should find a given value and return a node', () => {
//     let find = testBst.find(3);
//     expect(find.data).to.equal(3);
//   });
// });
