import jwt from "jsonwebtoken";
export const sendCookie = (user,res,message,statusCode=200) => {
  //Saving Cookie Data
  
  const token = jwt.sign({ _id: user._id }, process.env.PrivateKey);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    })
    .json({
      success: true,
      message,
    });
};
