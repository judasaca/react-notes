import { useState } from "react";
import InteractiveComponent from "./InteractiveComponent";
import Nav from "./Nav";
const ParentElement = () => {
  let [ItemValues, ChangeItemValues] = useState(["item 1", "item 2"]);
  return (
    <div>
      <Nav cartItems={ItemValues}></Nav>
      <InteractiveComponent
        OnClickFunction={ChangeItemValues}
        cartItems={ItemValues}
      ></InteractiveComponent>
    </div>
  );
};

export default ParentElement;
