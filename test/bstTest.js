'use strict';

const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

const bstnode = require('../lib/bst.js')

describe('BST Node test', function(){
  describe('appendChild method works', function(){
    let bst = new bstNode;
    bst.appendChild(4);
    bst.appendChild(5);
    bst.appendChild(8);
    it('New node appended to tree', () =>{
      expect(bst.right.val).to
    })

  })
})
