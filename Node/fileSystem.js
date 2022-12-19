//create read update delete
//to talk to a file filesystem is being used
let fs= require("fs");
//read
let buffer=fs.readFileSync("abc.js");
console.log("bin data"+ buffer);
//create
fs.openSync("abc.txt","w");
//create write
fs.writeFileSync("abc.js","hum aaj khush h : ")
//fs.append
//update
//fs.appendFileSync("abc.txt","bhai hm khush nhi h");
//fs.mkdir("meridirectory");
fs.writeFileSync("NODE/merifile.txt","Mera content");
fs.readFileSync("NODE");

let content=fs.readdirSync("Meri directory");
console.log(content);
for(let i=0;i<content.length;i++){
    console.log("file",content[i],"is removed");
    fs.unlinkSync("NODE/", content[i]);
}
//delete the file 

fs.rmdirSync("NODE");
//fs.existSync->if file exist at the path ->true/false

//fs.lstatSync->fs.lst

//lstste sync btata h path file ka h ya folder ka h

let detailsObj=fs.lstatSync(__dirname+"\\fileSystem.js");
