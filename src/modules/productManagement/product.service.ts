import { productModel } from "./porduct.model";
import { Product } from "./product.interface";

const createProductInToDB = async (product: Product) => {
  const result = await productModel.create(product);

  return result;
};

const getProductFromDB = async ()=>{
    const result =await productModel.find();

    return result;
}

export const ProductService = {
  createProductInToDB,
  getProductFromDB
};
