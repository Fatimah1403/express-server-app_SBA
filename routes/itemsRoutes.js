const express = require("express");
const router = express.Router();

const items = require("../data/items");

// INDEX - GET getting all the items
router.get("/", (req, res) => {
    res.json(items);
});

module.exports = router;