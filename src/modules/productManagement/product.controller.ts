import { Request, Response } from "express";
import { productModel } from "./porduct.model";
import { ProductService } from "./product.service";

//create products
const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = req.body;

    const result = await ProductService.createProductInToDB(newProduct);

    res.status(200).json({
      success: true,
      message: "Product Retrieve successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product is not inserted",
      data: error,
    });
  }
};
//get products
const getProduct = async (req: Request, res: Response) => {
    // console.log("taz");
  try {
    const result = await ProductService.getProductFromDB();

    console.log(result);

    res.status(200).json({
      success: true,
      message: "Product Retrieve successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product is not Retrieve",
      data: error,
    });
  }
};
export const productsController = {
  createProduct,
  getProduct,
};
