import axios from "axios";
import { ProductPayload } from "../../components/forms/product/types";

import { UserPayload } from "../../components/forms/user/form-user";
import { LoginRequest } from "../types/requests";

axios.defaults.baseURL = "https://projeto-nestjs-production.up.railway.app";
axios.defaults.headers.post["content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: "Bearer " + token,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error.response.status === 401) {
      if (localStorage.getItem("token")) localStorage.removeItem("token");
    }
    throw new Error(error.response.data.message);
  }
);

export const api = {
  login: async ({ email, password }: LoginRequest) => {
    try {
      const response = await axios.post("/auth", { email, password });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch(err) {
      alert(err);
    }
  },

  getProducts: async () => {
    try {
      const response = await axios.get("/product");
      return response.data;
    } catch(err) {
      alert(err);
    }
  },

  createProduct: async (payload: ProductPayload) => {
    try {
      const response = await axios.post("/product", payload);
      return response.data;
    } catch(err) {
      alert(err)
    }
  },

  updateProduct: async (payload: ProductPayload) => {
    try{

    } catch(err) {
      alert(err)
    }
  },

  createUser: async (payload: UserPayload) => {
    try {
      const response = await axios.post("/user", payload);
      return response.data;
    } catch(err: any) {
      alert(err);
    }
  },
};
