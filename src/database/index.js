const mongoose = require('mongoose');

const conectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/zeus', { 
            useNewUrlParser: true, useUnifiedTopology: true 
        });
        mongoose.Promise = global.Promise;
    } catch (err) {
        process.exit(1)
    }
}

module.exports = conectDB;