const express = require("express");
const cors = require("cors");
const authRoutes = require("./api/auth");

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối route auth
app.use("/api/auth", authRoutes);

// Khởi chạy server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server chạy tại http://192.168.188.76:${PORT}`);
});
