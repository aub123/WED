import React, { useEffect, useState } from "react";
import Plist from "./Plist";
import { Tabs } from "antd";

// import data from "./mock/html题目集.json";
import serviceAxios from "./assets/js/Myaxios";
import InfiniteScroll from "react-infinite-scroll-component";

const ExerciseList = () => {
  const { TabPane } = Tabs;

  const [exercises, setExercises] = useState([]);
  const [CSS, setCSS] = useState([]);
  const [es, setES] = useState([]);
  const [api, setAPI] = useState([]);
  useEffect(() => {
    // 在这里可以发送请求获取所有的练习题目
    // 并将其存储到 exercises 变量中
    serviceAxios
      .get(`allhtml`)
      .then((res) => {
        console.log(res.data);
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
    serviceAxios
      .get(`allES`)
      .then((res) => {
        console.log(res.data);
        setES(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    // 在这里可以发送请求获取所有的练习题目
    // 并将其存储到 exercises 变量中
    serviceAxios
      .get(`allcss`)
      .then((res) => {
        console.log(res.data);
        setCSS(res.data);
      })
      .catch((err) => console.log(err));
    serviceAxios
      .get(`allweBapi`)
      .then((res) => {
        console.log(res.data);
        setAPI(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const callback = () => {};

  return (
    <div className="list-container">
      <Tabs
        // className="exercise-list"
        tabBarGutter={"10vw"}
        centered
        defaultActiveKey="1"
        size="large"
        onTouchMove={true}
        onChange={callback}
      >
        <TabPane tab="HTML练习" key="1">
          {/* <h2>HTML</h2> */}
          <Plist exercises={exercises} />
          
        </TabPane>
        <TabPane tab="CSS练习" key="2">
          {/* <h2>CSS</h2> */}
          <Plist exercises={CSS} />
          
        </TabPane>
        <TabPane tab="ES练习" key="3">
          {/* <h2>CSS</h2> */}
          <Plist exercises={es} />
          
        </TabPane>
        <TabPane tab="后端练习" key="4">
          {/* <h2>API</h2> */}

          <Plist exercises={api} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ExerciseList;
