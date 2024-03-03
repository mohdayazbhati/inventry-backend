import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name : {
            type: String,
            required: true,
        },
        companyName : {
            type: String,
            required: true,
        },
        price : {
            type: Number,
            required: true,
        },
        description : {
            type : String,
            required: true,
        },
        tax : {
            type : Number,
            required: true
        },
    },
    {
        timestamps: true
    }
)

export const Product = mongoose.model('Item', productSchema);