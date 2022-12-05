import { FC, useContext, useState } from "react";
import { useAccount, useContractRead, usePrepareContractWrite, useContractWrite } from "wagmi";

import { ConnectContext } from "../../context/ConnectContext";

import { Option } from "./Option";
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import nitr0 from '../../images/1nitr0.jpg';
import elige from '../../images/2EliGE.jpg';
import osee from '../../images/3oSee.jpg';
import naf from '../../images/4NAF.jpg';
import { DAOContractABI, DAOContractAddress } from "../../constants/contractDAO";

interface OptionInterface {
  option: number;
  img: string;
  description: string;
  votes: string;
}

export const DaoSection: FC = () => {

  const { connectWallet } = useContext(ConnectContext);
  const { address } = useAccount();
  const [selectedOption, setSelectedOption] = useState<OptionInterface>({
    option: 99,
    img: "",
    description: "", 
    votes: ""
  });

  const DAOContractData = {
    address: DAOContractAddress,
    abi: DAOContractABI
  }

  const { data: proposalCount }: any = useContractRead({
    ...DAOContractData,
    functionName: "proposalCount"
  });
  const { data: proposal }: any = useContractRead({
    ...DAOContractData,
    functionName: "proposals",
    args: [proposalCount - 1]
  });

  const { config } = usePrepareContractWrite({
    ...DAOContractData,
    functionName: "voteOnActiveProposal",
    args: [selectedOption.option - 1]
  });
  const { isSuccess, isLoading, write: voteOnActiveProposal, isError } = useContractWrite(config);

  const handleVote = () => {
    if(!selectedOption.description) {
      return toast.error("Select one option", { theme: "colored" });
    }
    voteOnActiveProposal?.();
  }


  if(isSuccess) {
    toast.success("Your vote was submitted!", { theme: "colored" });
  } else if (isError) {
    toast.error("Vote was not successfull, try again", { theme: "colored" });
  }
  

  const options: OptionInterface[] = [
    { option: 1, img: nitr0, description: proposal.optionA, votes: proposal.votesA },
    { option: 2, img: elige, description: proposal.optionB, votes: proposal.votesB },
    { option: 3, img: osee, description: proposal.optionC, votes: proposal.votesC },
    { option: 4, img: naf, description: proposal.optionD, votes: proposal.votesD }
  ]

  return(
    <div className="w-full h-[100vh] text-white flex justify-center">

      <div className="w-full lg:w-3/5 flex flex-col">
        <h1 className="text-8xl">
          LIQUID+ DAO
        </h1>

        <p className="text-xl pt-10 text-center">
          {proposal.question}
        </p>

        <div className="pt-10">
          {options.map((item, idx) => (
            <Option
              key={idx}
              option={item.option}
              img={item.img}
              description={item.description}
              handler={() => setSelectedOption(item)}
              active={selectedOption?.option === item.option}
              votes={parseInt(item.votes)}
            />
          ))}
        </div>

        <div className="flex items-center pt-10 text-white mx-auto ">
          <div className="border-[1px] w-5 h-20 border-r-0 border-gray-400"></div>

          {!address ? (
            <button 
              className="bg-gradient-to-r from-[#009dfe] h-12 w-48 to-[#007bc7] px-7 font-semibold"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          ) : (
            <button 
              className="flex items-center justify-center bg-gradient-to-r from-[#009dfe] h-12 w-48 to-[#007bc7] px-7 font-semibold"
              onClick={handleVote}
            >
              {isLoading ? <ClipLoader color="white" size={24} /> : "Vote"}
            </button>
          )}

          <div className="border-[1px] w-5 h-20 border-l-0 border-gray-400"></div>
        </div>

      </div>
    </div>
  )
}