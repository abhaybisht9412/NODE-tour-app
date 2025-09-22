const express = require("express");
const app = express();
const PORT = 3000;

// Simple route
app.get("/", (req, res) => {
  res.send("Hello from Node.js app deployed on Kubernetes 🚀");
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
