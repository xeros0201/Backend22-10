import express from "express";
import {createUser,createUserAdmin,loginUser,refreshToken,updateUser,userLogout} from '../controller/authController.js'
import{verifyToken,verifyTokenAndAdmin,verifyTokenAndUser} from '../controller/middlewareController.js'
import { forgotPass, resetPass, updatePasswordUserInfo, updateUserInfo, userCheckRePassword, verifyTokenFirst, verifyTokenRe } from "../controller/userController.js";
const routerAuth = express.Router()

routerAuth.post("/register",createUser)
routerAuth.post("/login",loginUser)
routerAuth.post("/refresh",refreshToken)
routerAuth.post("/logout",verifyToken,userLogout)
routerAuth.post("/adminRe",verifyTokenAndAdmin,createUserAdmin)
routerAuth.post("/update/:id",updateUser)
routerAuth.post("/repassword",forgotPass)
routerAuth.post("/verify-re-pass",verifyTokenFirst)
routerAuth.post("/re-pass",verifyTokenRe,resetPass)
routerAuth.put('/re-info',verifyToken,updateUserInfo)
routerAuth.put('/re-user-password',verifyToken,updatePasswordUserInfo)
routerAuth.post('/re-user-password-check',verifyToken,userCheckRePassword)
export default routerAuth
