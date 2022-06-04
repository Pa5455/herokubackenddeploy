import axios from "axios";
import { serviceUrl } from "../fixtures.js";

export const doseService = {
  doseUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.doseUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.doseUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.doseUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.doseUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.doseUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },

  async makeDonation(id, dose) {
    const response = await axios.post(`${this.doseUrl}/api/products/${id}/dosage`, dose);
    return response.data;
  },

  async getDosage(id) {
    const response = await axios.get(`${this.doseUrl}/api/products/${id}/dosage`);
    return response.data;
  },

  async createProduct(newProduct) {
    const response = await axios.post(`${this.doseUrl}/api/products`, newProduct);
    return response.data;
  },
};
