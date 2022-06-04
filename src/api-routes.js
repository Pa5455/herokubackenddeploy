import { userApi } from "./api/users-api.js";
import { dosageApi } from "./api/dosage-api.js";
import { productsApi } from "./api/products-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/dosage", config: dosageApi.findAll },
  { method: "GET", path: "/api/products/{id}/dosage", config: dosageApi.findByProduct },
  { method: "POST", path: "/api/products/{id}/dosage", config: dosageApi.makeDose },
  { method: "DELETE", path: "/api/dosage", config: dosageApi.deleteAll },

  { method: "GET", path: "/api/products", config: productsApi.find },
  { method: "GET", path: "/api/products/{id}", config: productsApi.findOne },
  { method: "POST", path: "/api/products", config: productsApi.create },
  { method: "DELETE", path: "/api/products/{id}", config: productsApi.deleteOne },
  { method: "DELETE", path: "/api/products", config: productsApi.deleteAll },
];
