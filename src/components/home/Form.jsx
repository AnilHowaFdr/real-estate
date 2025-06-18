import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Form = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);
  return (
    <section className="bg-brand">
      <div
        data-aos="zoom-in"
        className="container lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8"
        id="form"
      >
        <div className="w-full">
          <input
            type="text"
            className="text-gray font-semibold outline-none bg-white p-4 text-lg rounded-md w-full mt-2"
            placeholder="Search Keyword"
          />
        </div>
        <div className="w-full">
          <select
            name="selectOption"
            id="selectOption"
            className="text-gray font-semibold outline-none bg-white px-4 py-5 text-lg rounded-md w-full mt-2"
          >
            <option value="" disabled selected>
              Property Type
            </option>
            <option value="Option1">Property Type1</option>
            <option value="Option2">Property Type2</option>
            <option value="Option3">Property Type3</option>
          </select>
        </div>
        <div className="w-full">
          <select
            name="selectOption"
            id="selectOption"
            className="text-gray bg-white font-semibold outline-none p-5 text-lg rounded-md w-full mt-2"
          >
            <option value="" disabled selected>
              Location
            </option>
            <option value="Option1">Location1</option>
            <option value="Option2">Location2</option>
            <option value="Option3">Location3</option>
          </select>
        </div>
        <div className="w-full">
          <button className="p-4 cursor-pointer transform scale-95 hover:scale-100 transition-transform duration-300 text-white font-semibold bg-dark text-lg rounded-md w-full mt-2">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Form;
