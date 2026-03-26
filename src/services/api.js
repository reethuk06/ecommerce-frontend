import axios from "axios";

const API = axios.create({
  baseURL: "ecommercebackend-production-e4ba.up.railway.app/api"
});

export default API;
