// product.controller.js
import productService from "../services/product.service.js";

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        console.log("req.body:", req.body);
        const product = await productService.createProduct(req.body);
        res.json(product);
    } catch (error) {
        console.log("❌ ERROR:", error.message);
        res.status(error.status || 400).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const input = req.body;
    try {
        const product = await productService.updateProduct(id, input); // ✅ was: id.input
        res.json(product);
    } catch (error) {
        console.log("❌ ERROR:", error.message);
        res.status(400).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        await productService.deleteProduct(id);
        res.json({ message: "Product deleted successfully" }); // ✅ was: massage
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };