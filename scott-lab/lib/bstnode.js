'use strict'

//Node constructor
const bstNode = module.exports = function(val){
  this.val = val,
  this.data = null,
  this.parent = null,
  this.right = null,
  this.left = null
}

//appendChild
bstNode.prototype.insert = function(val){
  if(!this) return
  if(val === this.val) throw new Error('Value already exists')
  if(val < this.val){
    if(!this.left){
      this.left = new bstNode(val)
      this.left.parent = this
      // console.log(this.left);
    } else {
      this.left.insert(val)
    }
  }
  if(val > this.val){
    if(!this.right){
      this.right = new bstNode(val)
      this.right.parent = this
      // console.log(this.right);
    }else{
      this.right.insert(val)
    }
  }
  return
}

//return min
bstNode.prototype.min = function(){
  // console.log(this.val);
  let min
  // console.log(min);
  if(!this.left){
    min = this.val
    // console.log(min)
    return min
  }else {
    this.left.min()
  }
}

//return max
bstNode.prototype.max = function(){
  if(this.right){this.right.max()}else return this.val
}

//find
bstNode.prototype.find = function(val) {
  if(val === this.val) return this
  if(val < this.val) this.left.find()
  if(val > this.val) this.right.find()
}
