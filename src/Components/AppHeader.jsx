import React, { useState } from "react";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Image, Space, Drawer, List } from "antd";
import Typography from "antd/es/typography/Typography";
import useFetch from "../CustomHook/useFetch";
import logo from "../assets/original.jpg";
const AppHeader = () => {
  const { data } = useFetch("https://dummyjson.com/comments");
  const { data: notification } = useFetch("https://dummyjson.com/products");
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationOpen, setnotificationOpen] = useState(false);

  return (
    <div className="app-header">
      <Image width={80} src={logo} className="logo"></Image>

      <Typography.Title>Sushant's Dashboard</Typography.Title>
      <Space size="large">
        <Badge count={data.total} dot>
          <MailOutlined
            style={{ fontSize: 20 }}
            onClick={() => setCommentsOpen(true)}
          />
        </Badge>
        <Badge count={notification.total}>
          <BellFilled
            style={{ fontSize: 25 }}
            onClick={() => setnotificationOpen(true)}
          />
        </Badge>
      </Space>
      <Drawer
        title="comments"
        open={commentsOpen}
        onClose={() => setCommentsOpen(false)}
      >
        <List
          dataSource={data.comments}
          renderItem={(item) => <List.Item>{item.body}</List.Item>}
        ></List>
      </Drawer>
      <Drawer
        title="notifications"
        open={notificationOpen}
        onClose={() => setnotificationOpen(false)}
      >
        <List
          dataSource={notification.products}
          renderItem={(item) => (
            <List.Item>{item.title} has been ordered</List.Item>
          )}
        />
      </Drawer>
    </div>
  );
};

export default AppHeader;
