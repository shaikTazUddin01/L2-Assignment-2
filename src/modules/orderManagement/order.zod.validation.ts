import { z } from "zod";

const orderValidationSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email must be a string",
    })
    .email({ message: "Invalid email address" }),
  productId: z.string({
    required_error: "productId is required",
    invalid_type_error: "productId must be a string",
  }),
  price: z.number({
    required_error: "price is required",
    invalid_type_error: "price must be a string",
  }),
  quantity: z.number({
    required_error: "quantity is required",
    invalid_type_error: "quantity must be a string",
  }),
});

export default orderValidationSchema
