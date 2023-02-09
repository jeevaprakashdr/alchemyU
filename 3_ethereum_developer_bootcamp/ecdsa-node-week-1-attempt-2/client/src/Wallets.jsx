import React, { useState, useEffect } from "react";
import server from "./server";

function Wallets() {
  const [walletIds, setWalletIds] = useState([]);

  const fetchWalletIds = async () => {
    const { data } = await server.get("walletIds");
    
    setWalletIds(data);
  }

  useEffect(() => {
    fetchWalletIds();
  }, []);
  

  return (
    <div className="container">
    {walletIds.map((id) => (
      <li key={id.toString()}>
      {id}
    </li>
    ))}
  </div>
  );
}

export default Wallets;
