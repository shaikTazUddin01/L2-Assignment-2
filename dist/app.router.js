"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerManager = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./modules/productManagement/product.controller");
const order_controller_1 = require("./modules/orderManagement/order.controller");
const router = express_1.default.Router();
//products router
router.post("/products", product_controller_1.productsController.createProduct);
router.get("/products", product_controller_1.productsController.getProduct);
router.get("/products/:productId", product_controller_1.productsController.getProductById);
// router.get("/products", productsController.getProductByquery);
router.put("/products/:productId", product_controller_1.productsController.updateProduct);
router.delete("/products/:productId", product_controller_1.productsController.DeleteProduct);
//order router
router.post('/orders', order_controller_1.orderController.createOrder);
router.get('/orders', order_controller_1.orderController.getOrder);
exports.routerManager = router;
