import "./App.css";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["bogotá", "cali", "neiva", "manizales", "bucaramanga"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return <Alert>This is an alert</Alert>;
}

export default App;
