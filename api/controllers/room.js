import { request } from "express";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import { createError } from "../utils/error.js";

export const createRoom = async(req, res, next) => {

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            console.log(savedRoom)
            await Hotel.findByIdAndUpdate(hotelId, {$push : {rooms: savedRoom._id}})
        }
        catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    }
    catch (err) {
        next(err);
    }
}


export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true}) //new true makes sure that after update we return the new version of the record
        res.status(200).json(updatedRoom)
    }
    catch(err){
        next(err)
    }
}

export const deleteRoom = async (req, res, next) => {

    const hotelId = req.params.hotelid;

    try {
        await Room.findByIdAndDelete(req.params.id) //new true makes sure that after update we return the new version of the record
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull : {rooms: req.params.id}})
        }
        catch (err) {
            next(err);
        }
        res.status(200).json("Room has been deleted.")
    }
    catch(err){
        next(err)
    }
}

export const getRoom = async (req, res, next) => {
    try {
        const findRoom = await Room.findById(req.params.id) //new true makes sure that after update we return the new version of the record
        res.status(200).json(findRoom)
    }
    catch(err){
        next(err)
    }
}

export const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find() //new true makes sure that after update we return the new version of the record
        res.status(200).json(rooms)
    }
    catch(err){
        next(err)
    }

}