
'use strict'

const Node = require('./bstnode')

module.exports = exports = {}

exports.fromArray = function(arr){
  let root = new Node(arr[0])
  // console.log(`Root: ${root.min()}`);
  for(let i = 1; i < arr.length; i++){
    root.insert(arr[i])
  }
  // console.log(root.left())
  return root
}


let test = [22, 23, 15, 24, 51, 2, 11, 19, 17]
let bst = exports.fromArray(test)
let bstmin = bst.find(2)

console.log(`Finished ${bstmin}`)
