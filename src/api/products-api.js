import Boom from "@hapi/boom";
import { Product } from "../models/mongo/product.js";

export const productsApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const products = await Product.find();
      return products;
    },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const product = await Product.findOne({ _id: request.params.id });
        if (!product) {
          return Boom.notFound("No Product with this id");
        }
        return product;
      } catch (err) {
        return Boom.notFound("No Product with this id");
      }
    },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const newProduct = new Product(request.payload);
      const product = await newProduct.save();
      if (product) {
        return h.response(product).code(201);
      }
      return Boom.badImplementation("error creating product");
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await Product.remove({});
      return { success: true };
    },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const response = await Product.deleteOne({ _id: request.params.id });
      if (response.deletedCount === 1) {
        return { success: true };
      }
      return Boom.notFound("id not found");
    },
  },
};
