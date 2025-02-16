import { propertyInfo } from "../../assets/assets";

const Property = () => {
  return (
    <section id="property" className=" my-20">
      <div
        className="container py-4 px-6 md:px-20 lg:32px w-full"
        id="Property"
      >
        <h2 className="heading2">Property Types</h2>
        <p className="mb-8 detail">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
        </p>
        <div className="">
          <div className=" group w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-transform duration-500 ease-in-out">
            {propertyInfo.map((property, index) => (
              <div
                key={index}
                className="relative hover:text-white hover:bg-brand p-4 flex flex-col items-center justify-center"
              >
                <div className="p-4 w-fit rounded-full border-2 border-dashed border-brand bg-transparent group-hover:bg-white">
                  <img src={property.img} alt={property.title} />
                </div>
                <div className=" justify-center py-4 flex flex-col items-center">
                  <h3 className="font-semibold text-dark text-2xl text-center">
                    {property.title}
                  </h3>
                  <h4 className="font-normal text-brand group-hover:text-white text-xl text-center">
                    {property.detail}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
