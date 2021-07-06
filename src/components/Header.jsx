import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div
          className="hidden sm:flex  hover:bg-yellow-500 items-center
          bg-yellow-400  h-10 rounded-md flex-grow cursor-pointer"
        >
          <input
            type="text"
            className="p-2 w-6 h-full flex-grow flex-shrink 
            rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="p-4 h-14 font-bold text-base" />
        </div>
        <div
          className="text-white flex items-center 
        text-xs space-x-6 mx-6 whitespace-nowrap"
        >
          <div className="link">
            <p>Hello @DevGbolade</p>
            <p className="font-extrabold md:text-sm">Account & list</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& orders </p>
          </div>
          <div className="link relative flex items-center">
            <span
              className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 
            rounded-full text-black text-center font-bold"
            >
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-amazon_blue-light space-x-3 p-2 pl-6 items-center 
      flex text-white text-sm"
      >
        <p className="flex link items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline">Electronics</p>
        <p className="link hidden lg:inline">Food & Groceries</p>
        <p className="link hidden lg:inline">Prime</p>
        <p className="link hidden lg:inline">Buy Again</p>
        <p className="link hidden lg:inline">Shopper toolkit</p>
        <p className="link hidden lg:inline">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
