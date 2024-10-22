import React, { useState } from "react";
import { BsEyeFill, BsGoogle } from "react-icons/bs";
import { GrApple } from "react-icons/gr";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [signData, setSignData] = useState({
    passwordHidden: true,
    firstName: "",
    lastName: "",
    mail: "",
    password: "",
  });
  const handleData = (e) => {
    setSignData({ ...signData, [e.target.name]: [e.target.value] });
  };
  const handleShowPassword = (e) => {
    e.preventDefault()
    const currentValue = signData.passwordHidden;
    setSignData({ ...signData, passwordHidden: !currentValue });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/sign/up`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "json tokens here",
        },
        body: JSON.stringify(signData),
      });
      if (!response.ok) {
        console.log("not submitted");
      }
      if (response.ok) {
        console.log("submission successful");
      }
    } catch (err) {
      console.log("err");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="w-full flex items-center justify-center bg-transparent "
        style={{ height: "calc(100vh - 56px)" }}
      >
        <div className="bg-gray-700/30 backdrop-blur-md rounded-sm w-[500px] h-5/6 p-2 pl-4 shadow-md">
          {" "}
          <article className="text-center text-3xl mt-2 text-white font-medium capitalize">
            Create account
          </article>
          <div className="flex items-center pl-2">
            <article className="text-sm text-gray-400">
              Have an account ?
            </article>
            <Link
              to={"/sign-in"}
              className="text-blue-900 font-thin no-underline ml-2 cursor-pointer "
            >
              Log in
            </Link>
          </div>
          <div className="w-full pl-2 pr-2 flex justify-around">
            <input
              type="text"
              className="outline-none w-[48%] h-10 pl-2 text-white/80 bg-gray-800/30 placeholder:text-white/45 shadow-md hover:shadow-md hover:shadow-teal-300/80 "
              value={signData.firstName}
              name="firstName"
              placeholder="first name"
              onChange={(e) => handleData(e)}
            />
            <input
              type="text"
              className="outline-none w-[48%] h-10 pl-2 text-white/80 bg-gray-800/30 placeholder:text-white/45 shadow-md hover:shadow-md hover:shadow-teal-300/80 "
              name="lastName"
              value={signData.lastName}
              onChange={(e) => handleData(e)}
              placeholder="last name"
            />
          </div>
          <div className="w-full pr-3 pl-3">
            <input
              type="email"
              className="w-full mt-2 mb-2 pl-2 h-10 text-white/80 bg-gray-800/30 placeholder:text-white/45 shadow-md hover:shadow-md hover:shadow-teal-300/80 outline-none"
              name="mail"
              value={signData.mail}
              onChange={(e) => handleData(e)}
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="w-full pr-3 pl-3">
            <input
              type={signData.passwordHidden === true ? "password" : "text"}
              className="w-full mt-2 mb-2 pl-2 h-10 text-white/80 bg-gray-800/30 placeholder:text-white/45 shadow-md hover:shadow-md hover:shadow-teal-300/80 outline-none"
              name="password"
              value={signData.password}
              onChange={(e) => handleData(e)}
              placeholder="enter password"
            />
          </div>
          <div className="w-full pr-3 pl-3 flex justify-around">
            <div className="mt-2 mb-3">
              <button
                className="outline-none border-none bg-transparent"
                onClick={(e)=>handleShowPassword(e)}
              >
                <BsEyeFill className="active:text-teal-400 text-xl" />
              </button>
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" name="" id="" />
              <article>I agree to terms and conditions</article>
            </div>
          </div>
          <div className="w-full pr-3 pl-3">
            <button
              type="submit"
              className="w-full h-12 bg-blue-600 rounded-sm text-center text-lg  border-none outline-none"
            >
              create account
            </button>
          </div>
          <div className="w-full h-4 pr-3 pl-3 mt-4 mb-2 flex flex-row items-center justify-center">
            <hr className="h-1 w-48 mr-2 border-gray-700/40" />
            <article className="text-gray-700/30 text-sm">or</article>
            <hr className="h-1 w-48 ml-2 border-gray-700/40" />
          </div>
          <div className="w-full pl-2 pr-2 flex justify-around">
            <button className="outline-none w-[48%] h-10 pl-2 border-[.5px] rounded-lg hover:border-teal-300/70 border:text-white/80 bg-gray-800/30 shadow-md hover:shadow-md hover:shadow-teal-300/80 text-center flex items-center justify-center ">
              <BsGoogle />
            </button>
            <button className="outline-none w-[48%] h-10 pl-2 border-[.5px] rounded-lg hover:border-teal-300/70 border:text-white/80 bg-gray-800/30 shadow-md hover:shadow-md hover:shadow-teal-300/80 text-center flex items-center justify-center">
              <GrApple />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
