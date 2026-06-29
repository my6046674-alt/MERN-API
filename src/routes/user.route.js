// import express from "express"
// import userController from "../controllers/user.controller.js";


// const router=XPathExpression.Router();

// router.post("/", userController.createUser);

// export default router;

import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router(); // ✅ was: XPathExpression.Router()

router.post("/", userController.createUser);

router.get("/", userController.getAllUser)

router.get("/:id", userController.getById)


router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;