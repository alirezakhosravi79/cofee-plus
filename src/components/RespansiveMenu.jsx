
{
  /*-----4- menu responsive --------*/
}

function RespansiveMenu({ open, setIsOpen }) {
  return (
    <div
      className={`${open ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 x-30
  flex h-screen w-[75%] flex-col justify-between bg-amber-950 px-8 pt-16 text-black 
  md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <nav className="mt-12">
          <ul className="flex flex-col gap-7 text-lg font-semibold text-white">
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
            <a href="#contact">
              <button className="bg-amber-800 text-white hover:bg-amber-900 px-3 py-1 rounded-md">
                Contact
              </button>
            </a>
          </ul>
        </nav>
      </div>
      <div className="text-white mb-4">
        <h1>Made  By   Alireza</h1>
      </div>
    </div>
  );
}

export default RespansiveMenu;
