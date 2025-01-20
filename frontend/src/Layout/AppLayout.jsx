import React, { useCallback, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useAccount } from "@starknet-react/core";

const AppLayout = () => {
  const navigate = useNavigate();

  const { address, status } = useAccount();

  const handleRedirect = useCallback(async () => {
    if (status === "connected") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [navigate, status]);

  useEffect(() => {
    handleRedirect();
  }, [handleRedirect, status, address]);

  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
