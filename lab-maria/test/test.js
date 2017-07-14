const expect = require('chai').expect;
const Bst = require('../lib/bst');

describe('Binary Search Tree methods', function() {
  let root = new Bst(10);
  describe('INSERT', function() {
    it('should insert a vlaue greater than the root to the right', () => {
      root.insert(11);
      expect(root.right.val).to.equal(11);
    });
    it('should insert a value less than the root to the left', () => {
      root.insert(7);
      expect(root.left.val).to.equal(7);
    });
  });
  describe('FIND', function() {
    it('should look for the value passed as an arg in tree', () => {
      expect(root.find(11)).to.be.an('object');
      expect(root.find(11).val).to.equal(11);
      expect(root.find(3)).to.equal(null);
    });
  });
  describe('MAX', function() {
    it('should return the node with maximum value in the tree', () => {
      expect(root.max()).to.be.an('object');
      expect(root.max().val).to.equal(11);
    });
  });
  describe('MIN', function() {
    it('should return the node with the smallest value in the tree', () => {
      expect(root.min()).to.be.an('object');
      expect(root.min().val).to.equal(7);
    });
  });
  describe('TOTAL SIZE', function() {
    it('should should return the total number of nodes in the tree', () => {
      expect(root.totalSize()).to.equal(3);
    });

  });
  describe('DEPTH', function() {
    let myTree = new Bst(13); //1

    myTree.insert(15); //2
    myTree.insert(14); //3
    myTree.insert(12); //4
    myTree.insert(20); //5
    myTree.insert(10); //6
    myTree.insert(45); //7
    myTree.insert(40); //8
    myTree.insert(11); //9
    it('should return the maximum height of the tree', () => {
      expect(myTree.maxDepth()).to.equal(5);
    });
    it('should return the shortest depth', () => {
      expect(myTree.minDepth()).to.equal(3);
    });
    it('should compare the depths to determine if tree is balanced', () => {
      expect(myTree.checkBalanced()).to.equal(false);
    });
  });
  describe('FROM ARRAY', function() {
    it('should create a tree from an array', () => {
      let myArray = [1, 2, 4, 5];
      let test = new Bst(3);
      test.fromArray(myArray);
      expect(test.left.val).to.equal(1);
      expect(test.left.right.val).to.equal(2);
      expect(test.right.val).to.equal(4);
      expect(test.right.right.val).to.equal(5);
    });
  });
});
