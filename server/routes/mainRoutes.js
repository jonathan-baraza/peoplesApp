const express = require("express");
const router = express.Router();
const { getItems, addItem } = require("../controller/mainController");
router.get("/", getItems);

router.post("/", addItem);

module.exports = router;
