// Built-in Modules 
// OS Module

const os = require('os')

// Info about current user 

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime} seconds`)

// object to get some os info using os module
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)
