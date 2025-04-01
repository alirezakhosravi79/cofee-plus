import Logo from "../assets/Img/Logo.png";

function Navbar() {
  return (
    <div className="bg-amber-900 px-4 md:px-0 fixed z-50 w-full top-0">
      <div className="mx-auto max-w-7xl flex justify-between items-center py-2">
        {/*-----1- logo section --------*/}
        <div className="flex items-center">
            <img src={Logo} alt="logo" className="w-10 h-10" />
            <h1 className="text-2xl text-white">Brew Haven</h1>
        </div>
        {/*-----2- menu section --------*/}
      </div>
    </div>
  );
}

export default Navbar;
