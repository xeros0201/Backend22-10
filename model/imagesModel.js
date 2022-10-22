import mongoose from "mongoose";


const schema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
    },
    src:{
     type:String
    },
    type:{
      type:String
    }

},{timestamps:true})
export const ImagesModel = mongoose.model("Images",schema)