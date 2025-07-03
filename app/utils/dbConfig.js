import mongoose from "mongoose";

const connectDB = async () => {
    if(mongoose.connection.readyState) {
        console.log("mongodb already connected");
        return;
    }
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log("mongodb connection failed", err)
    )
}

export default connectDB;