import React ,{useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { BiLogo99Designs } from "react-icons/bi";
import { GrApple } from "react-icons/gr";
import { BsEyeFill, BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
const SignIn = () => {
  const [signInData ,setSignInData] = useState({
    userEmail:'',
    userPassword:''
  })
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const url = `http://localhost:5000/api/sign/in`
    try{
      const promise = await fetch(url ,{method:'POST' ,headers:{'Content-Type':'application/json',Authorization:'json tokens here'},body:JSON.stringify(signInData)})
    if(!promise.ok){
      console.log('error')
    }
    if(promise.ok){
      console.log(promise)
    }
    }
    catch(err){
      console.log(err)
    }    
  }
  const handleUpdate = (e)=>{
    setSignInData({
      ...signInData,[e.target.name]:[e.target.value]
    })
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div
        className="w-full flex items-center justify-center bg-transparent"
        style={{ height: "calc(100vh - 56px)" }}
      >
        <div className="bg-gray-700/30 backdrop-blur-md rounded-sm w-[500px] h-5/6 p-2 pl-4 shadow-md">
          {" "}
          <article className="text-center text-3xl text-orange-500/80">
            Sign in
          </article>
          <span className="w-full flex items-center justify-center mt-3 mb-2">
            <BiLogo99Designs className="text-5xl text-orange-500" />
            <article className="text-center text-3xl text-orange-500/80 font-thin font-serif ml-2">
              Larvey
            </article>
          </span>
          <input
            type="email"
            name="userEmail"
            value={signInData.userEmail}
            onChange={(e)=>handleUpdate(e)}
            id=""
            className="w-full h-12 rounded bg-gray-900/30 pl-4 border-none outline-none hover:border-[.5px] hover:border-teal-400 shadow-md hover:shadow-teal-400/40 active:border-teal-400 active:shadow-teal-400/40 text-white/60 placeholder:text-white/30 mb-4"
            placeholder="johndoe@gmail.com"
          />
          <input
            type="password"
            name="userPassword"
            value={signInData.userPassword}
            onChange={(e)=>handleUpdate(e)}
            id=""
            className="w-full h-12 rounded bg-gray-900/30 pl-4 border-none outline-none hover:border-[.5px] hover:border-teal-400 shadow-md hover:shadow-teal-400/40 active:border-teal-400 active:shadow-teal-400/40 text-white/60 placeholder:text-white/30 mb-3"
            placeholder="secure passcode"
          />
          <button type="submit" className="w-full h-12 rounded-2xl bg-gray-900/30 flex items-center justify-center">
          <FiLogIn className="text-2xl text-slate-400"/>
          <article className="ml-2 text-slate-400">Sign in with password</article>
          </button>
          <div className="w-full h-4 pr-3 pl-3 mt-4 mb-2 flex flex-row items-center justify-center">
            <hr className="h-1 w-48 mr-2 border-gray-700/40" />
            <article className="text-gray-700/30 text-sm">or</article>
            <hr className="h-1 w-48 ml-2 border-gray-700/40" />
          </div>
          <button className="w-full h-12 rounded-2xl bg-gray-900/30 flex items-center justify-center">
          <BsGoogle className="text-2xl text-slate-400"/>
          <article className="ml-2 text-slate-400">Sign in with google</article>
          </button>
          <button className="w-full h-12 rounded-2xl bg-gray-900/30 flex items-center justify-center mt-2 mb-2">
          <GrApple className="text-2xl mt-2 mb-2 text-slate-400"/>
          <article className="ml-2 text-slate-400">Sign in with apple</article>
          </button>
          <div className="flex items-center m-2 mt-4">
            <article>Don't have an account ?</article>
            <Link to="/sign-up" className="ml-2 text-blue-800">Sign up for free</Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
