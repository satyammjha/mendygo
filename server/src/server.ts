import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactroutes from './routes/contact.routes'
import authRoute from './routes/auth.route'
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/contact", contactroutes);
app.use("/auth", authRoute);

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });