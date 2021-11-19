const mongoose = require('mongoose');
const DogFoodSchema = new mongoose.Schema({
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

const Food = mongoose.model('User', DogFoodSchema);

module.exports = Food;