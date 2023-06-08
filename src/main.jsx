import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ExerciseList from "./ExerciseList";
// import ProblemPanel from './ProblemPanel'
import WelcomePage from "./WelcomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Handler from "./Handler";
// import Register from "./Register"
import Error from "./Error";
import Login from "./Login";
import ListPage from "./ListPage";
import ProblemPage from "./ProblemPage";


const router =
  createBrowserRouter(
  [
    // {
    //   path: "/index",
    //   key: "index",
    //   element: <WelcomePage />,
    //   errorElement: <WelcomePage />,
    // },
    {
      path: "/list",
      key: "list",
      element: <ListPage />,
    },
    // {
    //   path: "/problem",
    //   element: <ProblemPanel/>
    // },
    {
      path: "/problem",
      key: "problem",
      element: <ProblemPage/>,
    },
    {
      path: "/login",
      key: "login",
      element: <Login />,
    },
    // {
    //   path: "/register",
    //   key: "register",
    //   element: <Register />,
    // },
    {
      path: "*",
      element: <Error />,
    },
  ])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>
);
