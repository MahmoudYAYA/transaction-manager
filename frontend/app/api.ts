import axios from "axios";

// le front contact le backend port(3000) contact le backend port(800) grace à ce axios et NEXT_PUBLIC_API_URL
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "api/",
});

export default api;
