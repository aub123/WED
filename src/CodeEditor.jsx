import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import { Button } from 'antd';

const CodeEditor = ({ exerciseId, onSubmit }) => {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  }

  const handleSubmit = () => {
    // 在这里可以将当前代码提交给后端进行自动化测试
    // 并将测试结果显示给用户
    onSubmit(exerciseId, code);
  }

  return (
    <div className='coder-container'>
      <AceEditor
        mode="javascript"
        theme="monokai"
        value={code}
        onChange={handleCodeChange}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        height="500px"
        setOptions={{
          useWorker: false,
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
        }}
      />
      <Button className='submit-button' type="primary" onClick={handleSubmit}>提交</Button>
    </div>
  );
};

export default CodeEditor;
