import Boom from "@hapi/boom";
import {db} from "../models/db.js";

export const dosageApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const dosage = db.doseStore.getAllDosage();
      return dosage;
    },
  },
  findByProduct: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const dosage = await db.doseStore.getDosageByProduct(request.params.id);
      return dosage;
    },
  },

  makeDose: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const product = await db.productStore.findById(request.params.id);
      if (!product) {
        return Boom.notFound("No Product with this id");
      }
      const dose = await db.doseStore.dose(
          request.payload.amount,
          request.payload.method,
          request.auth.credentials,
          product,
          request.payload.lat,
          request.payload.lng,
      );
      return dose;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.doseStore.deleteAll();
      return {success: true};
    },
  },
};
