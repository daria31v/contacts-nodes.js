const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

const connectDatabase = async () => {
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDatabase;
