import { FC } from "react";
import { ethers } from 'ethers';

import { DaoSection } from "./components/DaoSection/DaoSection";
import { MintSection } from "./components/MintSection/MintSection";
import { Navigation } from "./components/Navigation/Navigation";
import { RandomSection } from "./components/RandomSection/RandomSection";

import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

const ethersProvider = new ethers.providers.InfuraProvider("maticmum");
const { chains, provider } = configureChains(
  
  [chain.polygonMumbai],
  [
    infuraProvider(ethersProvider),
    publicProvider()
  ]
);


const wagmiClient = createClient({
  autoConnect: true,
  provider
});

export const App: FC = () => {

  return (
    <WagmiConfig client={wagmiClient}>
      <div className="h-[100vh]">

        <div className="background-container w-full h-full fixed bg-top bg-cover bg-no-repeat"></div>
        
        <div className="absolute w-full bg-[rgba(16,16,16,.36)]">
          <Navigation />
          <MintSection />
          <DaoSection />
          <RandomSection />
        </div>

      </div>
    </WagmiConfig>
  )
}

