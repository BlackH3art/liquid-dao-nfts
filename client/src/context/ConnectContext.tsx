import { createContext, FC, ReactNode, useState } from "react";
import { ConnectContextInterface } from "../interfaces/ConnectContextInterface";


export const ConnectContext = createContext<ConnectContextInterface>({
  connectedAccount: "",
});

interface Props {
  children: ReactNode;
}

export const ConnectContextProvider: FC<Props> = ({ children }) => {

  const [connectedAccount, setConnectedAccount] = useState<string>("");

  return (
    <ConnectContext.Provider value={{
      connectedAccount,
    }}>
      {children}
    </ConnectContext.Provider>
  )
}