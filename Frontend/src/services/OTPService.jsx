import axios from "axios";

const BASE_URL = "http://localhost:5000/api/otp"; // Adjust the URL based on your backend

const OTPService = {
  sendOTP: async (email) => {
    try {
      const response = await axios.post(`${BASE_URL}/send`, { email });
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
