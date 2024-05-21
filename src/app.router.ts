import express from "express";
import { productsController } from "./modules/productManagement/product.controller";

const router = express.Router();

router.post("/products", productsController.createProduct);
router.get("/products", productsController.getProduct);
router.get("/products/:productId", productsController.getProductById);
// router.get("/products", productsController.getProductByquery);
router.put("/products/:productId", productsController.updateProduct);
router.delete("/products/:productId", productsController.DeleteProduct);

export const routerManager = router;
