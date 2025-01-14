const { signup, login, getAllUsers, getLoggedUser,  } = require("../controller/user");
const express = require("express");
const checkValidationSchmea = require("../middelware/checkValidationSchema");
const Joi = require("joi");
const { checkAuthentication } = require("../middelware/ticket");

const router = express.Router();

const signupValidationSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().min(8).required(),
      // .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
     
    
  });
  
router.post("/signup",checkValidationSchmea(signupValidationSchema),signup);
router.post("/login", login);
router.get("/get-user",checkAuthentication, getLoggedUser);
router.get("/getAllUsers", getAllUsers);

module.exports = router;   