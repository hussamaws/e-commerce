import pkg from 'joi';
import { model, Schema } from "mongoose";

const { object, required } = pkg;

const categorySchema = new Schema(
{
name:{
    type:String,
    required: true,
    unique: true,
    lowercase:true,
    trim: true
},

slug: {
        type:String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true
    },
image: {
            type: Object,
            required: true
        },    
 createdBy:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required: false
 }   
},{timestamps:true}
)
export const Category = model('Category',categorySchema)
