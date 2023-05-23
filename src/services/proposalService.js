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

module.exports = {getAllProposals, getProposal, createProposal, updateProposal, deleteProposal};