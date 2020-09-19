const fs = require("fs");
const path = require("path");

//Create a folder
/*fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created");
});*/

//Create and write to file
/*fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!\n",
  (err) => {
    if (err) throw err;
    console.log("File created");

    //File append
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "I love Node JS",
      (err) => {
        if (err) throw err;
        console.log("File created");
      }
    );
  }
);*/

//Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hello_test.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed");
  }
);
