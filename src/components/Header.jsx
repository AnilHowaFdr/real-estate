import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/banner.jpg')" }}
      id="Header"
    >
      <Navbar />
      <div className="container mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h1 className="text-light text-5xl sm:text-6xl md:text-7xl font-bold max-w-3xl pt-20">
          Find A <span className="text-brand">Perfect Home</span> To Live With
          Your Family
        </h1>
        <p className="text-light font-normal py-9 text-lg leading-8">
          Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
          Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
        </p>
        <a href="#Contact" className="bg-brand text-light px-8 py-3 rounded">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Header;
