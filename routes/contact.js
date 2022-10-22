import express from "express";
import { createContact, getAllContactAdmin } from "../controller/contactController.js";
import { verifyTokenAndAdmin } from "../controller/middlewareController.js";

const router = express.Router()

router.post('/',createContact)
router.get('/admincontact',verifyTokenAndAdmin,getAllContactAdmin)
export default router
