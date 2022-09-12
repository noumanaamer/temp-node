// Path Module

const path = require('path')

// method of path module to get the correct path on the basis of separator
const filePath = path.join('/content/', '//subfolder', 'test.txt')

const base = path.basename(filePath)

// method of path to get the absolute path 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

// returns the path separator
console.log(path.sep)

console.log(filePath)
console.log(base)
console.log(absolute)