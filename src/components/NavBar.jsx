import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

const NavBar = () => {

  const [burguer, setburguer] = useState(false)

  return (
    <nav className="h-20 flex justify-between items-center px-4">
      <div>
        <img src="./images/atomo.png" alt="" />
      </div>
      <ul className={burguer ? `fixed pt-5 top-[80px] flex flex-col items-center gap-14 left-0 bg-blue-950 w-full h-full text-white opacity-40` : `hidden md:flex  md:text-white md:gap-6 lg:gap-8`}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Project</a>
        </li>
        <li>
          <a href="">About Me</a>
        </li>
        <li>
          <a href="">Contact Me</a>
        </li>
      </ul>
      <div className="cursor-pointer text-white text-2xl md:invisible"
      onClick={()=>setburguer(!burguer)}>
        <HiBars3 />
      </div>
    </nav>
  );
};

export default NavBar;
