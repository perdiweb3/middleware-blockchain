const express = require("express");
const router = express.Router();

const proposalController = require("../../controllers/proposalController.js");

router.get("/:propId", proposalController.getProposalFromBlockchain);

module.exports = router;