"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const variantsSchema = zod_1.z.object({
    type: zod_1.z.string({
        required_error: "type is required",
        invalid_type_error: "type must be a string",
    }),
    value: zod_1.z.string({
        required_error: "value is required",
        invalid_type_error: "value must be a string",
    }),
});
const prodctValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "name is required",
        invalid_type_error: "name must be a string",
    }),
    description: zod_1.z.string({
        required_error: "description is required",
        invalid_type_error: "description must be a string",
    }),
    price: zod_1.z.number({
        required_error: "price is required",
        invalid_type_error: "price must be a string",
    }),
    category: zod_1.z.string({
        required_error: "category is required",
        invalid_type_error: "category must be a string",
    }),
    tags: zod_1.z.array(zod_1.z.string({
        required_error: "tags is required",
        invalid_type_error: "tags must be a string",
    })),
    variants: zod_1.z.array(variantsSchema, {
        required_error: "variants is required",
        invalid_type_error: "variants must be a string",
    }),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number({
            required_error: "quantity is required",
            invalid_type_error: "quantity must be a string",
        }),
        inStock: zod_1.z.boolean({
            required_error: "inStock is required",
            invalid_type_error: "inStock must be a string",
        }),
    }, {
        required_error: "inventory is required",
        invalid_type_error: "inventory must be a string",
    }),
});
exports.default = prodctValidationSchema;
