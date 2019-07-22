import React from "react";
import "./style.css";

function IntroCard() {
    return (
        <header>
            <div className="introcard">
            <h1 className="title"> World of Warcraft Class Picker </h1>
            <h2 className="instructions"> Choose a class to build your score, but should you pick one class twice you will fail. <br/> Choose Wisely.</h2>
        </div>
        </header>
    );
}

export default IntroCard;