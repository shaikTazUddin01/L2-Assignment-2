import { Request, Response } from "express";
import { orderModel } from "./order.model";
import { OrderService } from "./order.service";
import { ProductService } from "../productManagement/product.service";
import orderValidationSchema from "./order.zod.validation";

//create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderBody = req.body;
    //zod vaildation
    const orderItem = orderValidationSchema.parse(orderBody);

    //get products to find quentity
    const { productId, quantity } = req.body;

    //get proguct by id
    const Products = await ProductService.getProductById(productId);

    // get product quentity
    const productCurrentQuentity =
      (Products?.inventory?.quantity as number) - quantity;

    // console.log(productCurrentQuentity);

    if (productCurrentQuentity < 0) {
      return res.json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }
    //update product
    await ProductService.productQuentitycheck(
      productCurrentQuentity,
      productId
    );
    const result = await OrderService.CreateOrderInToDB(orderItem);

    return res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Order created failed!",
      data: error,
    });
  }
};

//get order
const getOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req?.query;
    let result;

    if (email) {
      result = await OrderService.GetOrderByEmail(email as string);
    } else {
      result = await OrderService.GetOrderFromDB();
    }
    console.log(result);

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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Order fetched failed!",
      data: error,
    });
  }
};

export const orderController = {
  createOrder,
  getOrder,
};
