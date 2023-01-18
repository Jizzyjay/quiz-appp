import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect(process.env.ATLAS_URI)
        // mongoose.set('strictQuery', false);
    console.log("Database Connected")
}