import { useState } from "react";
import "./App.css";
// import ExerciseList from "./ExerciseList";
// import ProblemPanel from "./ProblemPanel";
// import WelcomePage from "./WelcomePage";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Handler from "./Handler";
// import Error from "./Error";
// import Login from "./Login";
import Navigation from "./Navigation";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;
function App() {
  
  return (
    <Layout className="layout">
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        {/* <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={new Array(15).fill(null).map((_, index) => {
        const key = index + 1;
        return {
          key,
          label: `nav ${key}`,
        };
      })}
    /> */}
        <Navigation />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <div className="App"></div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
