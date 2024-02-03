import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Space, Typography } from "antd";

import React, { useEffect, useState } from "react";
import DashBoardCard from "./DashboardCard";
import DashBoardTable from "./DashBoardTable";
import DashboardChart from "./DashboardChart";

const Dashboard = () => {
  const [users, setUsers] = useState(0);
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res1 = await fetch("https://dummyjson.com/users");
      const result1 = await res1.json();
      const res2 = await fetch("https://dummyjson.com/todos");
      const result2 = await res2.json();
      const res3 = await fetch("https://dummyjson.com/products");
      const result3 = await res3.json();
      setUsers(result1.total);
      setOrders(result2.total);
      setInventory(result3.total);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Space direction="vertical" size="large">
        <Typography.Title level={3}> DashBoard</Typography.Title>
        <Space size="large">
          <DashBoardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  fontSize: "35px",
                  borderRadius: "50%",
                  padding: "5px",
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.3",
                }}
              />
            }
            title="Orders"
            value={orders}
          />
          <DashBoardCard
            icon={
              <ShoppingOutlined
                style={{
                  fontSize: "35px",
                  borderRadius: "50%",
                  padding: "5px",
                  color: "blue",
                  backgroundColor: "rgba(0,0,240,0.3",
                }}
              />
            }
            title="Inventory"
            value={inventory}
          />
          <DashBoardCard
            icon={
              <UserOutlined
                style={{
                  fontSize: "35px",
                  borderRadius: "50%",
                  padding: "5px",
                  color: "purple",
                  backgroundColor: "#d050d0",
                }}
              />
            }
            title="Customer"
            value={users}
          />
          <DashBoardCard
            icon={
              <DollarCircleOutlined
                style={{
                  fontSize: "35px",
                  borderRadius: "50%",
                  padding: "5px",
                  color: "red",
                  backgroundColor: "rgba(250,0,0,0.3",
                }}
              />
            }
            title="Revenue"
            value={9231}
          />
        </Space>
        <Space size="large">
          <DashBoardTable />
          <DashboardChart />
        </Space>
      </Space>
    </div>
  );
};

export default Dashboard;
