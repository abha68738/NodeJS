/*let cp= require("child_process");
console.log("tryig to open calculator");
//cp.execSync("calc");
console.log("opened calculator")
cp.execSync("code");
console.log("opened vs code")

*/ 

let cp= require("child_process");
console.log("trying to open our 😎😉: ");
cp.execSync("start chrome https:\\www.pepcoding.com");
console.log("trying to opend our 😎😉: ");
let output=cp.execSync("node abc.js");
console.log("output 🔥 "+output);