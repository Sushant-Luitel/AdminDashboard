import { Table } from "antd";
import Typography from "antd/es/typography/Typography";
import React, { useEffect, useState } from "react";

const DashBoardTable = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function FetchCart() {
      const response = await fetch("https://dummyjson.com/carts/1");

      const result = await response.json();
      setData(result.products.slice(0, 3));
      setIsLoading(false);
    }
    FetchCart();
  }, []);

  return (
    <div>
      <Typography.Title level={4} className="recent-orders">
        Recent Orders
      </Typography.Title>
      {data && (
        <Table
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
          ]}
          loading={isLoading}
          dataSource={data}
          pagination={false}
        />
      )}
    </div>
  );
};
export default DashBoardTable;
