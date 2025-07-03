import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    title:{type:String, required:true},
    price:{type:Number, required:true},
    imgSrc:{type:String, required:true},
}, {timestamps:true})

export const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);