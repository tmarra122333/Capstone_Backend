const express = require("express");
const router = express.Router();
const { Book } = require("../Models");

router.get("/", async (req, res) => {
    try {

        res.json(await Book.find({}));
    } catch (error) {

        res.status(400).json(error);
    }
});

// GEAR CREATE ROUTE
router.post("/", async (req, res, next) => {
    try {
        const book = await Book.create(req.body);
        return res.status(200).json(book)
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});


router.put("/:id", async (req, res) => {
    try {

        res.json(
            await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {

        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {

        res.json(await Book.findByIdAndRemove(req.params.id));
    } catch (error) {

        res.status(400).json(error);
    }
});

module.exports = router;