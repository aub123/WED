import {Layout, Breadcrumb} from 'antd';
import Mmenu from './Mmenu';
const { Header, Footer, Sider, Content } = Layout;
import ExerciseList from './ExerciseList';

const ListPage = () => {
  return (
    <Layout className="layout">
      <Mmenu Akey={'index'}/>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <div className="App"><ExerciseList/></div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default ListPage