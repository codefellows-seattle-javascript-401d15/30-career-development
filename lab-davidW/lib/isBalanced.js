'use strict';


const Bad_VALUE = -1;

// O(n)
function getHeight(n, node) {
  // see if a node exists.  if it is null return n;
  if (node === null) {
    return n;
  }

// O(log n)
  const leftHeight = getHeight(n + 1, node.left);
  // check for a leftHeight of greater than -1
  if (leftHeight === Bad_VALUE) {
    return Bad_VALUE;
  }

  const rightHeight = getHeight(n +1, node.right);
  if (rightHeight === Bad_VALUE) {
    return Bad_VALUE;
  }

  //check the absolute value of difference between left and right heights.  if it is more than 1 return Bad_VALUE (-1)
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return Bad_VALUE;
  }

  return Math.max(leftHeight, rightHeight);
}

// check if the BST is balanced
function isBalanced(node) {
  return getHeight(0, node) !== Bad_VALUE;
}

//export the module to be used elsewhere.
module.exports = isBalanced;
