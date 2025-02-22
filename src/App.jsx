import Form from "./components/home/Form";
import Header from "./components/home/Header";
import Property from "./components/home/Property";
import PropertyList from "./components/home/PropertyList";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <Form />
      <Property />
      <PropertyList />
    </div>
  );
};

export default App;
