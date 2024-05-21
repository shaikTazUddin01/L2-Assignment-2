import { z } from "zod";

const variantsSchema = z.object({
  type: z.string({
    required_error: "type is required",
    invalid_type_error: "type must be a string",
  }),
  value: z.string({
    required_error: "value is required",
    invalid_type_error: "value must be a string",
  }),
});

const;

const prodctValidationSchema = z.object({
  name: z.string({
    required_error: "name is required",
    invalid_type_error: "name must be a string",
  }),
  description: z.string({
    required_error: "description is required",
    invalid_type_error: "description must be a string",
  }),
  price: z.number({
    required_error: "price is required",
    invalid_type_error: "price must be a string",
  }),
  category: z.string({
    required_error: "category is required",
    invalid_type_error: "category must be a string",
  }),
  tags: z.array(
    z.string({
      required_error: "tags is required",
      invalid_type_error: "tags must be a string",
    })
  ),
  variants: z.array(variantsSchema, {
    required_error: "variants is required",
    invalid_type_error: "variants must be a string",
  }),
  inventory: z.object(
    {
      quantity: z.number({
        required_error: "quantity is required",
        invalid_type_error: "quantity must be a string",
      }),
      inStock: z.boolean({
        required_error: "inStock is required",
        invalid_type_error: "inStock must be a string",
      }),
    },
    {
      required_error: "inventory is required",
      invalid_type_error: "inventory must be a string",
    }
  ),
});

export default prodctValidationSchema;
