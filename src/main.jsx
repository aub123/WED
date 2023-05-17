import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ExerciseList from "./ExerciseList";
// import ProblemPanel from './ProblemPanel'
import WelcomePage from "./WelcomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Handler from "./Handler";
import Error from "./Error";
import Login from './Login';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import Navigation from "./Navigation";

const Mapp = () => {
  const router = 
  // createBrowserRouter
  ([
    {
      path: "/index",
      key: "index",
      element: <WelcomePage />,
      errorElement: <WelcomePage  />,
    },
    {
      path: "/list",
      key: "list",
      element: <ExerciseList />,
    },
    // {
    //   path: "/problem",
    //   element: <ProblemPanel/>
    // },
    {
      path: "/problem",
      key: "problem",
      element: <Handler />,
    },
    {
      path:"/login",
      key: "login",
      element: <Login/>
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} >
      <Menu theme="dark" 
      // selectedKeys={props.selectedKeys}
      >
      {router.map((route) => (
        <Menu.Item key={route.path}>
          <NavLink to={route.path}>{route.name}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
      <App></App>
      </RouterProvider>
      {/* <RouterProvider router={router} ></RouterProvider> */}
    </div>
  );

}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
      <Mapp/>
  </React.StrictMode>,
)
