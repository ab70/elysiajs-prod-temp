import mongoose from 'mongoose';
// mongoose.set('strictQuery', true); // set it to false if needs to query the database by any field
const MONGO_URL = process.env.MONGO_URL || "";
const connection = mongoose.connect(MONGO_URL).then(async (response) => {
    console.log("MongoDB connected successfully-->");
})
