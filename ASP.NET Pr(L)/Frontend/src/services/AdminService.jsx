import axios from 'axios';
import { API_BASE_URL } from '../constants/ApiConstants';
import { ADMIN_API_BASE_URL } from '../constants/ApiConstants';

// const BASE_URL = 'http://localhost:8080/admin';
const BASE_URL = ADMIN_API_BASE_URL;

const AdminService = {
  // Create a new user
  createUser: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}`, userData);
      return response.data; // Returns the created user data
    } catch (error) {
      throw error;
    }
  },

  getPolls: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/polls`); // Ensure the endpoint is correct
      return response.data; // Returns a list of all polls
    } catch (error) {
      throw error;
    }
  },

  // Fetch all candidates
  getCandidates: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/candidates`); // Make sure the endpoint is correct
      return response.data; // Returns a list of all candidates
    } catch (error) {
      throw error;
    }
  },

  // Get a user by ID
  getUserById: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${userId}`);
      return response.data; // Returns the user data
    } catch (error) {
      throw error;
    }
  },

  // Get all users
  getAllUsers: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data; // Returns a list of all users
    } catch (error) {
      throw error;
    }
  },

  // Update user by ID
  updateUser: async (userId, userData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${userId}`, userData);
      return response.data; // Returns the updated user data
    } catch (error) {
      throw error;
    }
  },

  // Delete user by ID
  deleteUser: async (userId) => {
    try {
      await axios.delete(`${BASE_URL}/${userId}`);
    } catch (error) {
      throw error;
    }
  }
};

export default AdminService;
