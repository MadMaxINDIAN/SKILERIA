import React, { useState } from "react";

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function onClickHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <div key={props.key}>
      <div
        className="collapsible"
        onClick={onClickHandler}
        style={
          isOpen
            ? {
                fontSize: "20px",
                backgroundColor: "#fafafa",
                color: "#000",
                borderBottom: "4px solid #359a35",
              }
            : {
                fontSize: "20px",
                // borderBottom: "4px solid #359a35",
                marginBottom: "5px",
              }
        }
      >
        {props.title}
      </div>
      {isOpen ? (
        <div className=".collapsible-container">{props.children}</div>
      ) : (
        <div style={{ display: "none" }}></div>
      )}
    </div>
  );
};

export default Collapsible;
