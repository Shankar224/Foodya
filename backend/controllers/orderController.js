import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import stripe from "stripe"


//placing user order from frontend
const placeOrder =async (req,res) =>{
    const frontend_url = "http://localhost:5174";
}

//user orders for frontend
const userOrders = async (req,res) =>{
  try {
    const orders = await orderModel.find({userId:req.body.userId})
    res.json({success:true,data:orders})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
  }
}


//Listing orders for admin panel
const listOrders =async(req,res) =>{
   try {
    const orders = await orderModel.find({});
    res.json({success:true,data:orders})
   } catch (error) {
     console.log(error);
     res.json({success:false,message:"Error"})
   }
}

//api for upadating order status
const updateStatus = async (req,res) =>{
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
    res.json({success:true,message:"Status Updated"})
  } catch (error) {
     console.log(error);
     res.json({success:true,message:"Error"})
     
  }
}

export {placeOrder,userOrders,listOrders, updateStatus}