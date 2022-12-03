import { FC, useContext, useEffect } from "react";
import { useAccount, useBalance } from 'wagmi';
import { ConnectContext } from "../../context/ConnectContext";

import logoSVG from '../../images/logo1.svg';

export const Navigation: FC = () => {

  const { address, isConnected } = useAccount();
  const { data } = useBalance({ address });

  return(
    <nav className="w-full h-24 flex justify-center">
      <div className="w-3/5 flex items-center justify-between">

        <div className="w-28">
          <img src={logoSVG} alt="logo" />
        </div>

        {address ? (
          <div className="text-white flex ">
            <p className="px-4">
              {Number(data?.formatted).toFixed(4)} {data?.symbol}
            </p>
            <p>
              {address.slice(0,4)}...{address.slice(address.length - 4)}
            </p>
          </div>
        ) : null}
      </div>
    </nav>
  )
}