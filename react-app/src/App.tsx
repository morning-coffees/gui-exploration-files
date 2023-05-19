import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import { EnhancedStore } from "@reduxjs/toolkit";
// @ts-ignore
import { changeVisibility } from "./redux/alertVisibilitySlice";
import { useAppSelector, useAppDispatch } from "./redux/hooks";

function App() {
  // let items = ["New york", "San agustin", "Bayugan"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  let colors = ["primary", "success", "danger", "warning", "info"];
  let [color, setColor] = useState("secondary");
  // let [alertVisible, setAlertVisible] = useState(true);
  const dispatch = useAppDispatch();

  let { alertVisible } = useAppSelector((state) => state.alertVisible);

  const handleButtonClick = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    dispatch(changeVisibility());
  };

  const handleAlertCloseButton = () => {
    dispatch(changeVisibility());
  };

  return (
    <div>
      {alertVisible && (
        <Alert handleAlertCloseButton={handleAlertCloseButton}>
          Hello Worlds
        </Alert>
      )}
      <Button onClick={handleButtonClick} color={color}>
        Hello button
      </Button>

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;

function setAlertVisible(arg0: boolean) {
  throw new Error("Function not implemented.");
}
