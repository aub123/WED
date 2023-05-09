import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const toList = () => {
    navigate("/login");
  };
  return (
    <>
      <h1>欢迎使用web在线练习平台</h1>
      <Button type="text" onClick={toList}>
        立即开始
      </Button>
    </>
  );
};

export default WelcomePage;
