import React from "react";
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import Skill from "./components/Skill";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black bg-fondo h-screen bg-contain bg-no-repeat bg-right-top">
    <NavBar/>
    <div className="w-full px-5 flex flex-col gap-10">
    <Section1 />
    <Skill />
    <Main />
    <Footer />
    </div>
    <footer className=' bottom-0 text-center font-semibold'>
            <h2 className=' text-white'>
                Creado por <a className="text-[#5221E6]" href="https://www.linkedin.com/feed/">Brandoll Guzman</a>
            </h2>
        </footer>
    
    </div>
  );
};

export default App;
