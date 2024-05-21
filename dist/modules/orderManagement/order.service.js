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
exports.OrderService = void 0;
const order_model_1 = require("./order.model");
//create order
const CreateOrderInToDB = (orderItem) => __awaiter(void 0, void 0, void 0, function* () {
    const result = order_model_1.orderModel.create(orderItem);
    return result;
});
//get order
const GetOrderFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.orderModel.find();
    return result;
});
//get order by email
const GetOrderByEmail = (emailquery) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.orderModel.aggregate([
        { $match: { email: emailquery } },
    ]);
    // console.log("result----->>", result);
    return result;
});
//
exports.OrderService = {
    CreateOrderInToDB,
    GetOrderFromDB,
    GetOrderByEmail,
};
