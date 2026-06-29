import fs from "fs/promises"

async function readData(){
     try {
         const data = await fs.readFile("./node/data/data.txt", "utf-8");
          console.log(data)
        
     } catch (error) {
        console.log(error)
        
     } finally{
        console.log("Finally")
     }
  

  
}

readData();

const readMultipleData = async()=>{
    try {
        
     const data1 = await fs.readFile("./node/data/file1.txt", "utf-8");
    const data2 = await fs.readFile("./node/data/file2.txt", "utf-8");
    const data3 = await fs.readFile("./node/data/file3.txt", "utf-8");


    console.log(data1);
    console.log(data2);
    console.log(data3);
    } catch (error) {
        console.log(error)
        
    }
    
}

readMultipleData();