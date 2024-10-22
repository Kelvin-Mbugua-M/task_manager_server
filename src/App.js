import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { CatchRouteAll, Navigation, RouteCatcherAll } from "./Components";
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { changeInterfaceState } from "./redux/interfaceSlice";
import { Chat, Home, Notifications, Schedule,Progress,Projects, Setting ,SignUp ,SignIn} from "./pages";

const App = () => {
  const dimension = useSelector((state) => state.interface.dimension);
  const dispatch = useDispatch();
  const link = useParams()
  const notificationRoutes = {link:['unread','read-messages','archived-messages']}
  const navigationMemory = useMemo(() => {
    return <Navigation />;
  }, [dimension]);
  return (
    <BrowserRouter>
      <div className="h-screen w-screen bg-gray-800 relative overflow-hidden flex body">
        {dimension == true ? (
          <div className="h-screen w-[250px] bg-transparent shadow-md">
            {navigationMemory}
          </div>
        ) : (
          <div className="w-0 hidden"></div>
        )}
        <div
          className="flex flex-col w-full h-auto"
          style={
            dimension ? { width: "calc(100vw - 250px)" } : { width: "100vw" }
          }
        >
          <div className="flex flex-col w-full h-auto">
            <div className=" mt-4 ">
              <button
                className="text-white h-[32px]"
                onClick={() => dispatch(changeInterfaceState())}
              >
                <CgMenu className="mt-3 ml-4" />
              </button>
            </div>
          </div>
          <div className="text-white body-router">
           <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Home />} />
            <Route exact path="/schedule" element={<Schedule/>}/>
            <Route exact path="/chats" element={<Chat />} />
            <Route exact path="/notification/" element={<Notifications />} />
            
            {notificationRoutes.link.map((value,index)=>(
              <Route exact path={`/Notification/${value}`}element={<Notifications />} key={index} />
            ))}
            <Route exact path="/progress" element={<Progress/>}/>
            <Route exact path="/projects" element={<Projects/>}/>
            <Route exact path="/settings" element={<Setting/>}/>
            <Route exact path="/sign-up" element={<SignUp/>}/>
            <Route exact path="/sign-in" element={<SignIn/>} />
            <Route exact path="/error" element={<CatchRouteAll/>} />
            <Route path="*" element={<RouteCatcherAll/>} />
          </Routes> 
          </div>
          
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
