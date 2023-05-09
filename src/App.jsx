import { useState } from "react";
import "./App.css";
import ExerciseList from "./ExerciseList";
// import ProblemPanel from './ProblemPanel'
import WelcomePage from "./WelcomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Handler from "./Handler";
import Error from "./Error";
import Login from './Login';


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/index",
      element: <WelcomePage />,
      errorElement: <WelcomePage  />,
    },
    {
      path: "/list",
      element: <ExerciseList />,
    },
    // {
    //   path: "/problem",
    //   element: <ProblemPanel/>
    // },
    {
      path: "/problem",
      element: <Handler />,
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
