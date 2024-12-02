import Form from "./components/Form";
import Header from "./components/Header";
import Property from "./components/Property";
import PropertyList from "./components/PropertyList";

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
