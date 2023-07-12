import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import CustomButton from "./components/Button";
import CustomListGroup from "./components/CustomListGroup";
function App() {
  const items = ["bogotá", "cali", "neiva", "manizales", "bucaramanga"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [display, changeDisplay] = useState(false);
  return (
    <>
      {display && (
        <Alert color="danger" onClose={() => changeDisplay(false)}>
          This is an alert
        </Alert>
      )}
      <CustomButton color="dark" onClick={() => changeDisplay(true)}>
        Warning
      </CustomButton>
      <CustomListGroup
        items={items}
        onSelectItem={handleSelectItem}
        heading="LIST"
      ></CustomListGroup>
    </>
  );
}

export default App;
