import { Avatar, Space, Table, Typography, Card } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import useFetch from "../CustomHook/useFetch";

const Customers = () => {
  const { data, isLoading } = useFetch("https://dummyjson.com/users");
  return (
    <div>
      <Space direction="vertical" size="large">
        <Typography.Title className="title"> Customers</Typography.Title>
        <Card
          style={{
            width: "60rem",
          }}
        >
          <Table
            columns={[
              {
                title: "Avatar",
                dataIndex: "image",
                key: "image",
                render: (link) => {
                  return <Avatar src={link} />;
                },
              },
              {
                title: "First Name",
                dataIndex: "firstName",
                key: "firstName",
              },
              {
                title: "Last Name",
                dataIndex: "lastName",
                key: "lastName",
              },
              {
                title: "Email",
                dataIndex: "email",
                key: "email",
              },
              {
                title: "Age",
                dataIndex: "age",
                key: "age",
              },
              {
                title: "Address (City)",
                dataIndex: "address",
                key: "address",
                render: (address) => {
                  return <span>{address.city}</span>;
                },
              },
            ]}
            dataSource={data.users}
            loading={isLoading}
            pagination={{
              pageSize: 8,
            }}
          />
        </Card>
      </Space>
    </div>
  );
};

export default Customers;
