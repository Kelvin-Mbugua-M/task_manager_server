import React ,{} from "react";
import { NavLink } from "react-router-dom";
import {
  Archived,
  Chat,
  Comment,
  Read,
  Reminder,
  Unread,
} from "../Components/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { updateDisplay } from "../redux/notificationSlice";
const Notifications = () => {
  const notificationToDisplay = useSelector((state)=>state.notification.currentDisplay)
  console.log(notificationToDisplay)
  const dispatch = useDispatch()
  const thisp = 'this'
  return (
    <div
      className="w-full flex items-center justify-center bg-transparent overflow-hidden"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <div className="bg-gray-700/20 backdrop-blur-md rounded-sm w-[500px] h-5/6 p-2 pl-4 shadow-md">
      <div className="w-full h-12 mb-4 bg-gray-700/30 backdrop-blur-sm flex items-center justify-between">
        <NavLink to='/notification/unread' className={({isActive})=>isActive?"h-full w-auto bg-gray-950/20 shadow-lg rounded-md text-white":"h-full w-auto  bg-gray-700/20 rounded-sm transition-all text-slate-400"} ><div className="h-full w-32 flex items-center justify-center text-inherit">read</div></NavLink>
        <NavLink to='/notification/read-messages' className={({isActive})=>isActive?"h-full w-auto bg-gray-950/20 rounded-md text-white":"h-full w-auto  bg-gray-700/20 rounded-sm transition-all text-slate-400"} ><div className="h-full w-32 flex items-center justify-center text-inherit">unread</div></NavLink>
        <NavLink to='/notification/archived-messages' className={({isActive})=>isActive?"h-full w-auto bg-gray-950/20 rounded-md text-white":"h-full w-auto  bg-gray-700/20 rounded-sm transition-all text-slate-400"} ><div className="h-full w-32 flex items-center justify-center text-inherit">archive</div></NavLink>
      </div>
      </div>
    </div>
  );
};

export default Notifications;
