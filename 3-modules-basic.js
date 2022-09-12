// Modules

// CommonJS - every file is module by default
// Module - Emcapsulated Code


// importing data of other files
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-syntax')

// directly accessing file
require('./7-mind-grenade')

console.log(names)

sayHi('Nouman')
sayHi(names.Ali)
sayHi(names.Haider)

console.log(data)

