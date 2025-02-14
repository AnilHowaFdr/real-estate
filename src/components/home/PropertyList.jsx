import PropertyDetails from "./PropertyDetails";
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
              <PropertyDetails key={index} property={property} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
