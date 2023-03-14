import express from "express";
import {
  createProperty,
  deleteProperty,
  updateProperty,
  getAllProperties,
  getPropertyDetail,
} from "../controllers/property.controller.js";

const router = express.Router();