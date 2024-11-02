import React, { useState } from "react";
import { BsChat, BsPersonFillGear, BsSave2 } from "react-icons/bs";
import { FaBell } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import "../App.css";

const Profile = ({ updateParentForm }) => {
  const [profileData, setProfileData] = useState({
    profileEmail: "",
    profileName: "",
    statusUpdate: "",
    bioInformation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveProfileData = () => {
    updateParentForm(profileData);
  };

  return (
    <div className="w-full h-auto flex flex-col">
      <div className="flex flex-row items-center">
        <img src="" className="h-56 w-48 rounded-full border-2 border-teal-400 m-2 mt-3 mb-4 shadow-lg" />
        <div className="flex flex-col ml-6">
          <input type="file" name="profileImage" id="profileImage" />
        </div>
      </div>
      <div className="w-full h-auto bg-transparent mt-1 mb-2 flex flex-col pl-4">
        <label htmlFor="profileName" className="text-sm text-orange-500 font-thin font-sans">
          Profile Name
        </label>
        <input
          type="text"
          name="profileName"
          placeholder="Profile name"
          className="h-9 w-5/6 pl-6 text-sm rounded-md placeholder:text-white/50 text-orange-300/80 bg-slate-400/10 border-none outline-none shadow-md hover:shadow-teal-400"
          value={profileData.profileName}
          onChange={handleChange}
        />
      </div>
      <div className="w-full h-auto bg-transparent mt-1 mb-2 flex flex-col pl-4">
        <label htmlFor="profileEmail" className="text-sm text-orange-500 font-thin font-sans">
          User-email
        </label>
        <input
          type="email"
          name="profileEmail"
          placeholder="User email"
          className="h-9 w-5/6 pl-6 text-sm rounded-md placeholder:text-white/50 text-orange-300/80 bg-slate-400/10 border-none outline-none shadow-md hover:shadow-teal-400"
          value={profileData.profileEmail}
          onChange={handleChange}
        />
      </div>
      <div className="w-full h-auto bg-transparent mt-1 mb-2 flex flex-col pl-4">
        <label htmlFor="statusUpdate" className="text-sm text-orange-500 font-thin font-sans">
          Recent status
        </label>
        <input
          type="text"
          name="statusUpdate"
          placeholder="Status update"
          className="h-9 w-5/6 pl-6 text-sm rounded-md placeholder:text-white/50 text-orange-300/80 bg-slate-400/10 border-none outline-none shadow-md hover:shadow-teal-400"
          value={profileData.statusUpdate}
          onChange={handleChange}
        />
      </div>
      <div className="w-full h-auto bg-transparent mt-1 mb-2 flex flex-col pl-4">
        <label htmlFor="bioInformation" className="text-sm text-orange-500 font-thin font-sans">
          Update Bio
        </label>
        <textarea
          name="bioInformation"
          placeholder="Update your bio information"
          className="h-56 w-5/6 pl-6 text-sm rounded-md placeholder:text-white/50 text-orange-300/80 bg-slate-400/10 border-none outline-none shadow-md hover:shadow-teal-400 text-area"
          value={profileData.bioInformation}
          onChange={handleChange}
        />
      </div>
      <button onClick={saveProfileData} className="mt-4 bg-blue-500 w-44 h-auto text-white p-2 rounded-md flex items-center justify-center">
        Save Profile Data
      </button>
    </div>
  );
};

const Account = ({ parentForm, updateParentForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateParentForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-auto flex flex-col p-4">
      <h2 className="text-2xl font-semibold text-white mb-4">Account Settings</h2>
      <div className="w-full h-auto bg-transparent mt-1 mb-2 flex flex-col pl-4">
        <label htmlFor="accountUsername" className="text-sm text-orange-500 font-thin font-sans">Username</label>
        <input
          type="text"
          name="accountUsername"
          placeholder="Username"
          className="h-9 w-5/6 pl-6 text-sm rounded-md placeholder:text-white/50 text-orange-300/80 bg-slate-400/10 border-none outline-none shadow-md hover:shadow-teal-400"
          onChange={handleChange}
        />
      </div>
      <div className="w-full h-auto bg-transparent mt-1 mb-2 flex flex-col pl-4">
        <label htmlFor="accountPassword" className="text-sm text-orange-500 font-thin font-sans">Password</label>
        <input
          type="password"
          name="accountPassword"
          placeholder="Password"
          className="h-9 w-5/6 pl-6 text-sm rounded-md placeholder:text-white/50 text-orange-300/80 bg-slate-400/10 border-none outline-none shadow-md hover:shadow-teal-400"
          onChange={handleChange}
        />
      </div>
      <div className="w-full h-auto bg-transparent mt-1 mb-2 flex flex-col pl-4">
        <label htmlFor="accountSecurityQuestion" className="text-sm text-orange-500 font-thin font-sans">Security Question</label>
        <input
          type="text"
          name="accountSecurityQuestion"
          placeholder="Security Question"
          className="h-9 w-5/6 pl-6 text-sm rounded-md placeholder:text-white/50 text-orange-300/80 bg-slate-400/10 border-none outline-none shadow-md hover:shadow-teal-400"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const Chat = ({ parentForm, updateParentForm }) => {
  const [onlineStatus,setOnlineStatus]=useState(false)
  const [enableChat,setEnableChat] = useState(false)
  const handleChange = (e) => {
    const { name, checked } = e.target;
    updateParentForm((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  return (
    <div className="w-full h-auto flex flex-col p-4 bg-white/5 backdrop-blur-md rounded-lg shadow-xl mt-2">
      <h2 className="text-2xl font-semibold text-white mb-4">Chat Settings</h2>
      
      <div className="mb-4 flex items-center">
        <label className="flex items-center cursor-pointer w-full">
          <input
            type="checkbox"
            name="enableChatNotifications"
            checked={enableChat}
            className="hidden"
            onChange={(e)=>{handleChange(e);setEnableChat(prevValue => !prevValue)}}
          />
          <span
            className={`${
              enableChat ? "bg-orange-500" : "bg-gray-300"
            } w-10 h-5 rounded-full relative inline-block transition-colors duration-300`}
          >
            <span
              className={`${
                enableChat ? "translate-x-5" : "translate-x-0"
              } inline-block w-5 h-5 bg-white rounded-full transform transition-transform duration-300`}
            ></span>
          </span>
          <span className="ml-3 text-lg text-gray-700">
            {enableChat ? "Chat Notifications Enabled" : "Enable Chat Notifications"}
          </span>
        </label>
      </div>

      <div className="mb-4 flex items-center">
        <label className="flex items-center cursor-pointer w-full">
          <input
            type="checkbox"
            name="showOnlineStatus"
            checked={onlineStatus}
            className="hidden"
            onChange={(e)=>{
              handleChange(e);
              setOnlineStatus(prevValue=>!prevValue)
            }}
          />
          <span
            className={`${
              onlineStatus ? "bg-orange-500" : "bg-gray-300"
            } w-10 h-5 rounded-full relative inline-block transition-colors duration-300`}
          >
            <span
              className={`${
                onlineStatus ? "translate-x-5" : "translate-x-0"
              } inline-block w-5 h-5 bg-white rounded-full transform transition-transform duration-300`}
            ></span>
          </span>
          <span className="ml-3 text-lg text-gray-700">
            {onlineStatus ? "Online Status Visible" : "Show Online Status"}
          </span>
        </label>
      </div>
    </div>
  );
};

const Notifications = ({ updateParentForm }) => {
  const [enableMail,setEnableMail] = useState(true)
  const [enableSMS,setEnableSMS] = useState(true)
  const handleChange = (e) => {
    const { name, checked } = e.target;
    updateParentForm((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  return (
    <div className="w-full h-auto flex flex-col p-4 bg-white/5 backdrop-blur-md rounded-lg shadow-2xl mt-2">
      <h2 className="text-2xl font-semibold text-white">Notification Settings</h2>

      <div className="mb-4 flex items-center">
        <label className="flex items-center cursor-pointer w-full">
          <input
            type="checkbox"
            name="emailNotifications"
            checked={enableMail}
            className="hidden"
            onChange={(e)=>{handleChange(e); setEnableMail(prevValue => !prevValue) }}
          />
          <span
            className={`${
              enableMail ? "bg-orange-500" : "bg-gray-300"
            } w-10 h-5 rounded-full relative inline-block transition-colors duration-300`}
          >
            <span
              className={`${
                enableMail ? "translate-x-5" : "translate-x-0"
              } inline-block w-5 h-5 bg-white rounded-full transform transition-transform duration-300`}
            ></span>
          </span>
          <span className="ml-3 text-lg text-gray-700">
            {enableMail ? "Email Notifications On" : "Enable Email Notifications"}
          </span>
        </label>
      </div>

      <div className="mb-4 flex items-center">
        <label className="flex items-center cursor-pointer w-full">
          <input
            type="checkbox"
            name="smsNotifications"
            checked={enableSMS}
            className="hidden"
            onChange={(e)=>{handleChange(e);setEnableSMS(prevValue=>!prevValue)}}
          />
          <span
            className={`${
              enableSMS ? "bg-orange-500" : "bg-gray-300"
            } w-10 h-5 rounded-full relative inline-block transition-colors duration-300`}
          >
            <span
              className={`${
                enableSMS ? "translate-x-5" : "translate-x-0"
              } inline-block w-5 h-5 bg-white rounded-full transform transition-transform duration-300`}
            ></span>
          </span>
          <span className="ml-3 text-lg text-gray-700">
            {enableSMS ? "SMS Notifications Active" : "Enable SMS Notifications"}
          </span>
        </label>
      </div>
    </div>
  );
};





const Setting = () => {
  const [parentForm, setParentForm] = useState({
    profileEmail: "",
    profileName: "",
    statusUpdate: "",
    bioInformation: "",
  });

  const updateParentForm = (data) => {
    setParentForm(data);
    console.log("Updated parent form:", data);
  };

  const [children, setChildren] = useState(<Profile updateParentForm={updateParentForm} />);

  return (
    <div className="w-inherit bg-transparent flex items-center justify-center" style={{ height: "calc(100vh - 54px)", width: "full" }}>
      <div className="w-full h-full bg-transparent flex flex-row">
        <div className="w-48 h-full bg-white/10 backdrop-blur-md flex flex-col">
          <button
            className="bg-gray-400/10 w-full h-auto mt-1 mb-1 flex items-center p-2 pl-3"
            onClick={() => setChildren(<Profile updateParentForm={updateParentForm} />)}
          >
            <BsPersonFillGear className="mr-2 text-2xl text-orange-500" />
            <article className="ml-1 text-lg text-white">Profile</article>
          </button>
          <button
            className="bg-gray-400/10 w-full h-auto mt-1 mb-1 flex items-center p-2 pl-3"
            onClick={() => setChildren(<Account parentForm={parentForm} updateParentForm={updateParentForm} />)}
          >
            <FiSettings className="mr-2 text-2xl text-orange-500" />
            <article className="ml-1 text-lg text-white">Account</article>
          </button>
          <button
            className="bg-gray-400/10 w-full h-auto mt-1 mb-1 flex items-center p-2 pl-3"
            onClick={() => setChildren(<Chat parentForm={parentForm} updateParentForm={updateParentForm} />)}
          >
            <BsChat className="mr-2 text-2xl text-orange-500" />
            <article className="ml-1 text-lg text-white">Chat</article>
          </button>
          <button
            className="bg-gray-400/10 w-full h-auto mt-1 mb-1 flex items-center p-2 pl-3"
            onClick={() => setChildren(<Notifications parentForm={parentForm} updateParentForm={updateParentForm} />)}
          >
            <FaBell className="mr-2 text-2xl text-orange-500" />
            <article className="ml-1 text-lg text-white">Notifications</article>
          </button>
        </div>
        <div className="h-full w-full bg-white/10 backdrop-blur-md pl-4 pr-4 overflow-y-auto">
          <form className="flex flex-col">
            {children}
            <button type="submit" className="mt-4 bg-blue-500 w-44 h-auto text-white p-2 rounded-md flex items-center justify-center">
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
