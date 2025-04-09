import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://192.168.188.76:5001/api`, // Thay bằng URL backend của bạn
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
export const sendOtp = (phoneNumber) => {
  return apiClient.post("/auth/send-otp", { phoneNumber });
};

export const verifyOtp = (phoneNumber, otp) => {
  return apiClient.post("/auth/verify-otp", { phoneNumber, otp });
};

export const resetPassword = (phoneNumber, newPassword) => {
  return apiClient.post("/auth/reset-password", { phoneNumber, newPassword });
};
export default apiClient;
