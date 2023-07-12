import { useState } from "react";
import styles from "./CustomListGroup.module.css";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function CustomListGroup(props: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{props.heading}</h1>
      <ul className={styles.list}>
        {props.items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default CustomListGroup;
