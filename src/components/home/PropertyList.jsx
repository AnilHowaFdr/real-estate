import { FaLocationDot } from "react-icons/fa6";
import { propertyList } from "../../assets/assets";

const PropertyList = () => {
  return (
    <section>
      <div
        className="container  py-4 pt-20 px-6 md:px-20 lg:32px my-20 w-full overflow-hidden"
        id="Property"
      >
        <h2 className="heading2">Property Listing</h2>
        <p className="mb-8 detail">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
        </p>
        <div className="">
          <div className="w-full items-center justify-between grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-7">
            {propertyList.map((property, index) => (
              <div key={index} className="relative shadow-lg py-4 my-5 sm:my-0">
                <img
                  src={property.img}
                  alt={property.title}
                  className="w-full h-auto "
                />
                <div className="absolute left-0 bottom-0 justify-center w-full">
                  <div className="inline-block bg-white w-4/5 p-2 shadow-md">
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
