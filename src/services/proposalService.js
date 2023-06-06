const Proposal = require("../blockchain/Proposal.js");
const {v4 : uuid} = require("uuid");

const getAllProposals = () => {
    const proposals = Proposal.getAllProposals();
    return proposals;
}

const getProposal = (req, res) => {
    return ;
}

const createProposal = (newProposal) => {
    const proposalToInsert = {
        ...newProposal,
        proposalId : uuid(),
        voters: [],
        executed: false,
        optionsNumber: newProposal.quantityVotesOptions.length,
    };

    const createdProposal = Proposal.createNewProposal(proposalToInsert);
    return createdProposal;
}

const updateProposal = (req, res) => {
    return ;
}

const deleteProposal = (req, res) => {
    return ;
}

//Blockchain
const getProposalFromBlockchain = async (proposalId) => {
    console.log("getProposalFromBlockchain");
    const proposal = await Proposal.getProposalFromBlockchain(proposalId);
    // const proposal = await Proposal.isProposalActiveFromBlockchain(proposalId);
    return proposal;
}

const createProposalInBlockchainService = async (newProposal) => {
    console.log("createProposalInBlockchain");
    const createdProposalCorrect = await Proposal.createProposalInBlockchain(newProposal);
    return createdProposalCorrect;
}

module.exports = {getAllProposals, getProposal, createProposal, updateProposal, deleteProposal, getProposalFromBlockchain, createProposalInBlockchainService};