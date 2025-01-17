import React from "react";
import bgImg from "../assets/bg-sub.svg";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Chatbot from "../components/Chatbot";

const Dashboard = () => {
  return (
    <main>
      <Header />
      <MobileHeader />
      <section className="flex items-center justify-between flex-col lg:flex-row md:flex-row w-[90%] mx-auto">
        <div className="lg:w-[45%] md:w-[48%] w-[100%] flex flex-col items-start mb-4">
          <p className="py-4 px-12 border rounded-full font-bold border-skyblue text-skyblue lg:text-[18px] md:text-[18px] text-[14px]">
            Pricing Plan
          </p>
          <h2 className="text-Roboto font-bold lg:text-[52px] md:text-[48px] text-[32px] lg:text-left md:text-left text-center">
            We’ve got a Plan that is Perfect for You.
          </h2>
          <div className="flex border-t border-b border-black py-6 w-[100%] my-6">
            <p className="font-semibold lg:text-[24px] md:text-[24px] text-[18px] text-[#6E6C6C]">
              User’s <br /> Balance
            </p>
            <p className="text-Roboto font-bold lg:text-[48px] md:text-[42px] text-[26px] text-[#6E6C6C]">
              : 0STRK
            </p>
          </div>
        </div>
        <div className="lg:w-[50%] md:w-[48%] w-[100%] mb-4">
          <img src={bgImg} alt="" />
        </div>
      </section>
      <section className="flex items-center justify-between flex-col lg:flex-row md:flex-row w-[90%] mx-auto my-14">
        <div className="bg-white shadow-3xl rounded-lg lg:w-[32%] md:w-[26%] w-[100%] mb-4 lg:px-8 md:px-6 px-4 py-10 group hover:text-white hover:bg-dark transition duration-300 ease-in-out">
          <p className="font-Roboto uppercase mt-4 lg:text-[24px] md:text-[24px] text-[18px] font-semibold group-hover:text-white">
            Basic
          </p>
          <h2 className="lg:text-[48px] md:text-[38px] text-[32px] font-bold leading-8 mb-6 group-hover:text-white">
            5STRK
          </h2>
          <p className="text-[#6E6C6C] mb-4 group-hover:text-skyblue">
            Perfect for casual users or individuals looking to deploy tokens
            occasionally.
          </p>
          <p className="flex items-center text-[#6E6C6C] my-2 group-hover:text-skyblue">
            <IoIosCheckmarkCircle className="mr-2 group-hover:text-blue-300" />{" "}
            Unlimited token deployments
          </p>
          <p className="flex items-center text-[#6E6C6C] my-2 group-hover:text-skyblue">
            <IoIosCheckmarkCircle className="mr-2 group-hover:text-blue-300" />{" "}
            Full access to platform features
          </p>
          <button className="py-3 px-6 rounded-lg items-center bg-dark text-white font-Roboto font-semibold w-[100%] mt-6 group-hover:bg-light group-hover:text-dark transition duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
        <div className="bg-white shadow-3xl rounded-lg lg:w-[32%] md:w-[26%] w-[100%] mb-4 lg:px-8 md:px-6 px-4 py-10 group hover:text-white hover:bg-dark transition duration-300 ease-in-out">
          <p className="font-Roboto uppercase mt-4 lg:text-[24px] md:text-[24px] text-[18px] font-semibold group-hover:text-white">
            PRO
          </p>
          <h2 className="lg:text-[48px] md:text-[38px] text-[32px] font-bold leading-8 mb-6 group-hover:text-white">
            10STRK
          </h2>
          <p className="text-[#6E6C6C] mb-4 group-hover:text-skyblue">
          Ideal for users with frequent token deployment needs or small communities.
          </p>
          <p className="flex items-center text-[#6E6C6C] my-2 group-hover:text-skyblue">
            <IoIosCheckmarkCircle className="mr-2 group-hover:text-blue-300" />{" "}
            Unlimited token deployments
          </p>
          <p className="flex items-center text-[#6E6C6C] my-2 group-hover:text-skyblue">
            <IoIosCheckmarkCircle className="mr-2 group-hover:text-blue-300" />{" "}
            Full access to platform features
          </p>
          <button className="py-3 px-6 rounded-lg items-center bg-dark text-white font-Roboto font-semibold w-[100%] mt-6 group-hover:bg-light group-hover:text-dark transition duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
        <div className="bg-white shadow-3xl rounded-lg lg:w-[32%] md:w-[26%] w-[100%] mb-4 lg:px-8 md:px-6 px-4 py-10 group hover:text-white hover:bg-dark transition duration-300 ease-in-out">
          <p className="font-Roboto uppercase mt-4 lg:text-[24px] md:text-[24px] text-[18px] font-semibold group-hover:text-white">
           premium
          </p>
          <h2 className="lg:text-[48px] md:text-[38px] text-[32px] font-bold leading-8 mb-6 group-hover:text-white">
            15STRK
          </h2>
          <p className="text-[#6E6C6C] mb-4 group-hover:text-skyblue">
          Designed for heavy users, large communities, or projects with high token creation demand.
          </p>
          <p className="flex items-center text-[#6E6C6C] my-2 group-hover:text-skyblue">
            <IoIosCheckmarkCircle className="mr-2 group-hover:text-blue-300" />{" "}
            Unlimited token deployments
          </p>
          <p className="flex items-center text-[#6E6C6C] my-2 group-hover:text-skyblue">
            <IoIosCheckmarkCircle className="mr-2 group-hover:text-blue-300" />{" "}
            Full access to platform features
          </p>
          <button className="py-3 px-6 rounded-lg items-center bg-dark text-white font-Roboto font-semibold w-[100%] mt-6 group-hover:bg-light group-hover:text-dark transition duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
      </section>
      <section className="relative">
        <Chatbot />
      </section>
    </main>
  );
};

export default Dashboard;
