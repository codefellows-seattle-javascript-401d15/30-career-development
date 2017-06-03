'use strict';

const expect = require('chai').expect;

const BST = require('../lib/bst.js');
let bst = new BST();

describe('Testing binary search tree methods', function() {
  
  describe('Creating a tree', () => {
    it('should instantiate a new tree', done => {
      expect(bst).to.exist;
      done();
    });
    
    it('should be an object', done => {
      expect(bst).to.be.a('object');
      done();
    });
  });
  
  describe('Testing the appendChild method', () => {
    it('should not contain the node before the method is called', done => {
      expect(bst).to.not.have.valueOf(12);
      done();
    });
    
    it('should add the node when the method is called', done => {
      bst.appendChild(5);
      expect(bst).to.have.valueOf(12);
      done();
    });
    
    it('should append additional nodes when the method is called', done => {
      bst.appendChild(16);
      bst.appendChild(33);
      bst.appendChild(2);
      bst.appendChild(4);
      
      expect(bst).to.have.valueOf(16);
      expect(bst).to.have.valueOf(33);
      expect(bst).to.have.valueOf(2);
      expect(bst).to.have.valueOf(4);
      done();
    });
    
  });
  
  describe('Testing additional methods on an existing tree', () => {
    
    bst.appendChild(25);
    bst.appendChild(9);
    bst.appendChild(5);
    bst.appendChild(93);
    bst.appendChild(64);
    bst.appendChild(55);
    
    describe('Testing the contains method', () => {
      it('should contain the nodes that were appended', done => {
        expect(bst.contains(25)).to.be.true;
        expect(bst.contains(16)).to.be.true;
        expect(bst.contains(9)).to.be.true;
        expect(bst.contains(5)).to.be.true;
        expect(bst.contains(93)).to.be.true;
        expect(bst.contains(64)).to.be.true;
        expect(bst.contains(55)).to.be.true;
        done();
      });
      
      it.only('should find nodes that exist in the tree', done => {
        bst.appendChild(16);
        bst.appendChild(25);
        bst.appendChild(9);
        bst.appendChild(5);
        bst.appendChild(93);
        bst.appendChild(64);
        bst.appendChild(55);
        console.log('find', bst.find(9));
        // expect(bst.find(11)).to.have.valueOf(11);
        // expect(bst.find(37)).to.have.valueOf(37);
        // expect(bst.find(74)).to.have.valueOf(74);        
        expect(bst.find(6)).to.be.null;        
        done();
      });
    });
    
    describe('Testing the find method', () => {});
    
    describe('Testing the min method', () => {});
    
    describe('Testing the max method', () => {});
    
    describe('Testing the height method', () => {});
  });
  

  describe('Testing the fromArray method', () => {});

  describe('Testing the balance method', () => {});




  describe('Testing the breadthFirst traversal method', () => {});
  describe('Testing the preOrder traversal method', () => {});
  describe('Testing the postOrder traversal method', () => {});
  describe('Testing the inOrder traversal method', () => {});

  describe('Testing the appendChild method', () => {});
  

  
  
});