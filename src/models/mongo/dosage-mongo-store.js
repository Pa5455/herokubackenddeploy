import { Dose } from "./dose.js";

export const doseMongoStore = {
  async getAllDosage() {
    const dosage = await Dose.find().populate("donor").populate("product").lean();
    return dosage;
  },

  async getDosageByProduct(id) {
    const doseage = await Dose.find({ product: id });
    return dosage;
  },

  async dose(amount, method, donor, product, lat, lng) {
    const newDose = new Dose({
      amount,
      method,
      donor: donor._id,
      product: product._id,
      lat,
      lng,
    });
    await newDose.save();
    return newDose;
  },

  async deleteAll() {
    await Dose.deleteMany({});
  },
};
