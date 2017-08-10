'use strict'

const expect = require('chai').expect
const BST = require('./../lib/bst.js')
let testBst = new BST(10)

describe('binary search tree methods', function() {
  describe('appendChild method tests', () => {
    it('should contain the value 10, but not the value 11', done => {
      expect(testBst).to.contain.valueOf(10)
      expect(testBst).to.not.contain.valueOf(11)
      done()
    })
    it('should contain the value 11 after the method is called', done => {
      testBst.appendChild(11)
      expect(testBst).to.contain.valueOf(11)
      done()
    })
    it('should still contain its initial value of 10, even after the method is called a few times', done => {
      testBst.appendChild(12)
      testBst.appendChild(13)
      testBst.appendChild(14)
      expect(testBst).to.contain.valueOf(10)
      done()
    })
  })
  describe('min method tests', () => {
    it('should return 8 as the minimum', done => {
      testBst.appendChild(8)
      testBst.appendChild(9)
      let expectMin = testBst.min(testBst)
      expect(expectMin).to.equal(8)
      done()
    })
    it('should return a new minimum as the lower values are added to the tree', done => {
      testBst.appendChild(5)
      testBst.appendChild(4)
      testBst.appendChild(3)
      let expectNewMin = testBst.min(testBst)
      expect(expectNewMin).to.equal(3)
      done()
    })
    it('should not return a value that is not in the tree', done => {
      let expectMin = testBst.min(testBst)
      expect(expectMin).to.not.equal(2)
      expect(expectMin).to.equal(3)
      done()
    })
  })
  describe('max method tests', () => {
    it('should return 12 as the maximum', done => {
      testBst.appendChild(15)
      testBst.appendChild(16)
      let expectMax = testBst.max(testBst)
      expect(expectMax).to.equal(16)
      done()
    })
    it('should return a new maximum as the higher values are added to the tree', done => {
      testBst.appendChild(17)
      testBst.appendChild(18)
      testBst.appendChild(19)
      let expectNewMax = testBst.max(testBst)
      expect(expectNewMax).to.equal(19)
      done()
    })
    it('should not return a value that is not in the tree', done => {
      let expectMax = testBst.max(testBst)
      expect(expectMax).to.not.equal(2)
      expect(expectMax).to.equal(19)
      done()
    })
  })
  describe('find method tests', () => {
    it('should not return a value that is not in the tree', done => {
      let expectVal = testBst.find(10)
      expect(testBst).to.contain.valueOf(expectVal)
      expect(testBst).to.not.contain.valueOf(2)
      done()
    })
    it('should return a value of 10 since it exists in the tree', done => {
      let expectVal = testBst.find(10)
      expect(expectVal.val).to.equal(10)
      expect(expectVal.val).to.exist
      done()
    })
    it('should return a BST', done => {
      let expectBst = testBst.find(10)
      expect(expectBst).to.be.an.instanceOf(BST)
      done()
    })
  })
  describe('fromArray method tests', done => {
    let testBstFromArray = new BST(20)
    BST.fromArray(testBstFromArray, [21, 75, 34, 17, 4])
    it('should contain values supplied by the array', done => {
      expect(testBstFromArray).to.contain.valueOf(21)
      expect(testBstFromArray).to.contain.valueOf(75)
      expect(testBstFromArray).to.contain.valueOf(34)
      expect(testBstFromArray).to.contain.valueOf(17)
      expect(testBstFromArray).to.contain.valueOf(4)
      done()
    })
    it('should not contain a value that is not in the array', done => {
      expect(testBstFromArray).to.not.contain.valueOf(5)
      done()
    })
    it('should properly place values to the left or right according to appendChild method', done => {
      expect(testBstFromArray.right.val).to.equal(21)
      expect(testBstFromArray.right.right.val).to.equal(75)
      expect(testBstFromArray.right.right.left.val).to.equal(34)
      expect(testBstFromArray.left.val).to.equal(17)
      expect(testBstFromArray.left.left.val).to.equal(4)
      done()
    })
  })
})
