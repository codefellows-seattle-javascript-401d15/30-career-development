# Lab 30 - Binary Search Tree

## Goal
- Make a binary search tree and algorithmic methods with which one might interact.

## Methods
- min: returns the farthest left, and therefore lowest valie in the tree.
- max: returns the farthest rigth, and therefore the highest value in the tree.
- insert: places a node in the tree, by appending it to a parent, on the left or right, based on its value being lower or higher than the parent, respectively.
- contains: searches the BST logarithmically, to find a value.  If the value exists it will return true, else false.
-  lookup: searches the BST logarithmically, to find a value.  If the value exists it will return the position of the node containing that value. (need to review this one a bit more)
- breadthFirst: takes a tree in and returns a string of the values found in a tree as found in order of breadth first traversal.
- preOrder: takes a cb function, which takes a node as its parameter and _walk is used to traverse left or right through a tree and return a cb function with the node found at the end of that traversal.  (need to check some assumptions here)
- inOrder

## Static function:
- fromArray: takes a node and an array of values.
  - returns: a tree of nodes with the values from the array, attached to the node passed to the first parameter of the function.

## Usage:
Testing is the only relevant usage here.
` $ npm run test`

## Dependencies:
- Chai
- Mocha

### Attributions:
- I checked out: https://khan4019.github.io/front-end-Interview-Questions/bst.html  which led me to: https://github.com/duereg/js-algorithms. which I reviewed and attempted to adapt to my needs for a self-balancing tree.  I need tests and more understanding, but isBalanced is my first attempt at the extra points for this lab. I think it just returns information on whether it is balanced or not, and I still need another module full of helper functions to do the operation of actually making it balanced automatically.
