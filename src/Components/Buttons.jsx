import React from "react";
import { NavLink } from "react-router-dom";
const buttons = (props) => {
  return (
    <div>
      <button className="border-solid border-2 border-white bg-white p-2 rounded-full">
        <img src={props.imgsrc} alt="" width={20} />
        <img src={props.imgsrc1} alt="" width={20} />
        <img src={props.imgsrc2} alt="" width={20} />
        <img src={props.imgsrc3} alt="" width={20} />
      </button>
    </div>
  );
};

export default buttons;
