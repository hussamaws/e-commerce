import { ref, string } from "joi";
import { Schema } from "mongoose";
import { Category } from "./category.models.js";



const subcategorySchema = new Schema({
name:String,
image:Object,
createdBy:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required: false
},
category: {
type:Schema.Types.ObjectId,
ref:"Category",
require:true
}
},{timestamps:true})
export const Subcategory = model('Subcategory',subcategorySchema)