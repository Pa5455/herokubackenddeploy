import { Product } from "./product.js";

export const productMongoStore = {
  async getAllProducts() {
    const products = await Product.find().lean();
    return products;
  },

  async findById(id) {
    const product = await Product.findOne({ _id: id }).lean();
    return product;
  },

  async findByName(brandName, typeName) {
    const product = await Product.findOne({
      brandName,
      typeName,
    });
    return product;
  },
};
