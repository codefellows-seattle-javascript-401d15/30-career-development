'use strict'

const expect = require('chai').expect
const BST = require('../bst.js')
let bst = new BST(30)
let testArray = [1, 8, 100, 110]
describe('Testing binary search tree methods', function(){
  describe('Creating a tree', () => {
    it('should make a new tree', done =>{
      expect(bst).to.exist
      done()
    })
    it('should be an object', done => {
      expect(typeof bst).to.equal('object')
      done()
    })
    it('should have a root value of 30', done => {
      expect(bst.value).to.equal(30)
      done()
    })
  })
  describe('Testing the insert node method', () => {
    it('should not have this value, since it has not been inserted', done => {
      expect(bst).not.to.have.valueOf(12)
      done()
    })
    it('it should insert this new value', done => {
      bst.insert(33)
      expect(bst).to.have.valueOf(33)
      done()
    })
    it('should have additional nodes', done => {
      bst.insert(10)
      bst.insert(40)
      bst.insert(70)
      expect(bst).to.have.valueOf(10)
      expect(bst).to.have.valueOf(40)
      expect(bst).to.have.valueOf(70)
      done()
    })
  })
  describe('Testing the contains node method', function(){
    it('should return false when the nodes are not yet present', done => {
      expect(bst.contains(11)).to.be.false
      done()
    })
    it('should return true, now that it is present', done => {
      bst.insert(11)
      expect(bst.contains(11)).to.be.true
      done()
    })
    it('should return the value of this search', done => {
      expect(bst.contains(33)).to.be.true
      expect(bst.right.value).to.equal(33)
      done()
    })
  })
  describe('Testing the lookup node method', () => {
    it('should say that it can\'t find the value', done => {
      expect(bst.lookup(1000)).to.not.have.valueOf(1000)
      done()
    })
    it('should return the sought after value', done => {
      expect(bst.lookup(30)).to.have.valueOf(30)
      done()
    })
  })
  describe('Testing the min node method', () => {
    it('should say that the minimum value node is 10', done => {
      expect(bst.min(bst)).to.have.valueOf(10)
      done()
    })
    it('should return a new min of 2', done => {
      bst.insert(2)
      expect(bst.min(bst)).to.have.valueOf('2')
      done()
    })
  })
  describe('Testing the max node method', () => {
    it('should return a maximum value of 70', done => {
      expect(bst.max(bst)).to.have.valueOf('70')
      done()
    })
    it('should have a new maximum value of 71', done => {
      bst.insert(71)
      expect(bst.max(bst)).to.have.valueOf(71)
      done()
    })
  })
  describe('Testing the fromArray node method', function(){
    it('new additions to be appended, and the new max to be 110', done => {
      let testArray = [1, 8, 100, 110]
      let newTestBST = BST.fromArray(testArray)
      expect(newTestBST.contains(110)).to.be.true
      done()
    })
  })
  describe('Testing the traversal node method', function(){})
  describe('Testing the depth node method', () => {})
})
