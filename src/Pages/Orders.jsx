import { Space, Table } from "antd";
import Typography from "antd/es/typography/Typography";
import React, { useEffect, useState } from "react";
import useFetch from "../CustomHook/useFetch";

const Orders = () => {
  const { data, isLoading } = useFetch("https://dummyjson.com/carts");

  return (
    <div className="orders">
      <Space direction="vertical" size="large">
        <Typography.Title level={4} className="title">
          Orders
        </Typography.Title>
        {data && (
          <Table
            style={{ width: "60vw" }}
            className="table"
            columns={[
              {
                title: "Product",
                dataIndex: "title",
                key: "title",
              },
              {
                title: "Quantity",
                dataIndex: "quantity",
                key: "quantity",
              },
              {
                title: "Price",
                dataIndex: "discountedPrice",
                key: "price",
              },
              {
                title: "Total",
                dataIndex: "total",
                key: "total",
              },
            ]}
            loading={isLoading}
            dataSource={data.carts?.[0]?.products}
            pagination={true}
          />
        )}
      </Space>
    </div>
  );
};
export default Orders;
