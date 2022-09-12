// fs module async

const {readFile, writeFile} = require('fs')

// have to add call back function in async
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        console.log(second)
        writeFile(
            './content/result-async.txt',
            ` Hi this is the result: ${first}, ${second}`,
            {flag: 'a'},
        (err, result) => {    //adding call back function to writeFile async method
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})