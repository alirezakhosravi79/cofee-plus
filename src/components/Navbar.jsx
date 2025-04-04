import { Menu, ShoppingCart, X } from "lucide-react";
import Logo from "../assets/Img/Logo.png";
import { useState } from "react";
import RespansiveMenu from "./RespansiveMenu";

function Navbar() {
  // 3- responseive state
  const [open, setIsOpen] = useState(false);

  return (
    <div className="bg-amber-950 px-4 md:px-0 fixed z-50 w-full top-0">
      <div className="mx-auto max-w-7xl flex justify-between items-center py-2">
        {/*-----1- logo section --------*/}
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl text-white">Brew Haven</h1>
          <div className="sm:ml-8 ">
            <a href="" >
              <ShoppingCart  className=" text-white w-8 cursor-pointer" />
            </a>
          </div>
        </div>
        {/*-----2- menu section --------*/}
        <nav className="md:flex hidden items-center gap-7">
          <ul className="flex gap-7 items-center text-xl font-semibold text-white">
            <a href="/">
              <li className="cursor-pointer">Home</li>
            </a>
            <a href="/">
              <li className="cursor-pointer">Menu</li>
            </a>
            <a href="/">
              <li className="cursor-pointer">About</li>
            </a>
            <a href="/">
              <li className="cursor-pointer">Testiminial</li>
            </a>
          </ul>
          <a href="#contact">
            <button className="bg-amber-800 text-white hover:bg-amber-900 px-3 py-1 rounded-md">
              Contact
            </button>
          </a>
        </nav>
        {/*-----3- menu responsive --------*/}

        {open ? (
          <X
            onClick={() => setIsOpen(false)}
            className="text-white w-7 h-7 md:hidden"
          />
        ) : (
          <Menu
            onClick={() => setIsOpen(true)}
            className="text-white w-7 h-7 md:hidden"
          />
        )}
      </div>
      <RespansiveMenu open={open} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Navbar;
