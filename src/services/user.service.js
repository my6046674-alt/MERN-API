// userService.js
import User from "../models/User.js";

const getAll=async()=>{
    return await User.find();
};

const getById = async(id)=>{
    return await User.findById(id)
}

const createUser = async (data) => {
    return await User.create(data);
};

const updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true })
};

const delateUser = async (id) => {
    await User.findByIdAndDelete(id);
};

export default { createUser, getAll, getById, updateUser, delateUser };