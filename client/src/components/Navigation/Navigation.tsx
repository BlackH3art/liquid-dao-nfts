import { FC } from "react";
import logoSVG from '../../images/logo1.svg';

export const Navigation: FC = () => {

  return(
    <nav className="w-full h-24 flex justify-center">
      <div className="w-3/5 flex items-center justify-between">

        <div className="w-28">
          <img src={logoSVG} alt="logo" />
        </div>

        <div className="text-white">
          <p>
            0x..ff23f
          </p>
        </div>
      </div>
    </nav>
  )
}