function sum(value1, value2) {
    return value1 + value2;
}

function greet(){
    console.log("Hello, welcome to the MERN stack course!");
}

export function square(value){
    return value * value;
}

export {sum};
export default greet;