import { Layout, Menu, theme } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import { useNavigate } from "react-router-dom";
const Mmenu = ({ Akey }) => {
  const map = [
    {
      key: "index",
      label: <a href="/list">首页</a>,
    },
    {
      key: "problem",
      label: <a href="/problem">问题</a>,
    },
  ];

  //   const navigate = useNavigate()
  return (
    <div>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[Akey]}
          items={map}
        />
      </Header>
    </div>
  );
};

export default Mmenu;
