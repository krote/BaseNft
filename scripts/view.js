const Web3 = require("web3");

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const PUBLIC_KEY = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const PROVIDER_URL = "http://localhost:8545";

async function viewNFT() {
    const web3 = new Web3(PROVIDER_URL);
    const contract = require("../artifacts/contracts/BaseNft.sol/BaseNft.json");
    const nftContract = new web3.eth.Contract(contract.abi, CONTRACT_ADDRESS);
    nftContract.methods.balanceOf(PUBLIC_KEY).call().then(console.log);
}

viewNFT();
