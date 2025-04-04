//import img
import Img1 from "../assets/Img/coffee-white.png";
import Img2 from "../assets/Img/coffee2.png";

//import motion
import { motion } from "framer-motion";

const MenuData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    price: 3.99,
    // aosDelay: "100",
  },
  {
    id: 2,
    img: Img1,
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    price: 2.99,
    // aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    price: 4.99,
    // aosDelay: "500",
  },
];

{
  /* ----7- product section */
}
function Menu() {
  return (
    <div id="menu" className="py-20">
      <div className="max-w-7xl mx-auto">
        {/* heading sction */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-amber-900 underline">
            Best Coffee for You
          </h1>
        </div>
        {/* menu cart sction */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {MenuData.map((menu) => (
            <div
              key={menu.id}
              className="rounded-2xl mt-4 md:mt-0 bg-white hover:bg-amber-900 transition-all hover:text-white 
                relative shadow-xl duration-high group max-w-[300px]"
            >
              <div className="h-[122px]">
                <img
                  src={menu.img}
                  alt=""
                  className="max-w-[200px] block mx-auto transform -translate-y-14
                        group-hover:scale-105 group-hover:rotate-6 duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full"></div>
                <h1 className="text-xl font-bold">{menu.name}</h1>
                <p className="text-gray-500 group-hover:text-white text-sm line-clamp-2">
                  {menu.description}
                </p>
                <div className="flex justify-between mt-5 px-4 items-center">
                  <p className="font-semibold text-lg">Price : ${menu.price}</p>
                  <button
                    className="bg-amber-900 text-white px-3 py-2 rounded-md group-hover:bg-white 
                     group-hover:text-amber-900"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
