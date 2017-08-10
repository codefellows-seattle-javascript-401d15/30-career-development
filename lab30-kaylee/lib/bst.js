'use strict'

const BST = module.exports = function(val) {
  this.val = val
  this.data = null
  this.parent = null
  this.left = null
  this.right = null
}

//Big O: O(n2)
BST.prototype.appendChild = function(val) {
  if(!this) return
  if(val === this.val) throw new Error('value must be unique')
  if(val > this.val) {
    if(!this.right) {
      this.right = new BST(val)
      this.right.parent = this
    } else {
      this.right.appendChild(val)
    }
  } else if(val < this.val) {
    if(!this.left) {
      this.left = new BST(val)
      this.left.parent = this
    } else {
      this.left.appendChild(val)
    }
  }
  return
}

//Big O: O(n)
BST.prototype.min = function(bst) {
  if(!this) throw new Error('binary search tree required')
  if(bst.left) return this.min(bst.left)
  return bst.val
}

//Big O: O(n)
BST.prototype.max = function(bst) {
  if(!this) throw new Error('binary search tree required')
  if(bst.right) return this.max(bst.right)
  return bst.val
}

//Big O: O(logn)
BST.prototype.find = function(val) {
  if(val < this.val) {
    if(!this.left) {
      return null
    } else {
      return this.left.find(val)
    }
  } else if(val > this.val) {
    if(!this.right) {
      return null
    } else {
      return this.right.find(val)
    }
  } else return this
}

//Big O: O(n)
BST.fromArray = function(bst, array) {
  if(!array) throw new Error('Array required')
  for(let i = 0; i < array.length; i++) {
    bst.appendChild(array[i])
  }
  return bst
}
