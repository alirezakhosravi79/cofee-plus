import Bg from "../assets/Img/Bg.png";
import Lottie from "lottie-react";
import coffee from "../assets/Img/Coffeeanime.json";

const bgImage = {
  backgroundImage: `url(${Bg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

{
  /* ----8- about us */
}

function About() {
  return (
    <div id="about" className="md:py-20 py-40" style={bgImage}>
      <h1 className="text-amber-900 text-5xl text-center underline">About Us</h1>
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        {/* image section */}
        <div>
          <Lottie animationData={coffee} className="md:w-[600px]" />
        </div>
        {/* text section */}
        <div className="px-4 space-y-4 md:px-0">
          <h1 className="text-2xl text-amber-900 underline">Passion for Perfect Brew</h1>
          <p>
            Founded in 2010, Bean Haven started as a small coffee cart in the
            heart of the city. Our founder, Jane Doe, had a vision to bring the
            finest, ethically sourced coffee to our community. What began as a
            love for the perfect cup of joe has grown into a thriving business,
            but our core values remain the same. We believe that great coffee is
            an art form. From carefully selecting the best beans from
            sustainable farms around the world to meticulously roasting them to
            perfection, every step in our process is crafted with love and
            expertise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
