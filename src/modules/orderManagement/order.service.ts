import Order from "./order.interface";
import { orderModel } from "./order.model";

const CreateOrderInToDB = async (orderItem: Order) => {
  const result = orderModel.create(orderItem);
  return result;
};
const GetOrderFromDB = async () => {
  const result =await orderModel.find();
  return result;
};

export const OrderService = {
  CreateOrderInToDB,
  GetOrderFromDB,
};
