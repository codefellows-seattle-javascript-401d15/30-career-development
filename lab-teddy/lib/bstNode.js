'use strict';


const bstNode = module.exports = function(val){
  this.val = val;
  this.data = null;
  this.parent = null;
  this.left = null;
  this.right = null;
};

//O(n)
bstNode.prototype.insert = function(val){
  if(!this) return;
  if(val === this.val) return new Error('not unique');
  if(val > this.val) {
    if(!this.right){
      this.right = new bstNode(val);
      this.right.parent = this;
    } else this.right.insert(val);
  } else if (val < this.val) {
    if(!this.left){
      this.left = new bstNode(val);
      this.left.parent = this;
    } else this.left.insert(val);
  }
  return;
};
//O(n^2)
bstNode.fromArray = function(node, array){
  if (!array) return new Error('not unique');

  for(let i = 0; i < array.length; i++){
    node.insert(array[i]);
  }
  return node;
};


//O(n)
bstNode.prototype.min = function(){
  if(!this) return;
  if(this.left){
    return this.left.min();
  }
  return this.val;
};

//O(n)
bstNode.prototype.max = function(){
  if(!this) return;
  if(this.right){
    return this.right.max();
  }
  return this.val;
};

//O(n)
bstNode.prototype.find = function(val){
  if(!val) return new Error('Need a value');
  if(this.val === val) return this;
  if(this.val > val) {
    if(!this.left) return 'val not found';
    return this.left.find(val);
  }
  if(val > this.val) {
    if(!this.right) return 'val not found';
    return this.right.find(val);
  }
};
