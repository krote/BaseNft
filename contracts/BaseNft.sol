//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol"

contract BaseNft is ERC721PresetMinterPauserAutoId {
    constractor() ERC721PresetMinterPauserAutoId("BaseNft", "nft", "https://ss")
    {}
}
