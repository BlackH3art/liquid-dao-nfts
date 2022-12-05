import { FC } from "react";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { DaoSection } from "./components/DaoSection/DaoSection";
import { MintSection } from "./components/MintSection/MintSection";
import { Navigation } from "./components/Navigation/Navigation";
import { RandomSection } from "./components/RandomSection/RandomSection";


export const App: FC = () => {

  return (
    <div className="h-[100vh]">

      <ToastContainer />

      <div className="background-container w-full h-full fixed bg-top bg-cover bg-no-repeat"></div>
      
      <div className="absolute w-full bg-[rgba(16,16,16,.36)]">
        <Navigation />
        <MintSection />
        <DaoSection />
        <RandomSection />
      </div>

    </div>
  )
}

