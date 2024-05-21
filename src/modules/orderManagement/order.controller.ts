import { Request, Response } from "express";
import { orderModel } from "./order.model";
import { OrderService } from "./order.service";

//create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderItem = req.body;
    const result = await OrderService.CreateOrderInToDB(orderItem);

    // console.log(result);

    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
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
    console.log(email);
    if (email) {
      result = await OrderService.GetOrderByEmail(email as string);
    } else {
      result = await OrderService.GetOrderFromDB();
    }
console.log(result);

    res.json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.json({
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
