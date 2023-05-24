//Obtener los datos en formato JSON
const data = require("./proposal.json");

const { saveToJSON } = require("./utils.js");

const getAllProposals = () => {
    return data.proposals;
}

const createNewProposal = (newProposal) => {
    const isAlreadyAdded = data.proposals.findIndex((proposal) => proposal.title == newProposal.title) > -1;
    if(isAlreadyAdded){
        return;
    }

    data.proposals.push(newProposal);
    saveToJSON(data);
    return newProposal;
};

//Implementar llamadas a blockchain
const {ethers} = require("ethers");
const { DAOAddress, DAOABI, getAlchemyProvider } = require("./contracts.js");

const getProposalFromBlockchain = async (proposalId) => {
    const DaoContract = new ethers.Contract(DAOAddress, DAOABI, await getAlchemyProvider());
    const proposal = await DaoContract.getProposal(proposalId);
    return proposal;
}

const isProposalActiveFromBlockchain = async (proposalId) => {
    const DaoContract = new ethers.Contract(DAOAddress, DAOABI, await getAlchemyProvider());
    const isActive = await DaoContract.isProposalActive(proposalId);
    return isActive;
}

module.exports = {getAllProposals, createNewProposal, getProposalFromBlockchain, isProposalActiveFromBlockchain};