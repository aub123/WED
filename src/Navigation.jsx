import { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const items = [
  {
    // label: <Link to="/index">概览</Link>,
    label: 'index',
    key: 'index',
  },
  {
    label: '题目列表',
    key: 'list',
    // disabled: true,
  },
//   {
//     label: 'Navigation Three - Submenu',
//     key: 'SubMenu',
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: 'group',
//         label: 'Item 1',
//         children: [
//           {
//             label: 'Option 1',
//             key: 'setting:1',
//           },
//           {
//             label: 'Option 2',
//             key: 'setting:2',
//           },
//         ],
//       },
//       {
//         type: 'group',
//         label: 'Item 2',
//         children: [
//           {
//             label: 'Option 3',
//             key: 'setting:3',
//           },
//           {
//             label: 'Option 4',
//             key: 'setting:4',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),
//     key: 'alipay',
//   },
];
const Navigation = () => {
    // const navigate = useNavigate()
  const [current, setCurrent] = useState('index');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    // navigate("/"+e.key)
  };
//   const paras = useLocation()

  useEffect(
    () => {

        // console.log(paras)
        // const location = paras.key
        // setCurrent(location)
    }
  )
  return <Menu theme="dark" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navigation