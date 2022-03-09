const express = require("express");
const router = express.Router();
const { Gear } = require("../Models");


router.get("/", async (req, res) => {
    try {

        res.json(await Gear.find({}));
    } catch (error) {

        res.status(400).json(error);
    }
});


// GEAR CREATE ROUTE
router.post("/", async (req, res, next) => {
    try {
        const gear = await Gear.create(req.body);
        return res.json(gear)
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

router.put("/:id", async (req, res) => {
    try {

        res.json(
            await Gear.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {

        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {

        res.json(await Gear.findByIdAndRemove(req.params.id));
    } catch (error) {

        res.status(400).json(error);
    }
});

module.exports = router;