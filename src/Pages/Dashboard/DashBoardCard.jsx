import Card from "antd/es/card/Card";
import { Statistic, Space } from "antd";
const DashBoardCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};
export default DashBoardCard;
