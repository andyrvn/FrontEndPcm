import axios from "@/utils/axios";

export const login = function ({userName, password }){
  return axios.post(`user/login`, { userName, password });
};

export const register = ({ userName, name, email, password }) => {
  return axios.post(`/register`, { userName, name, email, password });
};

export default {
  login,
  register
};
