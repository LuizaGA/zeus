const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    brand:{
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    
}, {timestamps: true})

const User = mongoose.model('User', UserSchema);

module.exports = User;