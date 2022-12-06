// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./TeamLiquidNFTsInterface.sol";

contract TeamLiquidDAO is Ownable {

  constructor() {
    proposalCount = 0;
    teamLiquidNFTs = TeamLiquidNFTsInterface(0x63B7eeaD4d9F0c99e1F8Bd2D4763c61B6acee5f3);
  }

  TeamLiquidNFTsInterface teamLiquidNFTs;

  struct Proposal {
    string question;
    uint256 deadline;
    string optionA;
    string optionB;
    string optionC;
    string optionD;
    uint256 votesA;
    uint256 votesB;
    uint256 votesC;
    uint256 votesD;
    mapping(address => bool) voters;
  }

  enum Vote {
    A,
    B,
    C,
    D
  }


  mapping(uint256 => Proposal) public proposals;
  uint256 public proposalCount;

  event VoteCasted();
  event AddedProposal(uint256 proposalCount);




  // ------------------------------------------------------------
  //                    OWNER INTERFACE
  // ------------------------------------------------------------

  function createProposal(
    string memory question, 
    string memory optionA,
    string memory optionB,
    string memory optionC,
    string memory optionD
    ) public onlyOwner {

    Proposal storage newProposal = proposals[proposalCount];

    newProposal.question = question;
    newProposal.deadline = block.timestamp + 5 days;
    newProposal.optionA = optionA;
    newProposal.optionB = optionB;
    newProposal.optionC = optionC;
    newProposal.optionD = optionD;

    emit AddedProposal(proposalCount);

    proposalCount++;
  }




  // ------------------------------------------------------------
  //                    HOLDER INTERFACE
  // ------------------------------------------------------------

  function voteOnActiveProposal(Vote vote) external onlyNftHolder voteOnlyOnce {

    Proposal storage activeProposal = proposals[proposalCount - 1];
    uint256 voteWeight = teamLiquidNFTs.balanceOf(msg.sender);
    activeProposal.voters[msg.sender] = true;

    if(vote == Vote.A) {
      activeProposal.votesA += voteWeight;

    } else if(vote == Vote.B) {
      activeProposal.votesB += voteWeight;

    } else if(vote == Vote.C) {
      activeProposal.votesC += voteWeight;

    } else if(vote == Vote.D) {
      activeProposal.votesD += voteWeight;
    }

    emit VoteCasted();
  }

  // ------------------------------------------------------------
  //                         MODIFIERS 
  // ------------------------------------------------------------

  modifier onlyNftHolder() {
    require(teamLiquidNFTs.balanceOf(msg.sender) > 0, "Not an NFT holder");
    _;
  }

  modifier voteOnlyOnce() {
    require(proposals[proposalCount - 1].voters[msg.sender] != true, "Already voted");
    _;
  }
}