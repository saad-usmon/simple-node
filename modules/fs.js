const fs = require("fs");
const path = require("path");

//creating dir with
// fs.mkdir(path.join(__dirname, "papka"), {}, (err) => {
//   if (err) throw err;
//   console.log("dir was created!");
// });

//creating file with fs

// fs.writeFile(
//   path.join(__dirname, "papka", "message.txt"),
//   "The file was created by node.js!",
//   (err) => {
//     if (err) throw err;
//     console.log("The file has been created!");
//   }
// );

//appendfile for writing additional information!

// fs.appendFile(
//   path.join(__dirname, "papka", "message.txt"),
//   " Hello, World!",
//   (err) => {
//     console.log("The file has been created!");
//   }
// );

fs.readFile(
  path.join(__dirname, "papka", "message.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

fs.rename(
  path.join(__dirname, "papka", "message.txt"),
  path.join(__dirname, "papka", "example.txt"),
  (err) => {
    if (err) throw err;
  }
);
