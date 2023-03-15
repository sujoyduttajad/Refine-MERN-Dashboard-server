import User from "../mongodb/models/user.js";
import Property from "../mongodb/models/property.js";
import mongoose from "mongoose";

const getAllProperties = async (req, res) => {};

const getPropertyDetail = async (req, res) => {};

const createProperty = async (req, res) => {
  const { title, description, propertyType, location, price, photo, email } =
    req.body;

    // Start a new session
    const session = await mongoose.startSession();
    session.startTransaction();

    const user = await User.findOne({ email }).session(session)

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
