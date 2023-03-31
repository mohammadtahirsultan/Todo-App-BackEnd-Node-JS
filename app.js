import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"
const app = express();

config({
  path: "./config.env",
});

// Using Middleware to Access Data From Postman
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:[process.env.FRONT_END_URL],
  methods:["GET","POST","UPDATE","DELETE"],
  credentials:true,
  sameSite:"none",
  secure:true
}))
// Using Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

// API Routes
app.get("/", (req, res) => {
  res.send("Hello Last Wish. This is the Backend");
});


// Using Error Middleware 
app.use(errorMiddleware);
export default app;
