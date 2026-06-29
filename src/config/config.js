import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT || "",
    mongodbUrl: process.env.MONGODB_URL || "",
    jwtSecret: process.env.JWT_SECRET || "",
};

export default config;