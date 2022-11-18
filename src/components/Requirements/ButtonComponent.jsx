import React from "react";
import "./styles.css";



const ButtonComponent = ({
  label = "add label",
  background,
  colorLabel = "red",
}) => {
  return (
    <button
      className="container"
      onClick={console.log("hola")}
      style={{ backgroundColor: background, color: colorLabel }}
    >
      <h2 className="label" label={label}>
        {label}
      </h2>
    </button>
  );
};

export default ButtonComponent;
