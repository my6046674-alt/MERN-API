import config from "../config/config.js";
import jwt from "jsonwebtoken";

const createToken = (data) => {
  const token = jwt.sign(data, config.jwtSecret, {
    expiresIn: "30d",
  });
  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret);
};

export default { createToken, verifyToken };