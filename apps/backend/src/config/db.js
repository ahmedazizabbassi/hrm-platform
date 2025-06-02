// Placeholder for Database Connection (MongoDB using Mongoose)
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Replace with your MongoDB connection string (ideally from environment variables)
    const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/hrm_platform";
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

