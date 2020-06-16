import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function getUsers() {
  return http.get(apiEndpoint);
}

export function lockUsers(userIds) {
  return http.post(apiEndpoint + '/lock', userIds);
}

export function unlockUsers(userIds) {
  return http.post(apiEndpoint + '/unlock', userIds);
}

export function deleteUsers(userIds) {
  return http.post(apiEndpoint + '/delete', userIds);
}
