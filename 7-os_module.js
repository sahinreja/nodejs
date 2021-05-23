//BUILD-IN MODULES(YOU NEED NOT TO INSTALL THROUGH NPM)
const os = require('os');
// console.log(os);
// console.log(os.arch());
// console.log(os.type());
// console.log(os.hostname());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.networkInterfaces());

//get user info
const user = os.userInfo();
console.log(user);
//method return to system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentWindows = {
   name:os.type(),
   release:os.release(),
   freeMem:os.freemem(),
   totalMem:os.totalmem(),
   netWorkInterface:os.networkInterfaces()
}

console.log(currentWindows);