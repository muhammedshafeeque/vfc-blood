import mongoose from "mongoose";
import { collections } from "../Config/Collections";
const status=mongoose.Schema({
    name:{type:String,required:true,unique:true},
    description:{type:String,required:true,unique:true}
},{
    timestamps:true
})

export const STATUS=mongoose.model(collections.AVAILABILITY,status)