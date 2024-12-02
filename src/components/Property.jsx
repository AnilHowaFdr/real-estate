import { propertyInfo } from "../assets/assets";

const Property = () => {
  return (
    <section className="">
      <div
        className="container flex flex-col items-center justify-center mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
        id="Property"
      >
        <h2 className="heading2">Property Types</h2>
        <p className="detail mx-auto text-center max-w-80 mb-8">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
          dolor duo.
        </p>
        <div className="overflow-hidden">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-transform duration-500 ease-in-out">
            {propertyInfo.map((property, index) => (
              <div
                key={index}
                className="relative w-full hover:text-white hover:bg-brand"
              >
                <div className="p-4 rounded-full border-2 border-dashed border-brand bg-transparent hover:bg-white inline-flex">
                  <img src={property.img} alt={property.title} />
                </div>
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <h3 className="font-semibold text-dark text-2xl py-4 ">
                    {property.title}
                  </h3>
                  <h4 className="font-normal text-brand text-xl">
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
