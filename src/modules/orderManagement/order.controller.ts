import { Request, Response } from "express";
import { orderModel } from "./order.model";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderItem = req.body;
    const result = await OrderService.CreateOrderInToDB(orderItem);

    console.log(result);

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
const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.GetOrderFromDB();



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
