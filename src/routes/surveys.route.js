const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/surveys.controller");

router.get("/", feedbackController.getAllFeedback);

module.exports = router;
