import { FaLocationDot } from "react-icons/fa6";
import { propertyList } from "../assets/assets";
import Property from "./Property";

const PropertyList = () => {
  return (
    <section>
      <div
        className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:32px my-20 w-full overflow-hidden"
        id="Property"
      >
        <h2 className="heading2">Property Listing</h2>
        <p className="mb-8 ">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-8 transition-transform duration-400 ease-in-out">
            {propertyList.map((property, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-full sm:w-1/4"
              >
                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-auto mb-14"
                />
                <div className="absolute left-0 right-0 bottom-5 justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h4 className="text-base font-semibold text-brand">
                      {property.title} <span>|</span> {property.price}
                    </h4>
                    <h3 className="text-xl font-semibold text-dark py-2">
                      {property.heading}
                    </h3>

                    <p className="text-base font-normal text-gray flex items-center gap-1">
                      <span className="text-brand text-lg">
                        <FaLocationDot />
                      </span>
                      {property.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
