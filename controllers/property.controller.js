import User from "../mongodb/models/user.js";
import Property from "../mongodb/models/property.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllProperties = async (req, res) => {};

const getPropertyDetail = async (req, res) => {};

const createProperty = async (req, res) => {
  const { title, description, propertyType, location, price, photo, email } =
    req.body;

  // Start a new session
  const session = await mongoose.startSession();
  session.startTransaction();

  const user = await User.findOne({ email }).session(session);

  if (!user) throw new Error("User not Found");

  // const photoUrl = ...
};

const updateProperty = async (req, res) => {};

const deleteProperty = async (req, res) => {};

export {
  getAllProperties,
  getPropertyDetail,
  createProperty,
  updateProperty,
  deleteProperty,
};
