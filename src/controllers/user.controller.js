import User from "../models/User.js";
import userService from "../services/user.service.js";

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser();
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message); // ✅ was: error.massage
    }
};
const getAllUser = async (req, res) => {
    try {
        const user = await userService.getAll();
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message); // ✅ was: error.massage
    }
};
const getById = async (req, res) => {
    try {
        const user = await userService.getAll(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message); // ✅ was: error.massage
    }
};
const  updateUser= async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message); // ✅ was: error.massage
    }
};
const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message); // ✅ was: error.massage
    }
};

export default { createUser, getAllUser, getById,updateUser,deleteUser };