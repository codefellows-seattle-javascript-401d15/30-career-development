![cf](http://i.imgur.com/7v5ASc8.png) lab 30 - Binary Search Tree Data Structures
====

## Overview
This lab focuses on the data structure of a binary search tree. It includes the following constructors and methods:
  * `BSTNode` constructor creates a new binary search tree (bst)
  * `BSTNode.fromArray()` creates a bst from items in a sorted array
  * `bst.appendChild()` appends a child to the bst
  * `bst.min()` returns the min value in a bst
  * `bst.max()` returns the max value in a bst
  * `bst.find()` returns the node that contains the value, null otherwise

# Installation
  * You will need to install Node.js
  * Clone this repository
  * Run `npm i` in your command line to install the following developer dependencies (for testing) listed in the package.json:
    * chai: 4.0.0
    * mocha: 3.4.2

# Using the data structure
  * You can view the helper modules by accessing the `lib` directory
  * You can view the tests by accessing the `test` directory
  * To use the data structure:
    * In `index.js ` pass in or create the appropriate parameters for the constructor and methods listed in the file.
    * Be sure to include console.log to view the results.
    * Run `node index.js` in your command line.
  * Examples:
    * To use the BSTNode constructor and view the tree:
      * Pass a value into the constructor `let bst = new BSTNode(6);`
      * Include `console.log('bst', bst)` to view results
      * Running `node index.js` in your command line should yield:
      ```javascript
      bst { value: 6, parent: null, left: null, right: null }
      ```
    * To use the BSTNode.fromArray() and view the tree:
      * Create a test array, e.g., `let arr = [1,2,3,4,5,6,7];`
      * Create a bst, e.g., `const testBst = new BSTNode.fromArray(arr);`
      * Include `console.log(testBst);` to view results
      * Running `node index.js` in your command line should yield:
      ```
        { value: 4,
      parent: null,
      left:
       { value: 2,
         parent: null,
         left: { value: 1, parent: null, left: null, right: null },
         right: { value: 3, parent: null, left: null, right: null } },
      right:
       { value: 6,
         parent: null,
         left: { value: 5, parent: null, left: null, right: null },
         right: { value: 7, parent: null, left: null, right: null } } }
        ```
# Testing  
To run tests, run `npm test` in your command line.
