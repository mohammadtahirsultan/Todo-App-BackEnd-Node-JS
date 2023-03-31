import mongoose from "mongoose";


// Connecting with Database
export const database = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((e) => {
    console.log(`MongoDB not Connected , Error : `, e);
  });

  