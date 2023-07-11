import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { MdGroup, MdGroups } from "react-icons/md";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Single */}
        <div className="w-full shadow-xl flex flex-col p4 my-12 rounded-lg hover:scale-105 duration-300">
          <BsPersonFill
            className="w-20 mx-auto mt-[-3rem] "
            size={100}
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trial</button>
        </div>

        {/* Double */}
        <div className="w-full shadow-xl bg-slate-100 flex flex-col p4 md:my-0 my-12 rounded-lg hover:scale-105 duration-300">
          <MdGroup
            className="w-20 mx-auto mt-[-3rem] "
            size={100}
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]">Start Trial</button>
        </div>

        {/* Triple */}
        <div className="w-full shadow-xl flex flex-col p4 my-12 rounded-lg hover:scale-105 duration-300">
          <MdGroups
            className="w-20 mx-auto mt-[-3rem] "
            size={100}
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trial</button>
        </div>
        
      </div>
    </div>
  );
}

export default Cards;
