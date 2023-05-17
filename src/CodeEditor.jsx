import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import serviceaxios from "./assets/js/Myaxios";
import { Button, message, Space } from 'antd';
import { FloatButton } from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons'


const CodeEditor = ({ exerciseId, setShow }) => {
  const [code, setCode] = useState("");
  const [type, setType] = useState("html");
  // const [show, setShow] = useState(0)

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const onSubmit = () => {
    setShow(1);
    serviceaxios
      .post({ exerciseId, code })
      .then((res) => {
        console.log(res);
        message.success("运行成功")
        setShow(0)
      })
      .catch((err) => {
        console.log(err);
        message.error("运行失败")
      });
  };
  const location = useLocation();
  const handleSubmit = () => {
    // 在这里可以将当前代码提交给后端进行自动化测试
    // 并将测试结果显示给用户
    setShow(1)
    console.log(code);
    setTimeout(() => {
      setShow(0)
    }, 3000);
    // message.success('123')

    // onSubmit(exerciseId, code);
  };
  useEffect(() => {
    // const str = "?problemId=FED1&type=HTML";
    const searchParams = new URLSearchParams(location.search);
    const t = searchParams.get("type"); // HTML
    setType(new String(t).toLowerCase());
  });

  return (
    <div className="coder-container">
      <AceEditor
        mode={type}
        theme="monokai"
        value={code}
        onChange={handleCodeChange}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="80vh"
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <FloatButton icon={<PlayCircleOutlined/>}  className="submit-button" type="primary" onClick={handleSubmit}>
      </FloatButton>
    </div>
  );
};

export default CodeEditor;
