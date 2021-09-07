import axios from "axios";
import { kratosBase } from "../assets/settings";

const instance = axios.create({
  baseURL: kratosBase,
  withCredentials: true,
});

export default instance;
