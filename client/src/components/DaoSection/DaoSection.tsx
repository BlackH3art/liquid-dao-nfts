import { FC, useContext, useState } from "react";

import { Option } from "./Option";

import nitr0 from '../../images/1nitr0.jpg';
import elige from '../../images/2EliGE.jpg';
import osee from '../../images/3oSee.jpg';
import naf from '../../images/4NAF.jpg';
import { ConnectContext } from "../../context/ConnectContext";
import { useAccount } from "wagmi";

interface OptionInterface {
  option: number;
  img: string;
  description: string;
}

export const DaoSection: FC = () => {

  const { connectWallet } = useContext(ConnectContext);
  const { address } = useAccount();
  const [selectedOption, setSelectedOption] = useState<OptionInterface | null>(null);

  const options: OptionInterface[] = [
    { option: 1, img: nitr0, description: "nitr0"},
    { option: 2, img: elige, description: "EliGE"},
    { option: 3, img: osee, description: "oSee"},
    { option: 4, img: naf, description: "NAF"}
  ]

  return(
    <div className="w-full h-[100vh] text-white flex justify-center">

      <div className="w-full lg:w-3/5 flex flex-col">
        <h1 className="text-8xl">
          LIQUID+ DAO
        </h1>

        <p className="text-xl pt-10 text-center">
          With which our player would you like to play 1v1 on special Team Liquid event?
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
              className="bg-gradient-to-r from-[#009dfe] h-12 w-48 to-[#007bc7] px-7 font-semibold"
              onClick={() => {}}
            >
              Vote
            </button>
          )}

          <div className="border-[1px] w-5 h-20 border-l-0 border-gray-400"></div>
        </div>

      </div>
    </div>
  )
}