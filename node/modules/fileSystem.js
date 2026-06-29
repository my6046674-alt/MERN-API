/**
 * fs: file system module of node js, used for file operations
 * Like create, read, update, delete
 * synchronous: blocking operation
 * asynchronous: non-blocking operation
 * 
 */

import fs from 'fs';

// Read file synchronously
// const result = fs.readFileSync("./node/data/data.txt", "utf-8");

// console.log(result);

// const image= fs.readFileSync("./node/data/data.txt", "base64");
// console.log(image)
// write files
// fs.writeFileSync("./node/data/file.txt", "This is a newly created files.")
// fs.writeFileSync("./node/data/data.json", JSON.stringify({ hello: "world"}));
// update files
// fs.appendFileSync("./node/data/file.txt", "This is newly appended ")


// Delete files;
// fs.rmSync("./node/data/data.json");
// fs.mkdir("Folderdatle")


// const fs = require("fs");

// Asynchronous method - read file
const result=fs.readFile("./node/data/data.txt", "utf-8", (error, data) => {
    if (error) {
        console.log("Error reading file:", error.message); 
    } else {
        console.log("File contents:", result); 
    }
});
// write files
// update files
// Delete files
