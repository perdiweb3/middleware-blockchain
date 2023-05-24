const {ethers} = require("ethers");

const ReturnProposal = "tuple(uint256 proposalId,string title,string description,uint256 deadline,uint8 quantityVotesOptions,uint8[] optionsVotes,string[] optionsCode,address[] voters,bool executed, uint8 optionsNumber)";
const DAOAddress = "0x414E66f5C28399ad0e43a1d034bC5D38D0282340";
const DAOABI = [
    `function getProposal(uint256 _proposalId) view returns(${ReturnProposal} rb)`,
    "function isProposalActive(uint256 _proposalId) view returns(bool)",//bn
    // "function proposalIdCounter() view returns(uint256)",//todo: añadir a dao logic
    // "function getActiveProposalsIds() view returns(uint256[] memory)",//bn
    // "function getInactiveProposalsIds() view returns(uint256[] memory)",//bn
    // "function voteProposal(uint256 _proposalId, uint8[] memory _votes)",//bn
    // "function getMaxTokenCollection(address _user) view returns (uint8)",//bn
    // "function createProposal(string memory _title, string memory _desc,uint8 _quantityVotesOptions, string[] memory _options, uint256 _deadline)"//bn
];

const mumbaiProviderURL = "https://polygon-mumbai.g.alchemy.com/v2/QKgKFqbKQCGWGZmpvxrNePx1aRbxfZpU";

const getAlchemyProvider = async () => {
    const alchemyProvider =  new ethers.providers.JsonRpcProvider(mumbaiProviderURL);
    return alchemyProvider;
}



module.exports = {DAOAddress, DAOABI, getAlchemyProvider};
