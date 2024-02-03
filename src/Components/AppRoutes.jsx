import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Inventory from "../Pages/Inventory";
import Orders from "../Pages/Orders";
import Customers from "../Pages/Customers";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
