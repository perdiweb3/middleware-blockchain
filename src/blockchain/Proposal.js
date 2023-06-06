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
const { DAOAddress, DAOABI, PRIVATE_KEY, getAlchemyProvider } = require("./contracts.js");

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

const createProposalInBlockchain = async (newProposal) => {
    try{
        const provider = await getAlchemyProvider();
        const DaoContract = new ethers.Contract(DAOAddress,DAOABI, provider);
        const wallet = new ethers.Wallet(PRIVATE_KEY,provider);
        const DaoContractWallet = DaoContract.connect(wallet);

        const tx = await DaoContractWallet.createProposal(newProposal.title, 
                                                    newProposal.description, 
                                                    newProposal.quantityVotesOptions, 
                                                    newProposal.optionsCode, 
                                                    newProposal.deadline);

        // await tx.wait();    
        console.log(tx);
        return true;                
    }catch(e){
        console.error(e);
        return false;
    }                    
}


module.exports = {
    getAllProposals, 
    createNewProposal, 
    getProposalFromBlockchain, 
    isProposalActiveFromBlockchain,
    createProposalInBlockchain
};