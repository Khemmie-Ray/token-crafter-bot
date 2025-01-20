import React, { useState, useEffect } from "react";
import { useConnect, useDisconnect, useAccount } from "@starknet-react/core";
import { Modal, Box } from "@mui/material";

const ConnectButton = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

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
    if (address) {
      localStorage.setItem("walletAddress", address);
    } else {
      localStorage.removeItem("walletAddress");
    }
  }, [address]);

  return (
    <div>
      {!address ? (
        <button
          className="flex py-3 px-6 rounded-lg items-center bg-dark text-white font-Roboto font-semibold"
          onClick={handleOpenModal}
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center space-x-2">
          <div className="text-sm bg-gray-200 px-4 py-2 text-black">
            Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </div>
          <button
            onClick={() => disconnect()}
            className="text-dark font-semibold py-2 px-4 bg-skyblue hover:bg-dark hover:text-light"
          >
            Disconnect
          </button>
        </div>
      )}
      <Modal open={showModal} onClose={handleCloseModal}>
        <Box sx={style} className="w-[90%] lg:w-[30%] md:w-[30%] p-8">
          {connectors.map((connector) => (
            <div key={connector.id}>
              <button
                onClick={() => {
                  connect({ connector });
                  handleCloseModal();
                }}
                variant="outline"
                className="text-white border-white border w-[100%] mb-4 py-4 rounded-lg px-8"
              >
                Connect {connector.name}
              </button>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

export default ConnectButton;
