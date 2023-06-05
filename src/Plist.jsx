import React from "react";
import { List } from "antd";
import { useNavigate } from "react-router-dom";

const Plist = ({ exercises }) => {
  const navigate = useNavigate();
  const handleSelectExercise = ({number,type}) => {
    // console.log(params);
    // 在这里可以触发选中练习题目的事件
    localStorage['problem'] = JSON.stringify({number,type})
    console.log("click ",number,type);
    navigate(`/problem?problemId=${number}&type=${type}`)
    // 将 exerciseId 传递给父组件
  };
  
  return (
    <List
      // header = {(<div>}</div>)}
      itemLayout="horizontal"
      dataSource={exercises}
      // style={{width: "100vh"}}
      pagination={{position:'bottom',align:"center"}}
      renderItem={(item) => (
        <List.Item onClick={() => handleSelectExercise({number:item.number,type:item.type})}>
          <List.Item.Meta
            className="list-item"
            header={<div>{item.title}</div>}
            title={<a>{item.number}{item.title}</a>}
            description={item.题目}
          />
        </List.Item>
      )}
    />
  );
};

export default Plist;
