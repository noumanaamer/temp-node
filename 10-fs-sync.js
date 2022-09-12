// fs module 
// 2 ways
// -> async (non-blocking)
// -> sync (blocking)

// this will cover sync

const {readFileSync, writeFileSync} = require('fs')

// reading files
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first)
console.log(second)

// writing text in a file 
//  file will be created if does not exist
// a flag is used to append the text in order to avoid overwriting in already existed file
writeFileSync(
    './content/result-sync.txt',
    ` Hi this is the result: ${first}, ${second}`,
    {flag: 'a'}
)