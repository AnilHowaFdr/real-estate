import { propertyInfo } from "../assets/assets";

const Property = () => {
  return (
    <section className="">
      <div
        className="container flex flex-col items-center justify-center mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
        id="Property"
      >
        <h2 className="heading2 text-center">Property Types</h2>
        <p className="detail pt-2 w-auto text-center mb-8">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
          dolor duo.
        </p>
        <div className="">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-transform duration-500 ease-in-out">
            {propertyInfo.map((property, index) => (
              <div
                key={index}
                className="relative hover:text-white hover:bg-brand p-4 flex flex-col items-center justify-center"
              >
                <div className="p-4 w-fit rounded-full border-2 border-dashed border-brand bg-transparent hover:bg-white">
                  <img src={property.img} alt={property.title} />
                </div>
                <div className=" justify-center py-4 flex flex-col items-center">
                  <h3 className="font-semibold text-dark text-2xl text-center">
                    {property.title}
                  </h3>
                  <h4 className="font-normal text-brand text-xl text-center">
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
