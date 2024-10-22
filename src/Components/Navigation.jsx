import React, { useState, useEffect } from "react";
import {
  BiCalendar,
  BiCross,
  BiFolder,
  BiHome,
  BiLineChart,
  BiLogo99Designs,
  BiMicrophone,
} from "react-icons/bi";
import { CgClose, CgSearch } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeInterfaceState } from "../redux/interfaceSlice";
import { toggleLoggedInState } from "../redux/signSlice";
import { dashBoardLinks ,dashBoardEssentialLinks } from "../data/data";
const Navigation = () => {
  const checkSign = useSelector((state)=>state.userAuthCheck.userLoggedIn)
  const dispatch = useDispatch(); 
  return (
    <div className="h-full w-full relative">
      <div className="relative">
        <div className="w-full h-screen flex flex-col items-center relative">
          <div className="relative w-full h-auto m-0 mb-6 mt-4 pr-2 pl-2">
            <button
              className=" absolute right-2 top-3 text-white"
              onClick={() => dispatch(changeInterfaceState())}
            >
              <CgClose />
            </button>
          </div> 
          <div className="h-auto w-[70%] flex items-center ">
            <span className="text-5xl text-orange-500"><BiLogo99Designs/></span>
            <span className="text-3xl text-orange-400 font-thin font-mono">Larvey</span>
          </div>
          <div className="flex mt-6 mb-3 items">
            <span className="ml-1">
              <CgSearch className="text-white bg-gray-700 h-[32px] rounded-l-md" />
            </span>

            <input
              type="text"
              name=""
              id=""
              className="border-none outline-none bg-gray-700 h-32px rounded-r-md pl-2 text-slate-200 caret-amber-50"
            />
          </div>
          <div className="h-auto w-[90%] p-2 pb-3 bg-gray-700/30 rounded-md flex flex-col place-self-center border-x-white">
            {dashBoardLinks.map((element, index) => (
              <NavLink
                to={`/${element.name}`}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "flex bg-orange-400 items-center pl-3 rounded-l-3xl rounded-r-3xl mt-2 pt-1 pb-1"
                    : "flex bg-transparent items-center pl-3 rounded-l-3xl rounded-r-3xl mt-2 pt-1 pb-1 "
                }
              >
                <span className="text-white text-lg dark:text-white light:text-black">
                  {element.icon}
                </span>
                <span className="text-white ml-4 text-xl">{element.name}</span>
              </NavLink>
            ))}
          </div>
          <div className="h-auto w-[90%] p-2 pb-3 bg-gray-700/30 rounded-md flex flex-col place-self-center border-x-white mt-2">
          {dashBoardEssentialLinks.map((element, index) => (
              <NavLink
                to={`/${element.name}`}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "flex bg-orange-400 items-center pl-3 rounded-l-3xl rounded-r-3xl mt-2 pt-1 pb-1"
                    : "flex bg-transparent items-center pl-3 rounded-l-3xl rounded-r-3xl mt-2 pt-1 pb-1 "
                }
              >
                <span className="text-gray-500 text-lg dark:text-white light:text-black">
                  {element.icon}
                </span>
                <span className="text-white ml-4 text-xl">{element.name}</span>
                <span className="text-white ml-4 text-sm font-thin p-1 bg-slate-900/30 rounded-full">8</span>
              </NavLink>
            ))}
          </div>
          <div className=" h-11 w-[90%] bg-transparent absolute bottom-4 left-3">
            {checkSign==true?(<NavLink to="/sign-up" className={({ isActive }) =>
                  isActive
                    ? "h-full w-full border-orange-400 border-2 hover:bg-orange-400 transition-colors shadow-md text-center text-xl text-white font-normal rounded-l-3xl rounded-r-3xl mt-2 pt-2 pb-2"
                    : "h-full w-full border-blue-400 border-2 hover:bg-blue-400 transition-colors shadow-md text-center text-xl text-white font-normal rounded-l-3xl rounded-r-3xl mt-2 pt-2 pb-2"
                }><button className="h-full w-full outline-none border-none bg-transparent">Log in</button></NavLink>):(<button className="h-full w-full border-orange-400 border-2 hover:bg-orange-400 transition-colors shadow-md text-center text-xl text-white font-normal rounded-l-3xl rounded-r-3xl mt-2 pt-2 pb-2" onClick={()=>dispatch(toggleLoggedInState())}>Log Out</button>)}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navigation;
