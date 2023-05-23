import { Layout, Breadcrumb } from "antd";
import Mmenu from "./Mmenu";
const { Header, Footer, Sider, Content } = Layout;
import Handler from "./Handler";

const ProblemPage = () => {
  return (
    <div>
      <Layout className="layout">
        <Mmenu Akey={"problem"} />
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>Problem</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <div>
              <Handler />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default ProblemPage;
