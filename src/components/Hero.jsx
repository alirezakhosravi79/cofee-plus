//-----import image section part 6
import cofee from "../assets/Img/coffee5.png";
import Bean1 from "../assets/Img/bean1.png";
import Bean2 from "../assets/Img/bean2.png";

function Hero() {
  return (
    <div className="from-slate-100 to-amber-900 bg-gradient-to-r mt-14">
      <div
        className="mx-auto max-w-7xl grid md:grid-cols-2 place-items-center h-[700px]
        md:h-[650px] relative pt-10 md:pt-0"
      >
        {/*----5- text section */}
        <div className="space-y-5 px-4 md:px-0">
          <h3 className="text-amber-900 font-semibold text-lg">
            Welcome to Brew Haven___
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold">
            Experience Artisanal <span className="text-amber-900">Coffee</span>
            at Brew Haven
          </h1>
          <p>
            Indulge in our carefully crafted brews, made from ethically sourced
            beans and brewed to perfection.
          </p>
          <div className="flex gap-6">
            <a href="#menu">
              <button className="bg-amber-900 text-white px-3 py-2 rounded-md">
                View Menu
              </button>
            </a>
            <a href="#menu">
              <button
                className="bg-transparent border border-amber-900 text-amber-900 
            rounded-md px-3 py-2"
              >
                Our Story
              </button>
            </a>
          </div>
        </div>
        {/* ----6- image section */}
        <div className="">
          <img src={cofee} alt="" className="w-[500px]" />
        </div>
        <img src={Bean2} alt="" className="absolute hidden md:block bottom-20 left-36 x-10 w-20 rotate-45"/>
        <img src={Bean1} alt="" className="absolute hidden md:block top-14 left-0 w-20 rotate-45"/>
        <img src={Bean2} alt="" className="absolute hidden md:block top-0 right-0 w-20 rotate-45"/>
      </div>
    </div>
  );
}

export default Hero;
