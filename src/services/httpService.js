import axios from "axios";
import auth from "../services/authService";

axios.interceptors.response.use(null, error => {
  if ( error.response.status === 401) {
    auth.logout();
    window.location = "/login";
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
