const fs=require("fs");
const obj=require('./second');

obj.fun();
console.log(obj.crew);
fs.readFile("package.json","utf8",function(err,data){
    if(err)
    console.log("Not able to find the file");
    else
    console.log(data);
});

console.log("AFTER FUNCTION");