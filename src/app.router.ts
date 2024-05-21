import express, { Request, Response } from "express";
import { productModel } from "./modules/productManagement/porduct.model";
import { productsController } from "./modules/productManagement/product.controller";

const router = express.Router();

router.post("/products", productsController.createProduct);
router.get('/products',productsController.getProduct)

export const routerManager = router;
