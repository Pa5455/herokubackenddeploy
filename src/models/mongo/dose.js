import Mongoose from "mongoose";

const { Schema } = Mongoose;

const doseSchema = new Schema({
  amount: Number,
  method: String,
  lat: String,
  lng: String,
  donor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

export const Dose = Mongoose.model("Dose", doseSchema);
