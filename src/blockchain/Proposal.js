//Obtener los datos en formato JSON
const data = require("./proposal.json");

const { saveToJSON } = require("./utils.js");

//Implementar llamadas a blockchain
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

module.exports = {getAllProposals, createNewProposal};