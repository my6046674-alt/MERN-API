
import fs from "fs";
import greet,{sum , square} from "./utils.js";

console.log("start");
console.log("hello world");
console.log("hello world");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }

  console.log(data);
});

const result = sum(100, 10);
console.log("The sum is:", result);
console.log(greet());

const squaredValue = square(5);
console.log("The squared value is:", squaredValue);

console.log("end");