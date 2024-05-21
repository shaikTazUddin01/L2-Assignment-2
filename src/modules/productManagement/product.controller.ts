import { Request, Response } from "express";
import { productModel } from "./porduct.model";
import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = req.body;

    const result = await ProductService.createProductInToDB(newProduct);

    res.status(200).json({
      success: true,
      message: "successfully inserted dasta",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "data is not inserted",
      data: error,
    });
  }
};

export const productsController = {
  createProduct,
};
