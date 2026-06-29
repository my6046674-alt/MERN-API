// import fs from "fs/promises"
// import Product from "../models/Product.js";
// import product from "../models/Product.js"

// const getAllProducts= async()=>{
//      const products= await fs.readFile("./src/Data/products.json", "utf-8");

//      return JSON.parse(products);
// }; 

// const getFirstProduct=async()=>{
//      const products=await fs.readFile("./src/Data/products.json", "utf-8");

//      const firstProduct=JSON.parse(products)[0];

//      return firstProduct;
// };

// const getProductById=async(id)=>{
//      const products=await fs.readFile("./src/Data/products.json", "utf-8");

//      const list=JSON.parse(products);

//      return list.find((product)=> product.id==id);
// };

// const createProduct=async()=>{
//      product.create({
//           name:"Iphone 16",
//           brand: "Apple",
//           category:"Smartphone",
//           price:1800000,
//      });
// }

// export default {getAllProducts, getFirstProduct, getProductById, createProduct}


// import Product from "../models/Product.js";

// const getAllProducts = async () => {
//   const products= await Product.find();

//   return products;
// };

// const getFirstProduct = async () => {
//     const products = await fs.readFile("./src/Data/products.json", "utf-8");
//     const firstProduct = JSON.parse(products)[0];
//     return firstProduct;
// };

// const getProductById = async (id) => {
//    const product=await product.findById(id);
//    return product;
// };

// const createProduct = async (data) => {
//     return await Product.create(data); // ✅ capital P
// };
// const updateProduct = async (id, input) => {
//     return await product.findByIdAndUpdate(id, input, {new:true});
// };

// const deleteProduct=async(id)=>{
//     await product.findByIdAndDelete(id);
// }

// export default { getAllProducts, getProductById, createProduct, updateProduct,deleteProduct};

// product.service.js
import Product from "../models/Product.js";

const getAllProducts = async () => {
    return await Product.find();
};

const getProductById = async (id) => {
    const product = await Product.findById(id); // ✅ was: product.findById
    return product;
};

const createProduct = async (data) => {
    return await Product.create(data);
};

const updateProduct = async (id, input) => {
    return await Product.findByIdAndUpdate(id, input, { new: true });
};

const deleteProduct = async (id) => {
    await Product.findByIdAndDelete(id); // ✅ was: product
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };