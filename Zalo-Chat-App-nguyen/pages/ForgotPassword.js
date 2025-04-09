import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { sendOtp, verifyOtp, resetPassword } from "../api/apiClient";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSendOtp = async () => {
    try {
      await sendOtp(phoneNumber);
      setStep(2);
    } catch (err) {
      setError("Không thể gửi OTP. Vui lòng thử lại.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await verifyOtp(phoneNumber, otp);
      setStep(3);
    } catch (err) {
      setError("OTP không chính xác. Vui lòng thử lại.");
    }
  };

  const handleResetPassword = async () => {
    try {
      await resetPassword(phoneNumber, newPassword);
      alert("Đặt lại mật khẩu thành công!");
      setStep(1);
    } catch (err) {
      setError("Không thể đặt lại mật khẩu. Vui lòng thử lại.");
    }
  };

  return (
    <View style={styles.container}>
      {step === 1 && (
        <View>
          <Text style={styles.title}>Quên mật khẩu</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Button title="Gửi OTP" onPress={handleSendOtp} />
        </View>
      )}
      {step === 2 && (
        <View>
          <Text style={styles.title}>Xác minh OTP</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mã OTP"
            value={otp}
            onChangeText={setOtp}
          />
          <Button title="Xác minh" onPress={handleVerifyOtp} />
        </View>
      )}
      {step === 3 && (
        <View>
          <Text style={styles.title}>Đặt lại mật khẩu</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu mới"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <Button title="Đặt lại mật khẩu" onPress={handleResetPassword} />
        </View>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default ForgotPassword;
