import { BillModel } from "../model/billModel.js"
import { DiscountModel } from "../model/discountModel.js"
import { ProductModel } from "../model/productModel.js"
import { UserModel } from "../model/userModel.js"



export const createBill= async (req,res)=>{

    try {
      
      
        const newBill = req.body
        if(!newBill.discount){
            console.log(newBill)
            const bill = await new BillModel(newBill)
            await bill.save()
            return   res.status(200).json(bill)

        }else{
            await DiscountModel.findOneAndUpdate({"name":newBill.discount},{
                $push :{"userUsed": newBill.buyer._id}
            })
            const bill = await new BillModel(newBill)
            await bill.save()
            return   res.status(200).json(bill)
        }
   
        
    } catch (error) {
       return res.status(500).json({error:error})
    }
}
export const getAllBill = async(req,res)=>{
    try {
        const bills = await BillModel.find()
  
        return res.status(200).json(bills)
    } catch (error) {
        return res.status(500).json({error:error})
    }
}
export const getBill = async(req,res)=>{
    try {
        const bill = req.params
            console.log(bill.id)
        const bills = await BillModel.findById(bill.id).populate("buyer")
  
        return res.status(200).json(bills)
    } catch (error) {
        return res.status(500).json({error:error})
    }
}
export const getAllBillByUser = async(req,res)=>{
    try {
        const user = req.params
        const bills = await BillModel.findById(user._id)
        return res.status(200).json(bills)
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

export const updateBill = async (req,res) =>{
    try {
        const {id} = req.query
        const newBill = req.body
        const bill = await BillModel.findById(id)
        if(!bill) return res.status(400).json("Không tìm thấy bill này")
        if(!newBill) return res.status(402).json("Không thấy dữ liệu")
        
        const updateBill = await BillModel.findByIdAndUpdate(id,{status:newBill.status},{new:true})
        return res.status(200).json(updateBill)
    } catch (error) {
        res.status(500).json(error)
    }
}

