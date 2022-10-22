import express from "express";
import { verifyTokenAndAdmin } from "../controller/middlewareController.js";
import { createShipment, getAllShipment, updateShipment } from "../controller/shipmentController.js";

const router = express.Router()
// router.post('/shipment', createShipment)
router.get('/getShipments',getAllShipment)
router.post('/shipment_update',verifyTokenAndAdmin ,updateShipment) 
export default router
