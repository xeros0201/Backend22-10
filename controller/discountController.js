import { DiscountModel } from "../model/discountModel.js"
import jwt from 'jsonwebtoken'
import dotenv  from "dotenv"
import { EventModel } from "../model/eventModel.js"
dotenv.config()



export const createDiscount= async (req,res)=>{
   
    try {
        const newDiscount = req.body
        const check = await DiscountModel.find({"name":newDiscount.name}) 
   
        if(check.length===0){

            const discount = await new DiscountModel(newDiscount)
            await discount.save()
            return res.status(200).json(discount)
        }else{
            return res.status(409).json("Tên giftcode này đã tồn tại")
        }
    } catch (error) {
       return res.status(500).json({error:error})
    }
}
export const getDiscount = async(req,res)=>{
    try {
        
        const discounts = await DiscountModel.find()
        return res.status(200).json(discounts)
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const getOne = async(req,res)=>{
    try {
        console.log(req.params)
        const discounts = await DiscountModel.findById({"_id":req.params.id})
        return res.status(200).json(discounts)
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const updateDiscount = async (req,res)=>{
    try {
        
        const updateDiscount = req.body 
     
        const Discount = await DiscountModel.findByIdAndUpdate(updateDiscount._id)
        return res.status(200).json(Discount)
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const updateDiscount1 = async (req,res)=>{
    try {
        
        const updateDiscount = req.body 
      
        const Discount = await DiscountModel.find({"name":updateDiscount.name,"endDate":{ $gte : new Date()},"startDate":{$lt:new Date()},"number":{$gt:0}})
        
        if(Discount.length===0){
            return res.status(410).json("Code bạn nhập không đúng hoặc đã hết hạn xin vui lòng thử lại !")
        }
        if(Discount.forWhat==="event") return  res.status(400).json("Code bạn nhập không dành cho Product!")
        return res.status(200).json(Discount)
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const checkEventDiscount = async (req,res)=>{
    try {
        
        const updateDiscount = req.body 
     
        let  theDate = new Date()
      
        const Discount = await DiscountModel.find({"name":updateDiscount.name,"endDate":{ $gte :  theDate},"startDate":{$lt:theDate},"number":{$gt:0}})
    
        if(Discount.length===0){
            return res.status(410).json("Code bạn nhập không đúng hoặc chưa được kích hoạt hoặc đã hết hạn xin vui lòng thử lại !")
        }
        if(Discount.forWhat==="product") return  res.status(400).json("Code bạn nhập không dành cho Event!")
        const eventCheck = await EventModel.findById(req.body.eventInfo)
      
        const check = eventCheck.giftCode.filter(item=>item===Discount._id)
        if(!check) return  res.status(400).json("Code bạn nhập không dành cho sự kiện lần này !")

        return res.status(200).json(Discount)
    } catch (error) {
      
        return res.status(500).json(error)
    }
}

