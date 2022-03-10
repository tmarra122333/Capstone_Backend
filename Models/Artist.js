const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({                   //instantiating a new instance of mongoose schema
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    name: {
        type: String,
        required: [true, "Please Enter a Valid Username."]
    },
    description: {
        type: String,
        required: [true, "Give us your biography."]
    },
    genre: {
        type: String,
        required: [true, "What Genre of music are  you?"]
    }
});

module.exports = Artist = mongoose.model("Artist", artistSchema);