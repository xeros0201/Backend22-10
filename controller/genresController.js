import { genresModel } from "../model/genresModel.js"


export const createGenres= async (req,res)=>{
    try {
        const newGen = req.body
    
        const gen = await new genresModel(newGen)
        await gen.save()
        return   res.status(200).json(gen)
    } catch (error) {
       return res.status(500).json({error:error})
    }
}
export const getAllGen = async (req,res)=>{
    try {
        const genList = await genresModel.find({status:true})
        return   res.status(200).json(genList)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
}
export const getAllGenAdmin = async (req,res)=>{
    try {
        const genList = await genresModel.find()
        return   res.status(200).json(genList)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:error})
    }
}
export const getOneGen = async (req,res)=>{
    try {
        
      
        const reqGen = req.params.id
        
        const Gen = await genresModel.findById(reqGen)

       
       return res.status(200).json(Gen)
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

export const updateGen = async (req,res) =>{
    try {
        
        const reqGen = req.query.id
        const gen = req.body
     
        const newGen = await genresModel.findByIdAndUpdate(reqGen,gen,{new:true})
        return res.status(200).json(newGen)
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

