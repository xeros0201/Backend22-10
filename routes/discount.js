import express from "express";
import {checkEventDiscount,  createDiscount, getDiscount, getOne, updateDiscount, updateDiscount1 } from "../controller/discountController.js";
import { verifyTokenAndAdmin } from "../controller/middlewareController.js";

const router = express.Router()

router.get('/',getDiscount)
router.get('/:id',getOne)
router.post('/create',verifyTokenAndAdmin,createDiscount)
router.put('/update',verifyTokenAndAdmin,updateDiscount )
router.post('/check',updateDiscount1)
router.post('/check_for_event',checkEventDiscount)
export default router