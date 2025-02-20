import axios from "axios";
import { API_BASE_URL } from "../constants/ApiConstants";

const BASE_URL = API_BASE_URL // Adjust the URL based on your backend

const OTPService = {
  sendOTP: async (recipient, msgBody, subject) => {
    try {
      const response = await axios.post(`${BASE_URL}/sendOtp`, { recipient, msgBody, subject });
      return response.data;
    } catch (error) {
      console.error("Error sending OTP:", error);
      throw error;
    }
  },

  verifyOTP: async (email, otp) => {
    try {
      const response = await axios.post(`${BASE_URL}/verify`, { email, otp });
      return response.data;
    } catch (error) {
      console.error("Error verifying OTP:", error);
      throw error;
    }
  },
};

export default OTPService;
