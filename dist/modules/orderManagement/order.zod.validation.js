"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "email is required",
        invalid_type_error: "email must be a string",
    })
        .email({ message: "Invalid email address" }),
    productId: zod_1.z.string({
        required_error: "productId is required",
        invalid_type_error: "productId must be a string",
    }),
    price: zod_1.z.number({
        required_error: "price is required",
        invalid_type_error: "price must be a string",
    }),
    quantity: zod_1.z.number({
        required_error: "quantity is required",
        invalid_type_error: "quantity must be a string",
    }),
});
exports.default = orderValidationSchema;
