import axios from "@/utils/axios";

export const login = ({userName, password}) => {
  console.log("test ",{userName, password})
  return axios.get(`user/login`,
   // {headers: {'Access-Control-Allow-Origin': true},},
    {params: {userName:userName, password:password}})
};

export const register = ({userName, name, email, password}) => {
  return axios.post(`/register`, {userName, name, email, password});
};

export default {
  login,
  register
};
