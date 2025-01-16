import React from "react";
import heroImg from "../assets/hero.svg";
import { GoDotFill } from "react-icons/go";
import { IoLogIn } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { TbFoldersFilled } from "react-icons/tb";
import { IoIosWallet } from "react-icons/io";
import { PiHandDepositFill } from "react-icons/pi";
import { RiRobot3Fill } from "react-icons/ri";
import { GiTwoCoins } from "react-icons/gi";
import { IoRocketSharp } from "react-icons/io5";
import bgImg from "../assets/bg-foot.svg";
import { ImCheckmark } from "react-icons/im";

const Home = () => {
  return (
    <main>
      <section className="flex items-center justify-between flex-col lg:flex-row md:flex-row w-[90%] mx-auto">
        <div className="lg:w-[45%] md:w-[48%] w-[100%] flex flex-col items-start mb-4">
          <p className="py-4 px-12 border rounded-full font-bold border-skyblue text-skyblue lg:text-[18px] md:text-[18px] text-[14px]">
            Token Deployment Made Easy.
          </p>
          <h1 className="text-Roboto font-bold lg:text-[52px] md:text-[48px] text-[32px] lg:text-left md:text-left text-center">
            Effortlessly Deploy Your Own Tokens on Starknet in Just a Few
            Clicks.
          </h1>
        </div>
        <div className="lg:w-[50%] md:w-[48%] w-[100%] mb-4">
          <img src={heroImg} alt="" />
        </div>
      </section>
      <section className="my-12 bg-[#F7F9FA] py-20">
        <div className="w-[90%] mx-auto">
        <div className="text-center flex flex-col items-center">
          <p className="py-4 px-12 border rounded-full font-bold border-skyblue text-skyblue lg:text-[18px] md:text-[18px] text-[14px]">
            How it Works.
          </p>
          <h2 className="text-Roboto font-bold lg:text-[45px] md:text-[40px] text-[24px]">
            Getting Started is Easy.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row justify-between">
          <div className="lg:w-[32%] md:w-[32%] w-[100%] mb-4">
            <h2 className="lg:text-[100px] md:text-[80px] text-[50px] text-center font-black text-skyblue">
              01
            </h2>
            <div className="flex text-4xl my-4">
              <GoDotFill className="mr-2 text-[#D23D3D]" />
              <GoDotFill className="mr-2 text-[#B7B701]" />
              <GoDotFill className="text-[#30AF02]" />
            </div>
            <div className="bg-white p-4  shadow-3xl rounded-lg lg:h-[340px] md:h-[450px] h-auto">
              <div className="p-4 bg-light text-dark rounded-lg my-4">
                <div className="flex items-center">
                  <div className="bg-dark py-3 px-4 rounded-lg mr-4">
                    <IoLogIn className="bg-dark text-white text-2xl" />
                  </div>
                  <p className="lg:text-[20px] md:text-[20px] text-[18px] font-semibold"> Log in with X</p>
                </div>
              </div>
              <div className="p-4 bg-light text-dark rounded-lg my-4">
                <div className="flex items-center">
                  <div className="bg-dark py-3 px-4 rounded-lg mr-4">
                    <MdExplore className="bg-dark text-white text-2xl" />
                  </div>
                  <p className="lg:text-[20px] md:text-[20px] text-[18px] font-semibold">
                    {" "}
                    Explore subscriptions
                  </p>
                </div>
              </div>
            </div>
            <h2 className="lg:text-[24px] md:text-[24px] text-[20px] my-6 font-semibold">
              Connect your Account
            </h2>
            <p className="text-[#6E6C6C]">
              Start by connecting your X account, then explore the subscription
              options to gain full access to the platform.
            </p>
          </div>
          <div className="lg:w-[32%] md:w-[32%] w-[100%] mb-4">
            <h2 className="lg:text-[100px] md:text-[80px] text-[50px] text-center font-black text-skyblue">
              02
            </h2>
            <div className="flex text-4xl my-4">
              <GoDotFill className="mr-2 text-[#D23D3D]" />
              <GoDotFill className="mr-2 text-[#B7B701]" />
              <GoDotFill className="text-[#30AF02]" />
            </div>
            <div className="bg-white p-4  shadow-3xl rounded-lg lg:h-[340px] md:h-[450px] h-auto">
              <div className="p-4 bg-light text-dark rounded-lg my-4">
                <div className="flex items-center">
                  <div className="bg-dark py-3 px-4 rounded-lg mr-4">
                    <TbFoldersFilled className="bg-dark text-white text-2xl" />
                  </div>
                  <p className="font-semibold lg:text-[20px] md:text-[20px] text-[18px]">
                    Pick a subscription
                  </p>
                </div>
              </div>
              <div className="p-4 bg-light text-dark rounded-lg my-4">
                <div className="flex items-center">
                  <div className="bg-dark py-3 px-4 rounded-lg mr-4">
                    <IoIosWallet className="bg-dark text-white text-2xl" />
                  </div>
                  <p className="lg:text-[20px] md:text-[20px] text-[18px] font-semibold"> Connect Wallet</p>
                </div>
              </div>
              <div className="p-4 bg-light text-dark rounded-lg my-4">
                <div className="flex items-center">
                  <div className="bg-dark py-3 px-4 rounded-lg mr-4">
                    <PiHandDepositFill className="bg-dark text-white text-2xl" />
                  </div>
                  <p className="lg:text-[20px] md:text-[20px] text-[18px] font-semibold"> Make Deposit</p>
                </div>
              </div>
            </div>
            <h2 className="lg:text-[24px] md:text-[24px] text-[20px] my-4 font-semibold">
              Subscribe and Deposit
            </h2>
            <p className="text-[#6E6C6C]">
              Once you're logged in, subscribe to the service and deposit the
              required STRKs amount to start deploying tokens.
            </p>
          </div>
          <div className="lg:w-[32%] md:w-[32%] w-[100%] mb-4">
            <h2 className="lg:text-[100px] md:text-[80px] text-[50px] text-center font-black text-skyblue">
              03
            </h2>
            <div className="flex text-4xl my-4">
              <GoDotFill className="mr-2 text-[#D23D3D]" />
              <GoDotFill className="mr-2 text-[#B7B701]" />
              <GoDotFill className="text-[#30AF02]" />
            </div>
            <div className="bg-white p-4  shadow-3xl rounded-lg lg:h-[340px] md:h-[450px] h-auto">
              <div className="p-4 bg-light text-dark rounded-lg my-4">
                <div className="flex items-center">
                  <div className="bg-dark py-3 px-4 rounded-lg mr-4">
                    <RiRobot3Fill className="bg-dark text-white text-2xl" />
                  </div>
                  <p className="lg:text-[20px] md:text-[20px] text-[18px] font-semibold">Pick a bot</p>
                </div>
              </div>
              <div className="p-4 bg-light text-dark rounded-lg my-4">
                <div className="flex items-center">
                  <div className="bg-dark py-3 px-4 rounded-lg mr-4">
                    <GiTwoCoins className="bg-dark text-white text-2xl" />
                  </div>
                  <p className="lg:text-[20px] md:text-[20px] text-[18px] font-semibold">
                    {" "}
                    Enter token details
                  </p>
                </div>
              </div>
              <div className="p-4 bg-light text-dark rounded-lg my-4">
                <div className="flex items-center">
                  <div className="bg-dark py-3 px-4 rounded-lg mr-4">
                    <IoRocketSharp className="bg-dark text-white text-2xl" />
                  </div>
                  <p className="lg:text-[20px] md:text-[20px] text-[18px] font-semibold"> Deploy token</p>
                </div>
              </div>
            </div>
            <h2 className="lg:text-[24px] md:text-[24px] text-[20px] my-4 font-semibold">
              Deploy Your Token
            </h2>
            <p className="text-[#6E6C6C]">
              Now, you’re ready to deploy your token! Use either the Twitter bot
              or the platform bot to easily launch your token on Starknet.
            </p>
          </div>
        </div>
        </div>
      </section>
      <section className="flex lg:flex-row md:flex-row flex-col bg-dark rounded-lg lg:px-12 md:px-8 px-4 justify-between items-center my-16 w-[90%] mx-auto">
        <div className="lg:w-[40%] md:w-[45%] w-[100%] py-6">
          <div className="my-4">
            <div className="flex items-center">
              <div className="bg-white py-3 px-4 rounded-lg mr-4">
                <ImCheckmark className=" text-dark lg:text-2xl md:text-2xl text-lg" />
              </div>
              <p className="text-[20px] font-semibold text-white">No coding required.</p>
            </div>
          </div>
          <div className="my-4">
            <div className="flex items-center">
              <div className="bg-white py-3 px-4 rounded-lg mr-4">
                <ImCheckmark className=" text-dark lg:text-2xl md:text-2xl text-lg" />
              </div>
              <p className="text-[20px] text-white font-semibold">Instant token creation.</p>
            </div>
          </div>
          <div className="my-4">
            <div className="flex items-center">
              <div className="bg-white py-3 px-4 rounded-lg mr-4">
                <ImCheckmark className=" text-dark lg:text-2xl md:text-2xl text-lg" />
              </div>
              <p className="text-[20px] text-white font-semibold">Fully powered by Starknet.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[55%] md:w-[52%] w-[100%] py-6">
          <img src={bgImg} alt="" className="w-[100%] " />
        </div>
      </section>
    </main>
  );
};

export default Home;
