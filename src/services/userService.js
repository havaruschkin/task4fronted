import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/register";

export function register({email, login, password}) {
  return http.post(apiEndpoint, {
    email,
    password,
    login
  });
}
