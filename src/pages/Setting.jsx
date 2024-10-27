import React, { useState } from "react";

import { BsChat, BsPersonFillGear, BsSave2 } from "react-icons/bs";

import { FaBell } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import "../App.css";
const Setting = () => {
  const [trackForm, setTrackForm] = useState({
    profileEmail: "",
    profileName: "",
    statusUpdate: "",
    bioInformation: "",
  });
  const updateSettings = (e) => {
    setTrackForm({ ...trackForm, [e.target.name]: [e.target.value] });
  };
  const Account = () => {
    return <div>Account</div>;
  };
  const Chat = () => {
    return (<div ></div>);
  };
  const Notifications = () => {
    return <div></div>;
  };
  const Profile = () => {
    return (
      <div className="w-full h-auto flex flex-col">
        <div className="flex flex-row items-center">
          <img
            src=""
            className="h-56 w-48 rounded-full border-2 border-teal-400 m-2 mt-3 mb-4 shadow-lg"
          />
          <div className="flex flex-col ml-6">
            <input type="file" name="" id="" placeholder="file" />
          </div>
        </div>
        <div className="w-full h-auto bg-transparent mt-1 mb-2 flex flex-col pl-4">
          <label
            htmlFor="profileName"
            className="text-sm text-orange-500 font-thin font-sans"
          >
            Profile Name
          </label>
          <input
            type="text"
            name="profileName"
            id="profileName"
            placeholder="Profile name"
            className="h-9 w-5/6 pl-6 text-sm rounded-md placeholder:text-white/50 text-orange-300/80 bg-slate-400/10 border-none outline-none shadow-md hover:shadow-teal-400"
            value={trackForm.profileName}
            onChange={(e) => updateSettings(e)}
          />
        </div>

        <div className="w-full h-auto bg-transparent mt-1 mb-2 flex flex-col pl-4">
          <label
            htmlFor="profileEmail"
            className="text-sm text-orange-500 font-thin font-sans"
          >
            User-email
          </label>
          <input
            type="email"
            name="profileEmail"
            id="profileEmail"
            placeholder="User email"
            className="h-9 w-5/6 pl-6 text-sm rounded-md placeholder:text-white/50 text-orange-300/80 bg-slate-400/10 border-none outline-none shadow-md hover:shadow-teal-400"
            value={trackForm.profileEmail}
            onChange={(e) => updateSettings(e)}
          />
        </div>
        <div className="w-full h-auto bg-transparent mt-1 mb-2 flex flex-col pl-4">
          <label
            htmlFor=""
            className="text-sm text-orange-500 font-thin font-sans"
          >
            Recent status
          </label>
          <input
            type="text"
            name="statusUpdate"
            id="statusUpdate"
            placeholder="Status update"
            className="h-9 w-5/6 pl-6 text-sm rounded-md placeholder:text-white/50 text-orange-300/80 bg-slate-400/10 border-none outline-none shadow-md hover:shadow-teal-400"
            value={trackForm.statusUpdate}
            onChange={(e) => updateSettings(e)}
          />
        </div>
        <div className="w-full h-auto bg-transparent mt-1 mb-2 flex flex-col pl-4">
          <label
            htmlFor=""
            className="text-sm text-orange-500 font-thin font-sans"
          >
            Update Bio
          </label>
          <textarea
            name="bioInformation"
            id="bioInformation"
            placeholder="Update your bio information"
            className="h-56 w-5/6 pl-6 text-sm rounded-md placeholder:text-white/50 text-orange-300/80 bg-slate-400/10 border-none outline-none shadow-md hover:shadow-teal-400 text-area"
            onChange={(e) => updateSettings(e)}
          />
        </div>
      </div>
    );
  };
  const [children, setChildren] = useState(<Profile />);
  return (
    <div
      className="w-inherit bg-transparent flex items-center justify-center"
      style={{ height: "calc(100vh - 54px)", width: "full" }}
    >
      <div className="w-full h-full bg-transparent flex flex-row">
        <div className="w-48 h-full bg-white/10 backdrop-blur-md flex flex-col">
          <button
            className="bg-gray-400/10 backdrop-blur-lg w-full h-auto mt-1 mb-1 flex items-center p-2 pl-3"
            onClick={() => setChildren(<Profile />)}
          >
            <BsPersonFillGear className="mr-2 text-2xl text-orange-500" />
            <article className="ml-1 text-lg text-white ">Profile</article>
          </button>
          <button
            className="bg-gray-400/10 backdrop-blur-lg w-full h-auto mt-1 mb-1 flex items-center p-2 pl-3"
            onClick={() => setChildren(<Account />)}
          >
            <FiSettings className="mr-2 text-2xl text-orange-500" />
            <article className="ml-1 text-lg text-white ">Account</article>
          </button>
          <button
            className="bg-gray-400/10 backdrop-blur-lg w-full h-auto mt-1 mb-1 flex items-center p-2 pl-3"
            onClick={() => setChildren(<Chat />)}
          >
            <BsChat className="mr-2 text-2xl text-orange-500" />
            <article className="ml-1 text-lg text-white ">Chat</article>
          </button>
          <button
            className="bg-gray-400/10 backdrop-blur-lg w-full h-auto mt-1 mb-1 flex items-center p-2 pl-3"
            onClick={() => setChildren(<Notifications />)}
          >
            <FaBell className="mr-2 text-2xl text-orange-500" />
            <article className="ml-1 text-lg text-white ">
              Notifications
            </article>
          </button>
        </div>
        <div className="h-full w-full bg-white/10 backdrop-blur-md pl-4 pr-4 overflow-y-auto">
          <form className="flex flex-col">
            {children}
            <button
              type="submit"
              className="h-14 w-36 bg-blue-600 flex items-center  ml-4 mt-6 pl-4 rounded-2xl"
            >
              <BsSave2 className="text-2xl text-orange-600 mr-3" />
              <article className="text-lg">Save</article>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
