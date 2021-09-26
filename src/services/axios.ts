import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_KRATOS_BASE,
  withCredentials: true,
});

export default instance;
