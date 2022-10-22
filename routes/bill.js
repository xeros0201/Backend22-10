import express from "express";
import {  getAllBill, getBill, updateBill } from "../controller/billController.js";
import { verifyTokenAndAdmin } from "../controller/middlewareController.js";

const router = express.Router()


router.get('/',getAllBill)
router.get('/get/:id',getBill)
router.put('/update',verifyTokenAndAdmin,updateBill)
export default router
