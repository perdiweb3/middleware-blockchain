const proposalService = require("../services/proposalService.js");

const getAllProposals = (req, res) => {
    const proposals = proposalService.getAllProposals();
    // res.send("Get all Proposals");
    res.send({status: "OK", data: proposals});
}

const getProposal = (req, res) => {
    const proposal = proposalService.getProposal(req.params.propId);
    res.send(`Get Proposal: ${req.params.propId}`);
}

const createProposal = (req, res) => {
    const body = req.body;

    if(!body.title || !body.description){
        return;
    }

    const newProposal = {
        title: body.title,
        description: body.description,
        quantityVotesOptions: body.quantityVotesOptions,
        optionsCode: body.optionsCode,
    };

    const createdProposal = proposalService.createProposal(newProposal);
    res.status(201).send({status:"OK", data: createdProposal});
    // res.send(`Create Proposal: ${req.params.propId}`);
}

const updateProposal = (req, res) => {
    const proposal = proposalService.updateProposal(req.params.propId);
    res.send(`Update Proposal: ${req.params.propId}`);
}

const deleteProposal = (req, res) => {
    proposalService.getProposal(req.params.propId);
    res.send(`Delete Proposal: ${req.params.propId}`);
}

//Blockchain
const getProposalFromBlockchain = async  (req,res) => {
    const proposal = await proposalService.getProposalFromBlockchain(req.params.propId);
    res.status(200).send({status:"OK", data: proposal});
}

module.exports = {getAllProposals,getProposal,createProposal,updateProposal,deleteProposal, getProposalFromBlockchain};