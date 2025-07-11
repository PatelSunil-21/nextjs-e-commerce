import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    price:{type:Number, required:true},
    imgSrc:{type:String, required:true},
}, {timestamps:true});

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
