const mongoose = require("mongoose");

const conectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.ev4cf.mongodb.net/Cluster0?retryWrites=true&w=majority",
      //'mongodb://localhost/zeus'
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    mongoose.Promise = global.Promise;
  } catch (err) {
    process.exit(1);
  }
};

module.exports = conectDB;
