const express = require("express");
const { initializeDatabase } = require("./src/database/db");
const userRoutes = require("./src/routes/userRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/users", userRoutes);

const startServer = async () => {
  try {
    await initializeDatabase();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
