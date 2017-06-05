'use strict';

const bstNode = module.exports = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

// O(logn)
bstNode.prototype.appendChild = function(val) {
  if (!this) return;
  if (val < this.val) {
    if (!this.left) {
      this.left = new bstNode(val);
    } else this.left.appendChild(val);
  }
  if (val > this.val) {
    if (!this.right) {
      this.right = new bstNode(val);
    } else this.right.appendChild(val);
  }
};

// O(logn)
bstNode.prototype.find = function(val) {
  if (val < this.val) {
    if (!this.left) return null;
    else return this.left.find(val);
  } else if (val > this.val) {
    if (!this.right) return null;
    else return this.right.find(val);
  } else return this;
};

// O(logn)
bstNode.prototype.findMin = function() {
  if (!this) return null;
  if (!this.left) return this;
  else return this.left.findMin();
};

// O(logn)
bstNode.prototype.findMax = function() {
  if (!this) return null;
  if (!this.right) return this;
  else return this.right.findMax();
};
