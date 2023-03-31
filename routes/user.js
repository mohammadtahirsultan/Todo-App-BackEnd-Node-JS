import express from "express";
import {  createUser, getMyProfile, login, logout } from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

// Creating New User
router.post("/new", createUser);


// Login Route
router.post("/login", login);

// Logout Route
router.get("/logout", logout);


// Get User Profile 
router.get("/me",isAuthenticated,getMyProfile)


export default router;
