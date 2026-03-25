const express = require("express");
const { initializeDatabase } = require("./src/database/db");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    const db = await initializeDatabase();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
