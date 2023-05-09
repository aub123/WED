import React, { useEffect, useState } from "react";
import Plist from "./Plist";
import { Tabs } from "antd";

import data from "./mock/html题目集.json";
const ExerciseList = () => {
  const { TabPane } = Tabs;

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // 在这里可以发送请求获取所有的练习题目
    // 并将其存储到 exercises 变量中
    const moca = data;
    setExercises([...moca]);
  }, []);

  const callback = () => {};

  return (
    <div className="list-container">
      <Tabs
        className="exercise-list"
        tabBarGutter={"30vw"}
        centered
        defaultActiveKey="1"
        size="large"
        onTouchMove={true}
        onChange={callback}
      >
        <TabPane tab="前端练习" key="1">
          <Plist exercises={exercises} />
        </TabPane>
        <TabPane tab="后端练习" key="2"></TabPane>
      </Tabs>
    </div>
  );
};

export default ExerciseList;
