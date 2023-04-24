import React from "react";
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Skill from "./components/Skill";

const App = () => {
  return (
    <div className="bg-black bg-fondo h-screen bg-contain bg-no-repeat bg-right-top">
    <NavBar/>
    <div className="w-full px-5 flex flex-col gap-10">
    <Section1 />
    <Skill />
    </div>
    
    </div>
  );
};

export default App;
