import React from "react";
import "./style.css";

function IntroCard() {
    return (
        <header>
            <div className="introcard">
            <h1 className="title"> World of Warcraft Class Picker </h1>
            </div>
            <h2 classname="instructions"> Choose a class to build your score, but should you pick one class twice you will fail. Choose Wisely.</h2>
        </header>
    );
}

export default IntroCard;