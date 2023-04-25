const mongoose = require('mongoose');

const uri = `mongodb+srv://uniquelivingqro1:P94YE2e2HwjDlYlU@uniqueliving.c3fx2cg.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  const conn = await mongoose.connect(uri)

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
