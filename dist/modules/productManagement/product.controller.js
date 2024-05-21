"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
const product_service_1 = require("./product.service");
const product_zod_validation_1 = __importDefault(require("./product.zod.validation"));
//create products
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = req.body;
        const validateProduct = product_zod_validation_1.default.parse(newProduct);
        const result = yield product_service_1.ProductService.createProductInToDB(validateProduct);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Product created Failed!",
            data: error,
        });
    }
});
//get products
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("taz");
    try {
        const { searchTerm } = req.query;
        let result;
        if (searchTerm) {
            result = yield product_service_1.ProductService.getProductFromDBByQuery(searchTerm);
        }
        else {
            result = yield product_service_1.ProductService.getProductFromDB();
        }
        // console.log(result);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Products fetched Failed!",
            data: error,
        });
    }
});
//get product by id
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("taz");
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.getProductById(productId);
        // console.log(result);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Product fetched failed!",
            data: error,
        });
    }
});
//update product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateProduct = req.body;
        const result = yield product_service_1.ProductService.updateProducFromDB(productId, updateProduct);
        console.log(result);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Product updated failed!",
            data: error,
        });
    }
});
//Delete product
const DeleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        // const updateProduct = req.body;
        console.log(productId);
        const result = yield product_service_1.ProductService.DeleteProducFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: (result === null || result === void 0 ? void 0 : result.deletedCount) == 1 && null,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Product deleted failed!",
            data: error,
        });
    }
});
//get product by query
// const getProductByquery = async (req: Request, res: Response) => {
//   console.log(req.query);
// };
exports.productsController = {
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    DeleteProduct,
    // getProductByquery,
};
