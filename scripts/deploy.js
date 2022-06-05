const hh = require("hardhat");

async function main() {
    const BaseNft = await hh.ethers.getContractFactory("BaseNft");
    const nft = await BaseNft.deploy();

    await nft.deployed();

    console.log("Deployed at: ", nft.address);
}

main()
    .then( () => process.exit(0))
    .catch( (error) => {
        console.error(error);
        process.exit(1);
    });
