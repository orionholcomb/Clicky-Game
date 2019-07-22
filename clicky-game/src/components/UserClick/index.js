import React from "react";
import Game from "../Game/index.js";
import "./style.css";

function UserClick(props) {
    return (
        <div
        role="img"
        onClick={ function () {props.userChoose(props.id)}}
        style={{ backgroundImage: `url("${props.image}")` }}
        className={"userClick"}
        />
    );
}

export default UserClick;