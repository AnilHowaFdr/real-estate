import Blog from "./components/home/Blog";
import Choose from "./components/home/Choose";
import City from "./components/home/City";
import Form from "./components/home/Form";
import Header from "./components/home/Header";
import Property from "./components/home/Property";
import PropertyList from "./components/home/PropertyList";
import Team from "./components/home/Team";
import Testimonial from "./components/home/Testimonial";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <Form />
      <Property />
      <PropertyList />
      <City />
      <Choose />
      <Testimonial />
      <Team />
      <Blog />
    </div>
  );
};

export default App;
