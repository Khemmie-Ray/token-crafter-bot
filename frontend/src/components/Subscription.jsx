import React, { useCallback, useState, useEffect, useMemo } from "react";
import {
  useContract,
  useSendTransaction,
  useTransactionReceipt,
  useAccount
} from "@starknet-react/core";
import abi from "../constants/abi.json";
import erc20abi from "../constants/erc20.json";
import { Modal, Box } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";

const Subscription = ({ amount }) => {
  const [showModal, setShowModal] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [userName, setUserName] = useState("");
  const { address } = useAccount()

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  const starkContractAddress = import.meta.env.VITE_STARK_ADDRESS;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: 24,
    bgcolor: "#203047",
  };

  useEffect(() => {
    const storedAddress = localStorage.getItem("walletAddress");
    if (storedAddress) {
      setUserAddress(storedAddress);
    } 
  }, [address]);

  const { contract } = useContract({
    abi,
    address: contractAddress,
  });

  const { contract: starkContract } = useContract({
    abi: erc20abi,
    address: starkContractAddress,
  });

  const calls = useMemo(() => {
    if (!userName || !amount || !address) return [];
    try {
      return [
        starkContract.populate("approve", [
          contractAddress,
          ethers.parseEther(String(amount)).toString(),
        ]),
        contract.populate("deposit", [
          ethers.parseEther(String(amount)).toString(),
          userName,
          userAddress,
        ]),
      ];
    } catch (error) {
      console.error("Error creating calls:", error);
      return [];
    }
  }, [starkContract, contract, contractAddress, amount, userName, userAddress]);

  const { send: writeAsync, data: writeData, isPending: writeIsPending } =
    useSendTransaction({
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
      toast.info("Waiting for confirmation...", { position: "top-center" });
    }

    if (waitStatus === "error") {
      toast.error(
        `Transaction rejected: ${waitError?.message || "Unknown error"}`,
        { position: "top-center" }
      );
      handleCloseModal();
    }

    if (waitStatus === "success") {
      toast.success("Subscription Successful", { position: "top-center" });
      handleCloseModal();
    }
  }, [waitIsLoading, waitStatus, waitError]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log("Initiating deposit with data:", {
        userName,
        userAddress,
        amount,
      });
      writeAsync();
    },
    [userName, userAddress, amount, writeAsync]
  );

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="py-3 px-6 rounded-lg items-center bg-dark text-white font-Roboto font-semibold w-[100%] mt-6 group-hover:bg-light group-hover:text-dark transition duration-300 ease-in-out"
      >
        Subscribe
      </button>
      <Modal open={showModal} onClose={handleCloseModal}>
        <Box sx={style} className="w-[90%] lg:w-[30%] md:w-[30%] p-8">
          <div className="mb-4">
            <label className="block text-sm mb-2 text-light">Amount</label>
            <input
              type="text"
              value={amount}
              readOnly
              className="w-full p-2 text-dark rounded border"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2 text-light">
              Twitter User Name
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 text-dark rounded border"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2 text-light">Token Name</label>
            <input
              type="text"
              value={userAddress}
              readOnly
              className="w-full p-2 text-dark rounded border"
              placeholder="User address"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="py-3 px-6 rounded-lg items-center hover:bg-dark hover:text-white font-Roboto font-semibold w-[100%] mt-6 bg-light hover:border hover:border-white text-dark transition duration-300 ease-in-out"
          >
            {writeIsPending ? "Loading..." : "Deposit"}
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default Subscription;