import { db } from "../models/db.js";

export const dosageController = {
  index: {
    handler: async function (request, h) {
      const products = await db.productStore.getAllProducts();
      return h.view("Dose", { title: "Make a Dosage", products: products });
    },
  },
  report: {
    handler: async function (request, h) {
      const dosage = await db.doseStore.getAllDosage();
      let total = 0;
      dosage.forEach((dose) => {
        total += dose.amount;
      });
      return h.view("Report", {
        title: "Dosage to Date",
        dosage: dosage,
        total: total,
      });
    },
  },
  dose: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        const rawProduct = request.payload.product.split(",");
        const product = await db.productStore.findByName(rawProduct[0], rawProduct[1]);
        await db.doseStore.dose(request.payload.amount, request.payload.method, loggedInUser._id, product._id);
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};
