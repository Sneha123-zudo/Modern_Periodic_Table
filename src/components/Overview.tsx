import React, { useState } from "react";
import { Overview } from "@/types/ElementTypes";
import { MdContentCopy, MdCheck } from "react-icons/md";

const Overview = ({ latin_name, discovery, discoverer }: Overview) => {
  const [isCopying, setIsCopying] = useState({
    latin_name: false,
    discoverer: false,
    discovery: false,
  });
  const handleCopy = (value: string, property: string) => {
    setIsCopying({ ...isCopying, [property]: true });
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopying({ ...isCopying, [property]: false });
    }, 500);
  };
  return (
    <div className="w-full flex flex-col justify-start items-start p-4 text-[#cfbbbb] bg-[#1b1a1a] shadow-md rounded-sm">
      <h1 className="text-xl">Overview</h1>
      <div className="flex flex-col w-full justify-start items-start">
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%]">Latin Name</p>
          <div className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{latin_name}</p>
            <button onClick={() => handleCopy(latin_name, "latin_name")}>
              {!isCopying.latin_name ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%]">Discoverer</p>
          <div className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{discoverer}</p>
            <button onClick={() => handleCopy(discoverer, "discoverer")}>
              {!isCopying.discoverer ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-full mt-3">
          <p className="mr-5 pr-2 py-1 rounded-[4px] w-[25%]">Discovery</p>
          <div className="w-[75%] border border-[#cfbbbb] px-2 py-1 rounded-[4px] flex justify-between items-center select-none">
            <p>{discovery}</p>
            <button onClick={() => handleCopy(discovery.toString(), "discovery")}>
              {!isCopying.discovery ? (
                <MdContentCopy />
              ) : (
                <MdCheck className="text-green-500" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
