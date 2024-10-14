const mongoose = require('mongoose')

const url = 'mongodb+srv://portfolio-app:chefecarlos123@portfoliotracker-db.cab0jpi.mongodb.net/?retryWrites=true&w=majority&appName=portfoliotracker-db';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
