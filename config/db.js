import mongoose from "mongoose";

export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://pankajjoshi4467:8607400287@food.hzeke.mongodb.net/food-del').then(()=>console.log("DB Connected"));


}
