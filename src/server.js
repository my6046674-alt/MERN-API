import express from "express";
import config from "./config/config.js";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import connectDB from "./config/database.js";
import bodyParser from "body-parser";
import { logger } from "./middlewares/logger.js";

const app = express();
app.use(express.json());

connectDB();
app.use(bodyParser.json());
app.use(logger);

app.use("/api/products",  productRoute);
app.use("/api/users", userRoute);
app.use("/api/auth",  authRoute);

app.get("/", (req, res) => {
    res.send("Home page");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.post("/contact", async (req, res) => {
    res.send("Contact form submitted.");
});

// ❌ REMOVED: app.listen("/", productRoute); — this was invalid


app.listen(config.port || 8000, () => {
    console.log("Server running..");
});