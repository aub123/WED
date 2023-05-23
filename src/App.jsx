import { useState } from "react";
import "./App.css";

import Navigation from "./Navigation";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import ExerciseList from "./ExerciseList";
import WelcomePage from "./WelcomePage";

const { Header, Content, Footer } = Layout;
function App() {
  
  return (
    <>
    <WelcomePage/>
    </>
  );
}

export default App;
