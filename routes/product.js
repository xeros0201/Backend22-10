import express from "express";
import { createBill, getAllBill } from "../controller/billController.js";
import { verifyTokenAndAdmin } from "../controller/middlewareController.js";
import{getProduct,createProduct,updateProduct, searchProduct, getOneProdcut,  getProductLimitation, uploadImage, getAllProductImage, getProduct_admin, searchProductAdmin} from "../controller/productController.js"
import {  createShipment, getAllShipment, updateShipment } from "../controller/shipmentController.js";

const router = express.Router()

router.get('/',getProduct)
router.get('/admin_products',verifyTokenAndAdmin,getProduct_admin)
router.get('/products_image',getAllProductImage)
router.post('/uploads',verifyTokenAndAdmin ,uploadImage)
router.post('/create',verifyTokenAndAdmin,createProduct)
router.put('/update/:id',verifyTokenAndAdmin,updateProduct )
router.delete('/delete_pr')
router.post('/shipment',verifyTokenAndAdmin,createShipment)
router.post('/getShipments',getAllShipment)
router.post('/shipment_update',verifyTokenAndAdmin, updateShipment) 
router.get('/search',searchProduct)
router.get('/search_admin',verifyTokenAndAdmin,searchProductAdmin)
router.get('/:id',getOneProdcut)
router.post('/limit',getProductLimitation)
router.post('/bill',createBill)
router.get('/bill_all',getAllBill)
export default router
