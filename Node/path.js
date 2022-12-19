const { fstat } = require("fs");
let path =require("path");
for(let i=1;i<=10;i++){
    let dirPathToMake=`Lecture-${i}`;
    fs.mkdirSync(dirPathToMake)
    fs.writeFileSync(path.join(dirPathToMake+"\\"+"readme.md",`# readme for ${dirPathToMake}`));

}
let ext=path.extname(path.join(__dirname));
console.log("ext",ext);