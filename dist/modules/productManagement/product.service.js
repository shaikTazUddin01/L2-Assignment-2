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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const porduct_model_1 = require("./porduct.model");
//create product
const createProductInToDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.productModel.create(product);
    return result;
});
//get product
const getProductFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.productModel.find();
    return result;
});
//get product by query
const getProductFromDBByQuery = (nameQuery) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.productModel.find({
        name: { $regex: new RegExp(nameQuery, "i") },
    });
    // const result= products.where('name').regex(nameQuery);
    return result;
});
//get product using id
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.productModel.findById(id);
    return result;
});
//updateProductById
const updateProducFromDB = (id, updateInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.productModel.findByIdAndUpdate(id, updateInfo, {
        returnOriginal: false,
    });
    return result;
});
//delete product
const DeleteProducFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield porduct_model_1.productModel.deleteOne({ _id: id });
    // console.log(result);
    return result;
});
//product quentity check
const productQuentitycheck = (newProductQuentity, id) => __awaiter(void 0, void 0, void 0, function* () {
    let updatequentity;
    if (newProductQuentity > 0) {
        updatequentity = {
            inventory: {
                quantity: newProductQuentity,
                inStock: true,
            },
        };
    }
    else {
        updatequentity = {
            inventory: {
                quantity: newProductQuentity,
                inStock: false,
            },
        };
    }
    const result = yield porduct_model_1.productModel.findByIdAndUpdate(id, updatequentity, {
        returnOriginal: false,
    });
    return result;
});
exports.ProductService = {
    createProductInToDB,
    getProductFromDB,
    getProductById,
    updateProducFromDB,
    DeleteProducFromDB,
    getProductFromDBByQuery,
    productQuentitycheck,
};
