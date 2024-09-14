import mongoose from 'mongoose';

export default async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017")
        console.log("Connected to MongoDB")
    }
    catch (e: any) {
        console.log("connecttion to mongodb failed!!!")
        console.log(e.message)
    }

}