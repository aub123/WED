import { Image } from "antd";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { useEffect } from "react";
const { Header, Footer, Sider, Content } = Layout;
const Mmenu = ({ Akey }) => {

  const [url,setUrl] = useState('/problem?problemId=FED1&type=HTML')

  useEffect(
    () => {
      if(localStorage['problem']) {
        const {number, type} = JSON.parse(localStorage['problem']);
        console.log(number,type);
        if(!number || !type) {
          number = 'FED1',
          type = 'HTML'
        }
        setUrl(`/problem?problemId=${number}&type=${type}`)
      }
    },[]
  )

  const map = [
    // {
    //   label: <img src="src/assets/img/OIP-C.jpg" width="40px"></img>,
    // },
    {
      key: "index",
      label: <a href="/list">首页</a>,
    },
    {
      key: "problem",
      label: <a href={url}>问题</a>,
    },
  ];
  //   const navigate = useNavigate()
  return (
    <div>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[Akey]}
          items={map}
        />
      </Header>
    </div>
  );
};

export default Mmenu;
