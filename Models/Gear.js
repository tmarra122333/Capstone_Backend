const mongoose = require('mongoose');

const GearSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name can not be empty']
    },
    manufacturer: {
        type: String,
        required: [true, 'please enter name of the author.']
    },
    price: {
        type: Number,
        min: [0, 'you can not add a negative number'],
        required: [true, 'price can not be empty'],
    },
    image: {
        type: String,
        required: [true, "image can not be empty"],
    },
    description: {
        type: String,
    }
});

module.exports = Gear = mongoose.model("Gear", GearSchema);
