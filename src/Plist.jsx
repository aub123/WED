import React from "react";
import { List } from "antd";

const Plist = ({ exercises }) => {
  const handleSelectExercise = (exerciseId) => {
    // 在这里可以触发选中练习题目的事件
    // 将 exerciseId 传递给父组件
  };
  return (
    <List
      // header = {(<div>}</div>)}
      itemLayout="horizontal"
      dataSource={exercises}
      // style={{width: "100vh"}}
      renderItem={(item) => (
        <List.Item onClick={() => handleSelectExercise(item.id)}>
          <List.Item.Meta
            className="list-item"
            header={<div>{item.所属}</div>}
            // avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index%3}`} />}
            title={<a href="#">{item.序号}{item.标题}</a>}
            description={item.题目}
          />
        </List.Item>
      )}
    />
  );
};

export default Plist;
