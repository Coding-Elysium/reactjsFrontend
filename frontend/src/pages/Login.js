import React from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Car1 from "../assets/loginImage/Car1.png";
import Car2 from "../assets/loginImage/Car2.png";
import Car3 from "../assets/loginImage/Car3.png";
import Car4 from "../assets/loginImage/Car4.png";
const Login = () => {
  return (
    <div className="p-8 h-screen flex">
      <div className="w-[539px] h-full bg-white rounded-[16px] px-[110px] pt-[60px] pb-[35px]">
        <div className="flex flex-col justify-between">
          <div className="top-[100px] mb-[26px]">
            <p className="font-semibold text-[40px]">Login</p>
          </div>
          <div>
            <p className="font-semibold text-[16px] mb-[40px]">
              Please enter your name and password
            </p>
          </div>
          <div>
            <TextField label="Enter your email" height={40} type="email" />
            <TextField
              label="Enter your password"
              height={40}
              type="password"
            />
          </div>
          <div className="mt-8">
            <Button text="Login" height={48} textSize={14} />
          </div>
          <div className="flex justify-center mt-[40px] mb-8">
            <p className="text-primaryColor text-[12px] underline">
              Forget Password
            </p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] bg-black w-[200px]"></div>
            <p className="text-gray-600 text-[12px]">or</p>
            <div className="h-[1px] bg-black w-[200px]"></div>
          </div>
          <div></div>
          <Button
            backgroundColor="transparent"
            textColor="black"
            text="Sign Up"
            textSize={12}
            height={48}
          />
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="absolute flex justify-center w-full gap-10">
          <div className="mt-12">
            <img className="w-[200] h-[300px] mb-5" src={Car3} alt="" />
            <img className="w-[200] h-[300px]" src={Car2} alt="" />
          </div>
          <div className="bottom-0">
            <img className="w-[200] h-[300px] mb-5" src={Car1} alt="" />
            <img className="w-[200] h-[300px]" src={Car4} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="mb-[50px]">
            <p className="text-[40px] font-bold">Explore Cars with Cars</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>One world, Planning</p>
            <p>Carspancy help you to plan</p>
            <p>Investment your car transparency help your</p>
            <p>Proposal easy to fill boards and</p>
            <p>compare it</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
