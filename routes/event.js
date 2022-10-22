import express from "express";
import { activeTicket, createEvent, createSeat, createTicket, getAllEvent, getAllEventAdmin, getEvent, getOneEvent, getOneEventAdmin, getAllOpen, updateEvent, getAllComing, uploadImage} from "../controller/eventController.js";
import { verifyTicket, verifyTokenAndAdmin } from "../controller/middlewareController.js";


const router = express.Router()
  

// router.post('/update',updateProject)
// // router.post('/create',createProject)
router.post('/',verifyTokenAndAdmin,createEvent)
router.post('/create-ticket',createTicket)
router.post('/active-ticket',activeTicket)


router.get('/get-all-event',getAllEvent)
router.get('/findEvent',getEvent)
router.get('/getAllOpen',getAllOpen)
router.get('/getAllComing',getAllComing)
router.get('/get-one/:id',getOneEvent)
router.get('/get-one-admin/:id',getOneEventAdmin)
router.get('/get-all-admin',getAllEventAdmin)
router.post('/update/:id',verifyTokenAndAdmin,updateEvent)
router.post('/upload',verifyTokenAndAdmin,uploadImage)
export default router
