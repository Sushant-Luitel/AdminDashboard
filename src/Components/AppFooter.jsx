import Typography from "antd/es/typography/Typography";
import React from "react";

const AppFooter = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="#">sushantluitel39@gmail.com</Typography.Link>
      <Typography style={{ fontSize: 40 }}>&copy;</Typography>
      <Typography.Link href="https://www.google.com/" target="_blank">
        Terms of Use
      </Typography.Link>
    </div>
  );
};

export default AppFooter;
