const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        orderdate: {
            type: String,
        },
        size: {
            type: String,
            
        },
        color: {
            type: String,
            
        },
        name: {
            type: String,
            
        },
        email: {
            type: String,
            
        },
        mobileno: {
            type: String,
        
        },
        address: {
            type: String,
            
        },
        pincode: {
            type: String,
            
        },
        quantity: {
            type: String,
            
        },
        price: {
            type: String,
            
        },
        shipping: {
            type: String,
            
        },
        total: {
            type: String,
            
        },
        status: {
            type: String,
            
        }






    })
const Order = mongoose.model("order", schema);
module.exports = Order;