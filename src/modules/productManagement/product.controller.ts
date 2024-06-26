import { Request, Response } from "express";
import { ProductService } from "./product.service";
import prodctValidationSchema from "./product.zod.validation";

//create products
const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = req.body;
    const validateProduct = prodctValidationSchema.parse(newProduct);

    const result = await ProductService.createProductInToDB(validateProduct);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product created Failed!",
      data: error,
    });
  }
};

//get products
const getProduct = async (req: Request, res: Response) => {
  // console.log("taz");
  try {
    const { searchTerm } = req.query;
    let result;
    if (searchTerm) {
      result = await ProductService.getProductFromDBByQuery(
        searchTerm as string
      );
    } else {
      result = await ProductService.getProductFromDB();
    }
    // console.log(result);
    result.length != 0
      ? res.status(200).json({
          success: true,
          message: "Products fetched successfully!",
          data: result,
        })
      : res.status(200).json({
          success: true,
          message: "No Product Found",
        });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Products fetched Failed!",
      data: error,
    });
  }
};

//get product by id
const getProductById = async (req: Request, res: Response) => {
  // console.log("taz");
  try {
    const { productId } = req.params;

    const result = await ProductService.getProductById(productId);

    // console.log(result);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product fetched failed!",
      data: error,
    });
  }
};

//update product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateProduct = req.body;

    const result = await ProductService.updateProducFromDB(
      productId,
      updateProduct
    );

    // console.log(result);

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product updated failed!",
      data: error,
    });
  }
};

//Delete product
const DeleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    // const updateProduct = req.body;
    // console.log(productId);
    const result = await ProductService.DeleteProducFromDB(productId);
    result?.deletedCount == 1
      ? res.status(200).json({
          success: true,
          message: "Product deleted successfully!",
          data: null,
        })
      : res.status(404).json({
          success: false,
          message: "Product Not Found!",
        });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Product deleted failed!",
      data: error,
    });
  }
};

//get product by query
// const getProductByquery = async (req: Request, res: Response) => {
//   console.log(req.query);
// };

export const productsController = {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  DeleteProduct,
  // getProductByquery,
};
