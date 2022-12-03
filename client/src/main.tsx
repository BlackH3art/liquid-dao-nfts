import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ConnectContextProvider } from './context/ConnectContext';
import './index.css'

import { ethers } from 'ethers';
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <ConnectContextProvider>
        <App />
      </ConnectContextProvider>
    </WagmiConfig>
  </React.StrictMode>
);
