import mongoose from 'mongoose';

export default async function connectToDB() {
    // Check if the connection is already established
    if (mongoose.connection.readyState >= 1) {
        console.log("Already connected to MongoDB");
        return;
    }

    try {

        await mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/ksolves");
        console.log("Connected to MongoDB");
    } catch (e: any) {
        console.log("Connection to MongoDB failed!!!");
        console.log(e.message);
    }
}
