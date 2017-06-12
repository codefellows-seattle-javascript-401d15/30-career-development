'use strict'

const Node = require('./bst-node')

module.exports = exports = {}

exports.fromArray = function(arr) {
  let root = new Node(arr[0])

  for(let i = 1; i < arr.length; i++) {
    root.insert(arr[i])
  }
  return root
}

let array = [16, 42, 36, 12, 24, 64]
let bst = exports.fromArray(array)
