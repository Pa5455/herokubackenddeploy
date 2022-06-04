import { userMongoStore } from "./mongo/user-mongo-store.js";
import { doseMongoStore } from "./mongo/dosage-mongo-store.js";
import { productMongoStore } from "./mongo/product-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.doseStore = doseMongoStore;
        this.productStore = productMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};
