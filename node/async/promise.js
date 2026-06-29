// promise: Async programming, promise is a future value
// pending-. fulfilled, rejected

import fs from "fs/promises";

fs.readFile("./node/data/data.txt", "utf-8",).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Finally")
});

fs.readFile("./node/data/file1.txt", "utf-8",)
.then((data1)=>{
    
   return fs.readFile("./node/data/file2.txt", "utf-8",)

})
.then((data2)=>{
    return fs.readFile("./node/data/file3.txt", "utf-8",)

})
.then((data3)=>{
    console.log(data3)
})
.catch((error)=>{
    console.log(error)
})