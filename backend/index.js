import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";

dotenv.config();

const app = express();

// ✅ Enable CORS for frontend (Vite runs on 5173)
app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// Routes
app.use("/api/email", emailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
