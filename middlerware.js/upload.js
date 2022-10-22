import path from 'path'
import multer from 'multer'


var storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'uploads/')
  },
  filename: (req,file,cb)=>{
      let ext = path.extname(file.originalname)
      cb(null, Date.now()+ext)
  }
})
var storageProduct = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'uploads/products')
  },
  filename: (req,file,cb)=>{
      let ext = path.extname(file.originalname)
      cb(null, file.originalname.trim())
  }
})
var storageEvent = multer.diskStorage({
  destination:(req,file,cb)=>{
    console.log("here12")
    cb(null,'uploads/events')
  },
  filename: (req,file,cb)=>{
      let ext = path.extname(file.originalname)
      cb(null, file.originalname.trim())
  }
})
export const  uploadProduct = multer ({
  storage:storageProduct,
  fileFilter:(req,file,callback)=>{
    if(file.mimetype=="image/png"||
    file.mimetype=="image/jpg"||
    file.mimetype=="image/jpeg"){
      callback(null,true)
    }else{
      console.log('only png,jpg,jpeg')
      callback(null,false)
    }
  },
  limits:{
    fileSize: 1024*1024*30
  }
})
export const  uploadEvent = multer ({
  storage:storageEvent,
  fileFilter:(req,file,callback)=>{
    if(file.mimetype=="image/png"||
    file.mimetype=="image/jpg"||
    file.mimetype=="image/jpeg"){
     console.log('here3')
      callback(null,true)
    }else{
      console.log('only png,jpg,jpeg')
      callback(null,false)
    }
  },
  limits:{
    fileSize: 1024*1024*30
  }
})