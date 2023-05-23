import React from "react";
import ProblemPanel from "./ProblemPanel";
import CodeEditor from "./CodeEditor";
import { Spin } from "antd";
import { useState } from "react";
import Navigation from "./Navigation";
const Handler = () => {
  const [show, setShow] = useState(0);

  return (

    <div className="handler-container">
      <ProblemPanel />
      <CodeEditor setShow={setShow} />
      <Spin className="spin" wrapperClassName="spin" spinning={show}></Spin>

    </div>
  );
};

export default Handler;
