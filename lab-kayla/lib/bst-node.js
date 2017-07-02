'use strict'

let Viz = require('viz.js')

const BstNode = module.exports = function(val) {
  this.val = val
  this.data = null
  this.parent = null
  this.right = null
  this.left = null
}

BstNode.prototype.insert = function(val) {
  if(!this) return
  if(val === this.val) throw new Error('value already exists')
  if(val < this.val){
    if(!this.left){
      this.left = new BstNode(val)
      this.left.parent = this
    } else {
      this.left.insert(val)
    }
  }
  if(val > this.val){
    if(!this.right){
      this.right = new BstNode(val)
      this.right.parent = this
    } else {
      this.right.insert(val)
    }
  }
  return
}

BstNode.prototype.min = function() {
  let min

  if(!this.left) {
    min = this.val
    return min
  } else {
    this.left.min()
  }
}

BstNode.prototype.max = function() {
  if(this.right){
    this.right.max()
  } else {
    return this.val
  }
}

BstNode.prototype.find = function(val) {
  if(val === this.val) return this
  if(val < this.val) this.left.find(val)
  if(val > this.val) this.right.find(val)
}
