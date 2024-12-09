import axios from 'axios';
import { ADMIN_API_BASE_URL } from '../constants/ApiConstants';

// const BASE_URL = 'http://localhost:8080/user';
const BASE_URL = ADMIN_API_BASE_URL;

const UserService = {
  getAllUsers: async () => {
    const response = await axios.get(`${BASE_URL}/user-records`);
    console.log(response.data);
    return response.data;
  },
  getUserById: async (id) => {
    const response = await axios.get(`${BASE_URL}/user-records/${id}`);
    return response.data;
  },
  createUser: async (user) => {
    const response = await axios.post(`${BASE_URL}/user-create/save`, user);
    return response.data;
  },
  deleteUser: async (id) => {
    await axios.delete(`${BASE_URL}/user-delete/${id}`);
  },
  updateUser: async (id, user) => {
    const response = await axios.put(`${BASE_URL}/user-update/${id}`, user);
    return response.data;
  },

  // Add a method to reset password
  resetPassword: async (userData) => {
    const response = await axios.post(`${BASE_URL}/resetPassword`, userData);
    return response.data;
  }
};

export default UserService;
