const express = require("express")
const userController = require("./UserController")
const Auth = require("../Auth")

const userRouter =express.Router()


userRouter.post("/",Auth, userController.CreateUser)
userRouter.post("/login", userController.LoginUser)


module.exports = userRouter