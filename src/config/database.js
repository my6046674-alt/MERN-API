import mongoose from "mongoose";
import config from "./config.js";

function connectDB() {
    mongoose.connect(config.mongodbUrl)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {          // ✅ was: (Error) => ... console.log(error) — casing mismatch
            console.log(error);
        });
}

export default connectDB;