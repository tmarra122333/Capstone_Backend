require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const controllers = require("./Controllers/");

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose..*..*..*..*"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

// var corsOptions = {
//     origin: "http://localhost:3000"
// };

var corsOptions = {
        origin: "https://capstonecosmic.herokuapp.com/"
    };

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors(corsOptions)); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
////////my controllers middleware/////////
app.use("/gear", controllers.gear)
app.use("/artist", controllers.artist)
app.use("/book", controllers.book)


app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));