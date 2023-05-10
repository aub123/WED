import React from "react";
import { Card, List, Tooltip, Avatar, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";

// const mockTestData = [
//   { input: "1,2,3", output: "6" },
//   { input: "4,5,6", output: "15" },
//   { input: "10,20,30", output: "60" },
// ];

// const mockCommentsData = [
//   {
//     author: "user1",
//     avatar: <Avatar icon={<UserOutlined />} />,
//     content: <p>这道题很有意思！</p>,
//     datetime: (
//       <Tooltip title={"2022-04-02 12:34:56"}>
//         <span>{"3 days ago"}</span>
//       </Tooltip>
//     ),
//   },
//   {
//     author: "user2",
//     avatar: <Avatar icon={<UserOutlined />} />,
//     content: <p>感觉很难呢</p>,
//     datetime: (
//       <Tooltip title={"2022-04-01 10:11:12"}>
//         <span>{"4 days ago"}</span>
//       </Tooltip>
//     ),
//   },
// ];

// const ProblemDescription = ({ title, content }) => (
//   <Card title={title} bordered={false}>
//     <p>{content}</p>
//   </Card>
// );

// const TestCases = () => (
//   <Card title="测试用例" bordered={false}>
//     <List
//       dataSource={mockTestData}
//       renderItem={(item) => (
//         <List.Item>
//           <List.Item.Meta title={`输入: ${item.input}`} />
//           <div>{`输出: ${item.output}`}</div>
//         </List.Item>
//       )}
//     />
//   </Card>
// );

const ProblemPanel = ({ title, content }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // console.log(1)

    const data = [
      {
        eid: 1,
        number: "FED1",
        title: "表单类型",
        task: '请依次写出以下类型的输入框。1. 类型为密码，默认值为"nowcoder" 2. 类型为复选框，且状态为已勾选',
        solution:
          '<input type="password" value="newcoder">\n<br>\n<input type="checkbox" checked>',
        test: null,
        type: "HTML",
      },
    ];

    const mock = data[0];
    setList([
      { id: 1, title: "题目", content: mock.task },
      { id: 2, title: "题解", content: mock.solution },
      { id: 3, title: "提交记录", content: mock.test },
    ]);
  }, []);
  return (
    <div className="left-side">
      {/* <h2>{mock.序号}{mock.标题}</h2> */}
      <Tabs
        tabPosition={"left"}
        items={list.map((item) => {
          return {
            label: item.title,
            key: item.id,
            children: item.content,
          };
        })}
      />
    </div>
  );
};

export default ProblemPanel;
