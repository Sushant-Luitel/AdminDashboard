import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideBar from "./Components/SideBar";
import { Space } from "antd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Space className="sidebar-and-pagecontent">
          <SideBar />
          <PageContent />
        </Space>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
