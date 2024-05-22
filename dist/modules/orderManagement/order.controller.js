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
exports.orderController = void 0;
// import { orderModel } from "./order.model";
const order_service_1 = require("./order.service");
const product_service_1 = require("../productManagement/product.service");
const order_zod_validation_1 = __importDefault(require("./order.zod.validation"));
//create order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const orderBody = req.body;
        //zod vaildation
        const orderItem = order_zod_validation_1.default.parse(orderBody);
        //get products to find quentity
        const { productId, quantity } = req.body;
        //get proguct by id
        const Products = yield product_service_1.ProductService.getProductById(productId);
        // get product quentity
        const productCurrentQuentity = ((_a = Products === null || Products === void 0 ? void 0 : Products.inventory) === null || _a === void 0 ? void 0 : _a.quantity) - quantity;
        // console.log(productCurrentQuentity);
        if (productCurrentQuentity < 0) {
            return res.json({
                success: false,
                message: "Insufficient quantity available in inventory",
            });
        }
        //update product
        yield product_service_1.ProductService.productQuentitycheck(productCurrentQuentity, productId);
        const result = yield order_service_1.OrderService.CreateOrderInToDB(orderItem);
        return res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Order created failed!",
            data: error,
        });
    }
});
//get order
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        let result;
        if (email) {
            result = yield order_service_1.OrderService.GetOrderByEmail(email);
        }
        else {
            result = yield order_service_1.OrderService.GetOrderFromDB();
        }
        // console.log(result);
        result.length != 0
            ? res.json({
                success: true,
                message: "Order fetched successfully!",
                data: result,
            })
            : res.json({
                success: false,
                message: "Order Not Found!",
                data: result,
            });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Order fetched failed!",
            data: error,
        });
    }
});
exports.orderController = {
    createOrder,
    getOrder,
};
