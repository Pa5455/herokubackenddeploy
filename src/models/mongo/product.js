import Mongoose from "mongoose";

const { Schema } = Mongoose;

const productSchema = Schema({
  brandName: String,
  typeName: String,
  area: String,
});

export const Product = Mongoose.model("Product", productSchema);
