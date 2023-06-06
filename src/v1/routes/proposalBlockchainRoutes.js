const express = require("express");
const router = express.Router();

const proposalController = require("../../controllers/proposalController.js");

router.get("/:propId", proposalController.getProposalFromBlockchain);

router.post("/create", proposalController.createProposalInBlockchain);

module.exports = router;