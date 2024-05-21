import express from "express";
import { productsController } from "./modules/productManagement/product.controller";
import { orderController } from "./modules/orderManagement/order.controller";

const router = express.Router();
//products router
router.post("/products", productsController.createProduct);
router.get("/products", productsController.getProduct);
router.get("/products/:productId", productsController.getProductById);
// router.get("/products", productsController.getProductByquery);
router.put("/products/:productId", productsController.updateProduct);
router.delete("/products/:productId", productsController.DeleteProduct);

//order router
router.post('/orders',orderController.createOrder)
router.get('/orders',orderController.getOrder)
export const routerManager = router;
