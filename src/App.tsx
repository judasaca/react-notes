import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["bogotá", "cali", "neiva", "manizales", "bucaramanga"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <ListGroup
      items={items}
      heading="Cities"
      onSelectItem={handleSelectItem}
    ></ListGroup>
  );
}

export default App;
