import User from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/feature.js";
import ErrorHandler from "../middlewares/error.js";



// User Controllers

// Login User
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid Credentials", 400));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return next(new ErrorHandler("Invalid Credentials", 400));
    }

    sendCookie(user, res, `Welcome Back, ${user.name}`, 200);
  } catch (err) {
    next(err);
  }
};


// Logout the User
export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite:process.env.NODE_ENV==='Development'? "lax": "none",
      secure:process.env.NODE_ENV==='Development'?false:true
    })
    .json({
      success: true,
      message: "Logout Successfully",
    });
};

// Creating/Register New User
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return next(new ErrorHandler("User Already Exist With this Email", 400));
    }

    // Hashing the Password before Saving to Database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Saving User to Database
    user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    //Saving Cookie Data
    sendCookie(user, res, "Registered Successfully", 201);
  } catch (err) {
    next(err);
  }
};

// Get the User Profile 
export const getMyProfile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
