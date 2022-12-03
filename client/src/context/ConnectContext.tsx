import { createContext, FC, ReactNode, useState } from "react";
import { useAccount, useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import { ConnectContextInterface } from "../interfaces/ConnectContextInterface";


export const ConnectContext = createContext<ConnectContextInterface>({
  connectWallet: () => {}
});

interface Props {
  children: ReactNode;
}

export const ConnectContextProvider: FC<Props> = ({ children }) => {

  const { connect } = useConnect({
    connector: new InjectedConnector()
  })

  const connectWallet = () => {
    connect();
  }

  return (
    <ConnectContext.Provider value={{
      connectWallet
    }}>
      {children}
    </ConnectContext.Provider>
  )
}