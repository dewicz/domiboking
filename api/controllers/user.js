import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true}) //new true makes sure that after update we return the new version of the record
        res.status(200).json(updatedUser)
    }
    catch(err){
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id) //new true makes sure that after update we return the new version of the record
        res.status(200).json("User has been deleted.")
    }
    catch(err){
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const findUser = await User.findById(req.params.id) //new true makes sure that after update we return the new version of the record
        res.status(200).json(findUser)
    }
    catch(err){
        next(err)
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find() //new true makes sure that after update we return the new version of the record
        res.status(200).json(users)
    }
    catch(err){
        next(err)
    }

}