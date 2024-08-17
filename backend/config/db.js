const mongoose = require('mongoose');

require('dotenv').config();
const connectDB = async () => {
    try {
        // Replace the connection string with your MongoDB URI
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;