/*
javascrip file read 
*/
const filename = "jsonData.json";
const jsonData = require('./'+filename);
// console.log(jsonData,typeof jsonData);
// jsonData.push({category:'test'});
for(let item in jsonData){
  console.log(jsonData[item]['category']);
};

/*
nodejs file read
*/
const fs = require('fs');
const path = require('path');
// console.log(path.join(__dirname,filename));
let fileData = "";
let fileDataObj = [];
const filePath = path.join(__dirname,filename);
fs.readFile(filePath, function(err, buf) {
  fileData = buf.toString();
  fileDataObj = JSON.parse(fileData);
  fileDataObj.push({category:new Date().toString()});
  fileData = JSON.stringify(fileDataObj);
  // console.log(JSON.parse(buf.toString()),new Date().toString());
  if(err)console.log(err);
  
});
/*
Write File data
*/
// setTimeout(()=>{
//   fs.writeFile(filePath, fileData, (err) => {
//   if (err) console.log(err);
//   console.log("Successfully Written to File.");
// });
// },200);

function thisLine() {
  const e = new Error();
  const regex = /\((.*):(\d+):(\d+)\)$/
  const match = regex.exec(e.stack.split("\n")[2]);
  return {
    filepath: match[1],
    line: match[2],
    column: match[3]
  };
}

console.log(thisLine());