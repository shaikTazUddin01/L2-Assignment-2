import { productModel } from "./porduct.model";
import { Product } from "./product.interface";

//create product
const createProductInToDB = async (product: Product) => {
  const result = await productModel.create(product);

  return result;
};

//get product
const getProductFromDB = async () => {
  const result = await productModel.find();

  return result;
};

//get product using id
const getProductById = async (id: string) => {
  const result = await productModel.findById(id);

  return result;
};

//updateProductById
const updateProducFromDB = async (id: string, updateInfo: Product) => {
  const result = await productModel.findByIdAndUpdate(id, updateInfo, {
    returnOriginal: false,
  });

  return result;
};

//delete product

const DeleteProducFromDB = async (id: String) => {
  const result = await productModel.deleteOne({_id:id});

  console.log(result);
  return result;
};

export const ProductService = {
  createProductInToDB,
  getProductFromDB,
  getProductById,
  updateProducFromDB,
  DeleteProducFromDB,
};
