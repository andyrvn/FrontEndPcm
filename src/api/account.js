import axios from "@/utils/axios";

export const login = ({userName, password }) => {
  return axios.post(`/login`, { userName, password });
};

export const register = ({ userName, name, email, password }) => {
  return axios.post(`/register`, { userName, name, email, password });
};

export default {
  login,
  register
};
