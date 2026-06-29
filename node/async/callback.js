// callback:- function used parameter in another function
// Higher order function: function that accepts another ad parameter
// function test(hello){
//     console.log("This is test masage");

//     hello()

// }

// test(()=>{
//     console.log("hello world")
// })

import fs from "fs";

fs.readFile("./node/data/data.txt", "utf-8",(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data);
    }
})

// scenario: Read file 1 => success => Read file 2  => Success => Read file 3
// callback hell
fs.readFile("./node/data/file1.txt", "utf-8", (error1, data1)=>{
    if(error1){
        console.log(error1);
    }else{
        fs.readFile("./node/data/file2.txt", "utf-8",(error2, data2)=>{
            if(error2){
                console.log(error2)
            }else{
                fs.readFile("./node/data/file3.txt", "utf-8",(error3, data3)=>{
            if(error3){
                console.log(error3)
            }else{
                console.log(data1);
                console.log(data2);
                console.log(data3);
                
            }
        })

            }
        })
    }
})