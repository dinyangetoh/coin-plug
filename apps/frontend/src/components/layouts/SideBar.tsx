import React from 'react';
import Image from "next/image";
import coinPlugLogo from '../../../public/images/coin-plug-logo.svg'

const SideBar = () => {
  return (
    <div className="bg-white h-screen drop-shadow-2xl">
      <div className="w-full flex items-center">
        <div className="flex items-center text-white p-3 pl-6 flex-auto">
          <Image className="mx-auto w-full" src={coinPlugLogo}
                 alt="Coin plug logo"
                 width={200}
                 height={70}
          >
          </Image>
        </div>
      </div>
      <div className="w-full block flex lg:flex lg:items-end lg:w-auto mt-3 pl-4">
        <ul>
          <li>Dashboard</li>
          <li>Wallet</li>
          <li>Transactions</li>
        </ul>
      </div>

    </div>
  );
};

export default SideBar;
