const express = require("express");
const router = express.Router();

const proposalController = require("../../controllers/proposalController.js");

router.get("/", proposalController.getAllProposals);

router.get("/:propId", proposalController.getProposal);

router.post("/", proposalController.createProposal);

router.patch("/:propId", proposalController.updateProposal);

router.delete("/:propId", proposalController.deleteProposal);

//Importante exportar el router
module.exports = router;