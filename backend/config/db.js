import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://shankar159:Laddu232@cluster0.ock9qyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => console.log("DB Connected"));
};
