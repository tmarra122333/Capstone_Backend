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
    image: {
        type: String,
        required: [true, "image can not be empty"],
    },
    description: {
        type: String,
    }
});

module.exports = Gear = mongoose.model("Gear", GearSchema);
