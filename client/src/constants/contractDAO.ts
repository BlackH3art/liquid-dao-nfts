// export const DAOContractAddress = "0xAED8a2967A8413A3CA7E67089521721d12AD22b3"; // old
// export const DAOContractAddress = "0xcF01ad6CF1df4aA47ecfC8d56250b6EcB4fA4A3C"; // old 2
export const DAOContractAddress = "0x053928BfA9B158a707F76A4Cd1c710bAFC29f037"; // old 2
export const DAOContractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "proposalCount",
        "type": "uint256"
      }
    ],
    "name": "AddedProposal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "VoteCasted",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "question",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "optionA",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "optionB",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "optionC",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "optionD",
        "type": "string"
      }
    ],
    "name": "createProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proposalCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "proposals",
    "outputs": [
      {
        "internalType": "string",
        "name": "question",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "optionA",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "optionB",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "optionC",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "optionD",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "votesA",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "votesB",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "votesC",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "votesD",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "enum TeamLiquidDAO.Vote",
        "name": "vote",
        "type": "uint8"
      }
    ],
    "name": "voteOnActiveProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]