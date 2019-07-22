import React, { Component } from "react";
import "./style.css";

class ScoreKeep extends Component {
  state = {
    message: "",
    active: false
  };

  // if the user's score changes, this will check whether they were right or wrong in their guess and return the condition
  componentDidUpdate({ score, highscore }, prevState) {
    const newState = { active: true };

    if (score === 0 && highscore === 0) {
      newState.message = "";
    } else if (score === 0 && highscore > 0) {
      newState.message = "wrong";
    } else {
      newState.message = "right";
    }

    if (score !== this.props.score || this.state.message !== newState.message) {
    }
  }

  // This function will take the returned condition and convert it to a frontend message for the player
  renderMessage = function() {
    switch (this.state.message) {
      case "right":
        return "Good Pick!";
      case "wrong":
        return "You are not worthy.";
      default:
        return "Choose your class.";
    }
  };

  // renders the final verdict of the user's choice
  render() {
    return (
      <li>
        {this.renderMessage()}
      </li>
    );
  }
}

export default ScoreKeep;
