import express from "express";
import {createGenres,getAllGen,getAllGenAdmin,getOneGen, updateGen} from '../controller/genresController.js'
import{verifyToken,verifyTokenAndAdmin,verifyTokenAndUser} from '../controller/middlewareController.js'
const router = express.Router()
 router.post("/",verifyTokenAndAdmin,createGenres)
 router.get("/gen/:id",getOneGen)
 router.get('/all',getAllGen)
 router.get('/admin_all',getAllGenAdmin)
 router.put("/update/gen",verifyTokenAndAdmin,updateGen)
export default router