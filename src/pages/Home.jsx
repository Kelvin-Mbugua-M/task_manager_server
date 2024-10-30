import React, { useEffect, useState } from "react";
import { months } from "../data/data";
import { FaHands } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";

const Home = () => {
  const [homeData, setHomeData] = useState({
    date: "",
    day: "00",
    month: "01",
    year: "1970",
    hour: 10,
    minute: 10,
  });
  const [homeInputs, setHomeInputs] = useState({
    homeRange: 0,
  });
  const handleInputsUpdate = (e) => {
    setHomeInputs({ ...homeInputs, [e.target.name]: [e.target.value] });
  };
  setTimeout(() => {
    const todayDate = new Date();
    setHomeData({
      ...homeData,
      date: todayDate.getDate(),
      month: todayDate.getMonth(),
      year: todayDate.getFullYear(),
      hour: todayDate.getHours(),
      minute: todayDate.getMinutes(),
    });
  }, 1000);

  return (
    <div className="h-auto w-screen">
      <div className="w-full flex">
        <div>
          <div className="h-36 w-36 p-2 m-4 rounded-md border-x-white bg-gray-700/30 flex flex-col shadow-md">
            <article className="text-sm text-white font-thin text-center">
              New tasks
            </article>
            <article className="text-2xl text-white font-bold text-center">
              67%
            </article>
            <div className="flex w-auto items-center place-self-center mt-1 mb-2">
              <article className="text-orange-400">{homeData.date}</article>
              <article className="ml-1 text-white text-sm font-thin">
                {months[homeData.month]}
              </article>
              <article className="ml-1 text-white text-sm font-thin">
                {homeData.year}
              </article>
            </div>
            <button className="w[90%] h-auto p-1 rounded-2xl border-orange-400/50 border-2 ">
              New task
            </button>
          </div>
          <div className="w-36 h-auto p-2 rounded-md m-4 bg-orange-500 shadow-md">
            <FaHands className="text-white" />
            <article className="text-wrap text-white text-xs font-thin ">
              Log in and invite others to share your work and manage tasks
            </article>
          </div>
        </div>
        <div className="w-48 h-auto p-2 bg-gray-700/30 rounded-md m-4 shadow-md flex flex-col justify-center">
          <div className="w-full h-auto flex items-center justify-between">
            <div>
              <article className="text-xl text-gray-500 font-thin">
                Todays task
              </article>
              <div className="flex">
                <article className="text-sm text-slate-700">
                  Last updated :
                </article>
                <article className="text-sm text-white font-thin">
                  Recently
                </article>
              </div>
            </div>
            <span>
              <BsArrowDownCircle className="text-3xl rotate-2 hover:animate-spin cursor-pointer" />
            </span>
          </div>
          <div className="w-[98%] h-[62%] border-[.5px] border-gray-700/60 mt-2 mb-2 place-self-center rounded-md">
            <div className="flex flex-row w-full h-auto justify-between">
              <article className="m-1 text-sm text-gray-400">
                Task point
              </article>
              <article className="m-1 text-sm text-gray-400">
                {homeData.hour < 10 ? "0" : ""}
                {homeData.hour} {homeData.minute < 10 ? "0" : ""}
                {homeData.minute} hrs
              </article>
            </div>
            <div className="w-full p-1 flex items-center">
              <GiProcessor className="w-auto h-auto p-1 text-4xl rounded-full text-white bg-orange-500 m-1" />

              <div className="h-auto flex items-center p-1">
                <article className="text-wrap text-[10px] text-slate-300">
                  Edit network design
                </article>
                <article className="text-[9px] text-gray-600/50">
                  Low impact
                </article>
              </div>
            </div>
            <div className="w-full h-auto m-0 mt-1">
              <span className="flex items-center text-sm m-0 ml-4">
                <sup className="text-orange-500 text-sm">
                  {homeInputs.homeRange}
                </sup>
                <article className="text-gray-600 text-lg m-0">/</article>
                <sub className="text-[9px] text-white">20</sub>
              </span>
              <span className="w-full h-auto">
                <input
                  type="range"
                  max={20}
                  min={0}
                  name="homeRange"
                  value={homeInputs.homeRange}
                  id=""
                  className="w-full"
                  onChange={(e) => handleInputsUpdate(e)}
                />
              </span>
            </div>
          </div>
          <button className="w-full h-8 border-2 border-orange-500/70 rounded-xl hover:bg-orange-500/90  hover:transition-all">
            Feedback
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
