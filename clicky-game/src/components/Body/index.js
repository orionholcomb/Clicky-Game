import React from "react";
import "./style.css";

function Body(props) {
    return <div className="bodydiv">{props.children}</div>;
}

export default Body;