const express = require("express");
const router = express.Router();
const {
  sendOtp,
  verifyOtp,
  resetPassword,
} = require("../services/authService");

// Gửi OTP
router.post("/send-otp", (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const response = sendOtp(phoneNumber);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Xác minh OTP
router.post("/verify-otp", (req, res) => {
  const { phoneNumber, otp } = req.body;
  try {
    const response = verifyOtp(phoneNumber, otp);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Đặt lại mật khẩu
router.post("/reset-password", (req, res) => {
  const { phoneNumber, newPassword } = req.body;
  try {
    const response = resetPassword(phoneNumber, newPassword);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
