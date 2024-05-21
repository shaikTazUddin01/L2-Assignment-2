import Order from "./order.interface";
import { orderModel } from "./order.model";

//create order
const CreateOrderInToDB = async (orderItem: Order) => {
  const result = orderModel.create(orderItem);
  return result;
};

//get order
const GetOrderFromDB = async () => {
  const result = await orderModel.find();
  return result;
};

//get order by email
const GetOrderByEmail = async (emailquery: string) => {
  const result = await orderModel.aggregate([
    { $match: { email: emailquery } },
  ]);

  // console.log("result----->>", result);
  return result;
};

//


export const OrderService = {
  CreateOrderInToDB,
  GetOrderFromDB,
  GetOrderByEmail,
};
