import React, { useEffect, useState } from "react";
import Plist from "./Plist";
import { Tabs } from "antd";

// import data from "./mock/html题目集.json";
import serviceAxios from "./assets/js/Myaxios";

const ExerciseList = () => {
  const { TabPane } = Tabs;

  const [exercises, setExercises] = useState([]);
  const [CSS,setCSS] = useState([])
  useEffect(() => {
    // 在这里可以发送请求获取所有的练习题目
    // 并将其存储到 exercises 变量中
    // serviceAxios.get("/allhtml",(res,err) => {
    //   console.log(res)
    //   setExercises(res)
    // })
    const moca = [
      {
        "number": "FED1",
        "title": "表单类型",
        "type": "HTML"
      },
      {
        "number": "FED2",
        "title": "表格结构",
        "type": "HTML"
      },
      {
        "number": "FED3",
        "title": "图像标签属性",
        "type": "HTML"
      },
      {
        "number": "FED4",
        "title": "新窗口打开文档",
        "type": "HTML"
      },
      {
        "number": "FED5",
        "title": "自定义列表",
        "type": "HTML"
      },
      {
        "number": "FED6",
        "title": "加粗文字",
        "type": "HTML"
      },
      {
        "number": "FED7",
        "title": "语义化标签",
        "type": "HTML"
      },
      {
        "number": "FED8",
        "title": "音频媒体标签属性",
        "type": "HTML"
      },
      {
        "number": "FED9",
        "title": "视频媒体标签属性",
        "type": "HTML"
      }
    ];
    const moca1 = [
      {
        "number": "FED10",
        "title": "CSS选择器——标签、类、ID选择器",
        "type": "css"
      },
      {
        "number": "FED11",
        "title": "CSS选择器——伪类选择器",
        "type": "css"
      },
      {
        "number": "FED12",
        "title": "CSS选择器——伪元素",
        "type": "css"
      },
      {
        "number": "FED13",
        "title": "按要求写一个圆",
        "type": "css"
      },
      {
        "number": "FED14",
        "title": "设置盒子宽高",
        "type": "css"
      },
      {
        "number": "FED15",
        "title": "段落标识",
        "type": "css"
      },
      {
        "number": "FED16",
        "title": "设置文字颜色",
        "type": "css"
      },
      {
        "number": "FED17",
        "title": "?圣诞树",
        "type": "css"
      },
      {
        "number": "FED19",
        "title": "固定定位",
        "type": "css"
      },
      {
        "number": "FED20",
        "title": "CSS单位（一）",
        "type": "css"
      },
      {
        "number": "FED21",
        "title": "CSS单位（二）",
        "type": "css"
      }
    ]
    setExercises([...moca]);
    setCSS([...moca1])
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
          <h2>HTML</h2> 
          <Plist exercises={exercises} />
          <h2>CSS</h2>
          <Plist exercises={CSS}/>
        </TabPane>
        <TabPane tab="后端练习" key="2"></TabPane>
      </Tabs>
    </div>
  );
};

export default ExerciseList;
