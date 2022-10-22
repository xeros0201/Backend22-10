import mongoose from "mongoose";



const schema = new mongoose.Schema({
    name:{
        type:String,
        
    },
 
    productCode:{
        type:String,
  
    },
    genres:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Genres",
        default:"None"
    }],
    pics:{
        type:[String]
    },
    discription:{
        type: mongoose.Schema.Types.Mixed
    },
    moreInfo:{
        type:[String],
        default:"none"
    },
    option:[
        {
        style:{
        type:String,
       
        maxlength:30,
        minlength:3
        },
        cost:{
            type:Number,
          
        }, 
        thumnailPics:{
            type:String,
       
          
        },
        number:{
            type:Number,
            default:1000,
        },

        },     
    ],
    isNewest:{
        type:Boolean,
        default:true
    },
    isBestSeller:{
        type:Boolean,
        default:false
    },
    isPreOrder:{
        type:Boolean,
        default:false
    },
    isHidden:{
        type:Boolean,
        default:false
    }


    
},{timestamps:true})


export const ProductModel = mongoose.model("Product",schema)