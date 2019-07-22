import React from "react";
import ScoreKeep from "../ScoreKeep/index.js";
import "./style.css";

function Navbar(props) {
    return (
        <nav classname="nav">
            <ScoreKeep score={props.score} highscore={props.highscore} />
            <li>
                Score: {props.score} | Highest Score: {props.highscore}
            </li>
        </nav>
    );
}

export default Navbar;