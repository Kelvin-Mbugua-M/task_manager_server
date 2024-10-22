import React, { Suspense } from "react";
import { BiHome } from "react-icons/bi";
import { NavLink ,useNavigate} from "react-router-dom";
import './err.css'
const CatchRouteAll = () => {
  const navigate= useNavigate()
  return (
    <Suspense>
      <div
        className='.error w-full flex items-center'
        style={{ 
          height: "calc(100vh - 46px)", 
          // backgroundImage: "url('../images/rose.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }}
      >
        <div className="w-full h-auto">
          <article className="ml-4 font-bold text-orange-500 text-3xl">
            This page was mutilated
          </article>
          <article className="text-white text-lg font-light font-sans ml-6 mt-6">
            Make a change before you do too
          </article>
          <NavLink to="/">
            <button className="w-44 h-12 mt-4 border-[1px] ml-6 border-orange-500 flex  items-center justify-center hover:rounded-md hover:bg-orange-500 hover:transition-all" onClick={()=>{navigate('/')}}>
              {" "}
              <span>
                <BiHome className="text-white text-2xl mr-4" />
              </span>
              <span className="text-xl">Go home</span>
            </button>
          </NavLink>
        </div>
      </div>
    </Suspense>
  );
};

export default CatchRouteAll;
