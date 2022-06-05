const Web3 = require("web3");

// 
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const PUBLIC_KEY = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
const PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const PROVIDER_URL = "http://localhost:8545";


async function mintNFT() {
    const web3 = new Web3(PROVIDER_URL);
    const contract = require("../artifacts/contracts/BaseNft.sol/BaseNft.json");
    const nftContract = new web3.ethContract(contract.abi, CONTRACT_ADDRESS);
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "laltest");
    const tx = {
        from: PUBLIC_KEY,
        to: CONTRACT_ADDRESS,
        nonce: nonce,
        gas: 500000,
        data: nftContract.methods.mint(PUBLIC_KEY).encodeABI(),
    };

    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signPromise
        .then((signedTx) => {
            const tx = signedTx.rawTransation;
            if( tx !== undefined ){
                web3.eth.sendSignedTransaction(tx, function(err, hash) {
                    if( !err ) {
                        console.log("The hash of your transaction is:", hash);
                    } else {
                        console.log("Something went wrong when submittion your transaction:", err);
                    }
                });
            }
        })
        .catch( (err) => {
            console.log("Promise failed:", err);
        });
}

mintNFT();
