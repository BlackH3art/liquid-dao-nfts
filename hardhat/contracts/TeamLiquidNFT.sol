// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "base64-sol/base64.sol";

contract TeamLiquidNFTs is ERC721 {
  string public constant IMAGE_URI = "ipfs://QmU2JRSYrjCvxRyka4jbJUJhez1UPQt1ovMbfo4Kn4ZaJK";

  uint256 private tokenCounter;

  constructor() ERC721("Team Liquid NFTs", "LIQ") {
    tokenCounter = 0;
  }

  function mintNft() public returns (uint256) {
    _safeMint(msg.sender, tokenCounter);

    tokenCounter = tokenCounter + 1;
    return tokenCounter;
  }

  function _baseURI() internal pure override returns (string memory) {
    return "data:application/json;base64,";
  }

  function tokenURI(uint256) public view override returns (string memory) {

    string memory name = string(abi.encodePacked("Team Liquid NFT #", Strings.toString(tokenCounter)));

    return
      string(
        abi.encodePacked(
          _baseURI(),
          Base64.encode(
            bytes(
              abi.encodePacked(
                '{"name":"',
                name,
                '", "description":"Team Liquid Fan NFTs, make your voice count!", ',
                '"image":"',
                IMAGE_URI,
                '"}'
              )
            )
          )
        )
      );
  }

  

  function getTokenCounter() public view returns (uint256) {
      return tokenCounter;
  }
}