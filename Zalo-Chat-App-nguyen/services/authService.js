const otpStore = {}; // Lưu OTP tạm thời
const users = {}; // Lưu thông tin người dùng (giả lập database)

// Gửi OTP
export const sendOtp = (phoneNumber) => {
  const otp = Math.floor(100000 + Math.random() * 900000); // Tạo OTP 6 chữ số
  otpStore[phoneNumber] = otp; // Lưu OTP vào bộ nhớ tạm
  console.log(`OTP cho ${phoneNumber}: ${otp}`); // In OTP ra console (thay bằng gửi SMS)
  return { message: "OTP đã được gửi." };
};

// Xác minh OTP
export const verifyOtp = (phoneNumber, otp) => {
  if (otpStore[phoneNumber] && otpStore[phoneNumber] === parseInt(otp)) {
    return { message: "OTP hợp lệ." };
  } else {
    throw new Error("OTP không chính xác.");
  }
};

// Đặt lại mật khẩu
export const resetPassword = (phoneNumber, newPassword) => {
  if (!users[phoneNumber]) {
    users[phoneNumber] = {}; // Tạo người dùng mới nếu chưa tồn tại
  }
  users[phoneNumber].password = newPassword; // Cập nhật mật khẩu
  return { message: "Đặt lại mật khẩu thành công." };
};
