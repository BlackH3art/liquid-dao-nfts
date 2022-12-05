// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TeamLiquidDAO is Ownable {

  constructor() {
    proposalCount = 0;
  }

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
    mapping(uint256 => bool) voters;
  }

  enum Vote {
    A,
    B,
    C,
    D
  }


  mapping(uint256 => Proposal) public proposals;
  uint256 public proposalCount;


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

    proposalCount++;
  }


  function voteOnActiveProposal(Vote vote) external {

    Proposal storage activeProposal = proposals[proposalCount - 1];

    if(vote == Vote.A) {
      activeProposal.votesA++;

    } else if(vote == Vote.B) {
      activeProposal.votesB++;

    } else if(vote == Vote.C) {
      activeProposal.votesC++;

    } else if(vote == Vote.D) {
      activeProposal.votesD++;
    }
  }
}