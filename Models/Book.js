const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name can not be empty']
    },
    date: {
        type: String,
        required: [true, 'please enter date requested.']
    },
    Email: {
        type: String,
        required: [true, "image can not be empty"],
    }
});

module.exports = Book = mongoose.model("Book", BookSchema);