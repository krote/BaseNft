# NFT Smart Contract Base Sample Project

## Getting Started
Use node.js ver 16. Hardhat is not supported nodejs ver.17, 18.
```
npm init --yes
npm install --save-dev hardhat
npm install @openzeppelin/contracts web3
npx hardhat
```
Use Hardhat local network
```
npx hardhat node
```
Use another console, deploy smart contract
```
npx hardhat run --network localhost scripts/deploy.js
```
To mint in localnetwork, modify "scripts/mint.js" at "CONTRACT_ADDRESS", "PUBLIC_KEY", "PRIVATE_KEY", "npx hardhat node" command runtime key

```
// mint
npx hardhat run --network localhost scripts/mint.js
// check
npx hardhat run --network localhost scripts/view.js
```
