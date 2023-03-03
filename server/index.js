
import * as dotenv from 'dotenv';
import cors from 'cors';

const express = require("express");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

