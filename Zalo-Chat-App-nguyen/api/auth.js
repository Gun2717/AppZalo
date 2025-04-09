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

  // Kiểm tra đầu vào
  if (!phoneNumber) {
    return res.status(400).send({ message: "Số điện thoại là bắt buộc." });
  }

  try {
    const response = sendOtp(phoneNumber);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: error.message || "Lỗi khi gửi OTP." });
  }
});

// Xác minh OTP
router.post("/verify-otp", (req, res) => {
  const { phoneNumber, otp } = req.body;

  // Kiểm tra đầu vào
  if (!phoneNumber || !otp) {
    return res
      .status(400)
      .send({ message: "Số điện thoại và OTP là bắt buộc." });
  }

  try {
    const response = verifyOtp(phoneNumber, otp);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ message: error.message || "OTP không chính xác." });
  }
});

// Đặt lại mật khẩu
router.post("/reset-password", (req, res) => {
  const { phoneNumber, newPassword } = req.body;

  // Kiểm tra đầu vào
  if (!phoneNumber || !newPassword) {
    return res
      .status(400)
      .send({ message: "Số điện thoại và mật khẩu mới là bắt buộc." });
  }

  try {
    const response = resetPassword(phoneNumber, newPassword);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Lỗi khi đặt lại mật khẩu." });
  }
});

module.exports = router;
