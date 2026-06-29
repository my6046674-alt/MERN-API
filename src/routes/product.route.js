// product.route.js
import express from "express";
import productController from "../controllers/product.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", productController.getAllProducts);         // ✅ GET all 
router.get("/:id",productController.getProductById);     // ✅ GET one product
router.post("/", auth, productController.createProduct);
router.put("/:id", auth, productController.updateProduct);
router.delete("/:id",auth, productController.deleteProduct);

export default router;