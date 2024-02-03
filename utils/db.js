import mongoose from "mongoose";

const connectionToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect("mongodb://localhost:27017/Real-State");
      console.log("Connect To Database Successfully");
    }
  } catch (error) {
    return res.status(500).json({message:'Unknown Internal Server Error ...'})
  }
};

export default connectionToDB;
