import Navbar from "../layout/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div
      className="h-[600px] bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/banner.jpg')" }}
      id="Header"
    >
      <Navbar />
      <div className="container mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h1
          data-aos="zoom-in"
          className="text-light text-5xl sm:text-6xl md:text-7xl tracking-wider font-bold max-w-3xl pt-20"
        >
          Find A <span className="text-brand">Perfect Home</span> To Live With
          Your Family
        </h1>
        <p
          data-aos="zoom-in"
          className="text-light font-normal py-9 text-lg leading-8"
        >
          Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
          Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
        </p>
        <a
          data-aos="zoom-in"
          href="#Contact"
          className="bg-brand text-light px-8 py-3 rounded"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Header;
