import { Avatar, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Space, Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import useFetch from "../CustomHook/useFetch";
const Inventory = () => {
  const { data, isLoading } = useFetch("https://dummyjson.com/products");

  return (
    <div className="inventory">
      <Space direction="vertical">
        <Typography.Title value={2} className="title">
          Inventory
        </Typography.Title>
        <Table
          style={{ width: "60vw" }}
          className="table"
          columns={[
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Brand",
              dataIndex: "brand",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (price) => {
                return <span>$ {price}</span>;
              },
            },
            {
              title: "Rating",
              dataIndex: "rating",
              render: (rating) => {
                return (
                  <Rate
                    value={rating}
                    allowHalf
                    character={<HeartOutlined />}
                    style={{ color: "red" }}
                  />
                );
              },
            },
            {
              title: "Category",
              dataIndex: "category",
            },
          ]}
          dataSource={data.products}
          loading={isLoading}
          pagination={{
            pageSize: 5,
          }}
        />
      </Space>
    </div>
  );
};

export default Inventory;
