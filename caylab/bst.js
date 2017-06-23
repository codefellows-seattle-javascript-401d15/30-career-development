'use strict'

const bstNode = module.exports = function(value){
  this.value = value
  this.data = null
  this.parent = null
  this.left = null
  this.right = null
}

bstNode.prototype.insert = function(val, balance = false){
  if(!this) return
  if(val === this.value) throw new Error('submission value must be unique')
  if(val > this.value){
    if(!this.right){
      this.right = new bstNode(val)
      this.right.parent = this
    }else this.right.insert(val)
  }else if(val < this.value){
    if(!this.left){
      this.left = new bstNode(val)
      this.left.parent = this
    }else this.left.insert(val)
  }
  return
}

bstNode.prototype.lookup = function(val){
  if(val < this.value){
    if(!this.left) return null
    else return this.left.contains(val)
  }else if(val > this.val){
    if(!this.right) return null
    else return this.right.contains(val)
  }else return this
}

bstNode.prototype.contains = function(val){
  if(val < this.value){
    if(!this.left) return false
    else return this.left.contains(val)
  }else if(val > this.value){
    if(!this.right) return false
    else return this.right.contains(val)
  }else return true
}

bstNode.prototype.breadthFirst = function(){
  let q = this
  let result = ''
  let current
  while(q.length > 0){
    current = q.pop()
    result += current.val + ' '
    if(current.left) q.unshift(current.left)
    if(current.right) q.unshift(current.right)
  }
  return result
}

bstNode.prototype.preOrder = function(callback){
  _walk(this.root)
  function _walk(node){
    if(!node) return
    callback(node)
    this.left.preOrder(this.left)
    this.right.preOrder(this.right)
  }
}

bstNode.prototype.postOrder = function(callback){
  _walk(this.root)
  function _walk(node){
    if(!node) return
    this.left.postOrder(this.left)
    this.right.postOrder(this.right)
    callback(node)
  }
}

bstNode.prototype.inOrder = function(callback){
  _walk(this.root)
  function _walk(node){
    if(!node) return
    this.left.inOrder(this.left)
    callback(node)
    this.right.inOrder(this.right)
  }
}

bstNode.prototype.min = function(node){
  let minValue = node.value
  if(!node){
    node = this.root
  }
  while(node.left){
    node = node.left
    if(node.value < minValue){
      minValue = node.value
    }
  }
  return minValue
}

bstNode.prototype.max = function(node){
  let maxValue = node.value
  if(!node){
    node = this.root
  }
  while(node.right){
    node = node.right
    if(node.value > maxValue){
      maxValue = node.value
    }
  }
  return maxValue
}

bstNode.fromArray = function(array, parentNode){
  if(!array) return new Error('Enter an array to use, genius')
  if(!parentNode){
    parentNode = new bstNode(array[0])
    for(let i = 1; i < array.length; i++) {
      parentNode.insert(array[i])
    }
  }else if(parentNode){
    for(let i = 0; i < array.length; i++) {
      parentNode.insert(array[i])
    }
  }
  return parentNode
}

bstNode.prototype.depth = function(node){
  if(!node) return 0;

  let leftDepth = this.depth(node.left)
  let rightDepth = this.depth(node.right)

  return Math.max(leftDepth, rightDepth) + 1
}
