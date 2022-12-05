import { FC, useContext } from "react";
import { ConnectContext } from "../../context/ConnectContext";
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';

import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

import logoNFT from '../../images/logo.jpg';
import { NFTContractABI, NFTContractAddress } from "../../constants/contractNFT";

export const MintSection: FC = () => {

  const { connectWallet } = useContext(ConnectContext);
  const { address } = useAccount();

  const { config } = usePrepareContractWrite({
    address: NFTContractAddress,
    abi: NFTContractABI,
    functionName: "mintNft"
  });
  const { isSuccess, isLoading, write: mintNft, isError } = useContractWrite(config);

  const handleMint = () => {
    mintNft?.();
  }

  if(isSuccess) {
    toast.success("NFT minted! Check out your wallet", { theme: "colored" });
  } else if (isError) {
    toast.error("Mint not successfull, try again", { theme: "colored" });
  }

  return(
    <div className="w-full h-[90vh] flex items-center justify-center">
      <div className="w-full lg:w-3/5 flex">

        <div className="w-1/2 flex flex-col text-white">

          <h1 className="text-8xl ">WELCOME TO</h1>
          <h1 className="text-8xl">LIQUID+ NFTs</h1>

          <p className="text-lg pt-10">Hey Team Liquid fans! We built Liquid+ NFTs just for you.</p>

          <p className="text-lg pt-5">With our NFTs you can make your voice count, express your opinions and help us decide on crucial things related to our Team Liquid! Also holding our NFTs will give you a chance of winning unique merchants and participate in special Team Liquid events!</p>
          <p className="text-lg pt-5">Join our community!</p>
        </div>

        <div className="w-1/2 flex flex-col items-center">
          
          <div className="flex w-full">
            <div className="border-[1px] w-10 h-96 border-r-0 border-gray-400 ml-20"></div>

            <div className="w-full flex items-center justify-center">
              <img className="w-80 h-80 rounded-lg" src={logoNFT} alt="Logo NFT" />
            </div>

            <div className="border-[1px] w-10 h-96 border-l-0 border-gray-400 mr=20"></div>
          </div>

          <div className="flex items-center pt-10 text-white">
            <div className="border-[1px] w-5 h-20 border-r-0 border-gray-400 ml-20"></div>

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
                onClick={handleMint}
              >
                {isLoading ? <ClipLoader color="white" size={24}/> : "Mint"}
              </button>
            )}

            <div className="border-[1px] w-5 h-20 border-l-0 border-gray-400 mr=20"></div>
          </div>

        </div>

      </div>
    </div>
  )
}