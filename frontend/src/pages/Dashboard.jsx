import React, { useState } from "react";
import bgImg from "../assets/bg-sub.svg";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Chatbot from "../components/Chatbot";
import { data } from "../constants/data";
import Subscription from "../components/Subscription";
import abi from "../constants/abi.json";
import { useReadContract } from "@starknet-react/core";
import { Modal, Box } from "@mui/material";

const Dashboard = () => {
  const [username, setuserName] = useState("");
  const [submittedUser, setSubmittedUser] = useState(null); 
  const [showModal, setShowModal] = useState(false); 

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: 24,
    bgcolor: "#203047",
  };

  const stringToFelt = (str) => {
    const utf8Bytes = new TextEncoder().encode(str);
    const hexString = Array.from(utf8Bytes, (byte) =>
      byte.toString(16).padStart(2, "0")
    ).join("");
    return BigInt("0x" + hexString);
  };

  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;


  const { data: readData, isLoading: readIsLoading, error: readError } =
    useReadContract({
      functionName: "get_user_balance",
      args: submittedUser ? [stringToFelt(submittedUser)] : undefined,
      abi,
      address: contractAddress,
      enabled: !!submittedUser,
    });

  const handleSubmit = () => {
    if (username.trim() === "") {
      alert("Please enter a valid username.");
      return;
    }
    setSubmittedUser(username); 
    setShowModal(false); 
    setuserName('')
  };

  return (
    <main className="relative">
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
              : {readIsLoading ? "...." : readData ? `${readData / BigInt(1e18)} STRK` : "0 STRK"}
            </p>
          </div>
          <button
            className="py-2 px-4 bg-dark text-white rounded hover:bg-light hover:text-dark"
            onClick={() => setShowModal(true)}
          >
            Check Balance
          </button>
          <Modal open={showModal} onClose={() => setShowModal(false)}>
            <Box sx={style} className="w-[90%] lg:w-[30%] md:w-[30%] p-8">
              <div className="mb-4">
                <label className="block text-sm mb-1">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setuserName(e.target.value)}
                  className="w-full p-2 text-dark rounded border"
                  placeholder="Enter your username"
                />
              </div>
              <button
                className="py-2 px-4 bg-light text-dark w-[100%] hover:border hover:border-white hover:bg-dark hover:text-white rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </Box>
          </Modal>
        </div>
        <div className="lg:w-[50%] md:w-[48%] w-[100%] mb-4">
          <img src={bgImg} alt="" />
        </div>
      </section>
      <section className="flex items-center justify-between flex-col lg:flex-row md:flex-row w-[90%] mx-auto my-14">
        {data.map((info) => (
          <div
            key={info.plan}
            className="bg-white shadow-3xl rounded-lg lg:w-[32%] md:w-[26%] w-[100%] mb-4 lg:px-8 md:px-6 px-4 py-10 group hover:text-white hover:bg-dark transition duration-300 ease-in-out"
          >
            <p className="font-Roboto uppercase mt-4 lg:text-[24px] md:text-[24px] text-[18px] font-semibold group-hover:text-white">
              {info.plan}
            </p>
            <h2 className="lg:text-[48px] md:text-[38px] text-[32px] font-bold leading-8 mb-6 group-hover:text-white">
              {info.amount} STRK
            </h2>
            <p className="text-[#6E6C6C] mb-4 group-hover:text-skyblue">
              {info.description}
            </p>
            <p className="flex items-center text-[#6E6C6C] my-2 group-hover:text-skyblue">
              <IoIosCheckmarkCircle className="mr-2 group-hover:text-blue-300" />{" "}
              Unlimited token deployments
            </p>
            <p className="flex items-center text-[#6E6C6C] my-2 group-hover:text-skyblue">
              <IoIosCheckmarkCircle className="mr-2 group-hover:text-blue-300" />{" "}
              Full access to platform features
            </p>
            <Subscription amount={info.amount} />
          </div>
        ))}
      </section>
      <section >
        <Chatbot />
      </section>
    </main>
  );
};

export default Dashboard;