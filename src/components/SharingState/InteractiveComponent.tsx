import React from "react";

interface Props {
  cartItems: string[];
  OnClickFunction: (items: string[]) => void;
}
const InteractiveComponent = (props: Props) => {
  return (
    <div>
      <ul>
        {props.cartItems.map((value, index) => {
          return <li>Item #{index + 1}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          props.OnClickFunction([
            ...props.cartItems,
            "item " + (props.cartItems.length + 1),
          ]);
        }}
      >
        Añadir item
      </button>
    </div>
  );
};

export default InteractiveComponent;
