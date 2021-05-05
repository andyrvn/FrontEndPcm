import axios from "@/utils/axios";

export const fetchInventory = () => axios.get('/inventory');

export default {
  fetchInventory
};
