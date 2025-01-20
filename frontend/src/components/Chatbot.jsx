import React, { useState, useCallback, useEffect, useMemo } from "react";
import { BsFillSendFill } from "react-icons/bs";
import botImg from "../assets/bot.svg";
import logo from "../assets/logo.svg";
import { MdClose } from "react-icons/md";
import {
  useContract,
  useSendTransaction,
  useTransactionReceipt,
} from "@starknet-react/core";
import abi from "../constants/abi.json";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    handleShowForm();
  };

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      console.log("Deploying token with data: ", {
        userName,
        tokenName,
        symbol,
        totalSupply,
      });
      writeAsync();
    },
    [userName, tokenName, symbol, totalSupply]
  );

  const { contract } = useContract({
    abi,
    address: contractAddress,
  });

  const calls = useMemo(() => {
    if (!userName || !contract || !tokenName || !symbol || !totalSupply)
      return [];
    return [
      contract.populate("deploy_token", [
        tokenName,
        symbol,
        ethers.parseEther(String(totalSupply)).toString(),
        userName,
      ]),
    ];
  }, [contract, userName, tokenName, symbol, totalSupply]);

  const {
    send: writeAsync,
    data: writeData,
    isPending: writeIsPending,
  } = useSendTransaction({
    calls,
  });

  const {
    data: waitData,
    status: waitStatus,
    isLoading: waitIsLoading,
    isError: waitIsError,
    error: waitError,
  } = useTransactionReceipt({ hash: writeData?.transaction_hash, watch: true });

  useEffect(() => {
    if (waitIsLoading) {
      setMessage("Waiting for confirmation...", { position: "top-center" });
    }

    if (waitStatus === "error") {
      setMessage(
        `Transaction rejected: ${waitError?.message || "Unknown error"}`
      );
      setTokenName("");
      setTotalSupply("");
      setUserName("");
      setSymbol("");
      handleHideForm();
    }

    if (waitStatus === "success") {
      setMessage("Token Deployment Successful");
      setTokenName("");
      setTotalSupply("");
      setUserName("");
      setSymbol("");
      handleHideForm();
    }
  }, [waitIsLoading, waitStatus, waitError]);

  return (
    <main className="relative">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {!isOpen ? (
        <div
          className="fixed lg:bottom-6 md:bottom-8 bottom-4 lg:right-10 md:right-10 right-6 bg-dark text-white py-6 px-8 rounded-full hover:bg-light hover:text-dark cursor-pointer shadow-lg"
          onClick={toggleChatbot}
        >
          <BsFillSendFill className="text-2xl" />
        </div>
      ) : (
        <div
          className="fixed bottom-6 right-10 hover:bg-dark hover:text-white py-6 px-8 rounded-full bg-light text-dark cursor-pointer shadow-lg z-50"
          onClick={toggleChatbot}
        >
          <MdClose className="text-2xl" />
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-28 right-8 lg:w-[30%] md:w-[30%] w-[90%] bg-white rounded-lg shadow-3xl p-6 z-50">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <img src={botImg} alt="Bot Icon" className="w-[50px]" />
            <img src={logo} alt="Logo" className="w-[120px]" />
          </div>
          <div className="bg-light rounded-xl p-4 my-4">
            <h3 className="text-lg font-bold mb-2">Welcome!</h3>
            <p className="mb-4">
              Get started by creating your own token below:
            </p>
          </div>
          {showForm ? (
            <section>
              <div className="mb-4">
                <label className="block text-sm mb-1">Token Name</label>
                <input
                  type="text"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                  className="w-full p-2 text-dark rounded border"
                  placeholder="Enter token name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1">Token Symbol</label>
                <input
                  type="text"
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value)}
                  className="w-full p-2 text-dark rounded border"
                  placeholder="Enter token symbol eg @brother_james"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1">Total Supply</label>
                <input
                  type="number"
                  value={totalSupply}
                  onChange={(e) => setTotalSupply(e.target.value)}
                  className="w-full p-2 text-dark rounded border"
                  placeholder="Enter total supply"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1">Twitter UserName</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-2 text-dark rounded border"
                  placeholder="Enter twitter username"
                />
              </div>
              <button
                className="hover:bg-light hover:text-dark w-[100%] py-3 px-4 rounded-lg bg-dark text-light transition"
                onClick={handleSubmit}
              >
                {writeIsPending ? "Deploying.." : "Deploy Token"}
              </button>
            </section>
          ) : (
            <div className="bg-light rounded-xl p-4 my-4">
              <h3 className="text-lg font-bold mb-2">Response</h3>
              <p className="mb-4">{message}</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default Chatbot;
