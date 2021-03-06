// resources & components
import React, {Component} from "react";
import Navbar from "../Navbar/index.js";
import IntroCard from "../IntroCard/index.js";
import Body from "../Body/index.js";
import UserClick from "../UserClick/index.js";
import data from "../../data.json";
import "./style.css";

// setting the base scores when the user starts up the game and naming the component
class Game extends Component {
    state = {
        data,
        score: 0,
        highscore: 0
    };
    
    

    // function that scrambles all images to different locations in data.json
    scrambleClasses = function (data) {
        let i = data.length - 1;
        while(i > 0) {
            var j = Math.floor(Math.random() * (i + 1));
            var placehold = data[i];
            data[i] = data[j];
            data[j] = placehold;
            i--;
        }
        return data;
    };

    // If the component is successfully mounted, scrambleClasses will run to ensure photos are not in order
   componentDidMount() {
        this.setState({ data: this.scrambleClasses(this.state.data)});
    }

    // adds 1 to the score when the user chooses correctly
    // then compares the highscore with the freshly updated score and uses the max number as the new score
    correctChoice = function (choice) {
        const { highscore, score } = this.state;
        const addScore = score + 1;
        const newhigh = Math.max(addScore, highscore);
        
        // scrambles all the images when the user makes a correct choice
        this.setState({
            data: this.scrambleClasses(choice),
            score: addScore,
            highscore: newhigh
        });
        
        console.log(score);
        console.log(highscore);
    };

    // if the user chooses an image that has already been selected, this will reset the base score and scramble the images
    incorrectChoice = function (data) {
        this.setState({
            data: this.restart(data),
            score: 0
        });
    };
    
    // Function that resets all the data in its original position, will be used every single time the user chooses a photo
    restart = function (data) {
        const resetData = data.map(character => ({ character, selected: false}));
        return this.scrambleClasses(resetData);
    };

    // function that will be activated when the user clicks an image 
    //Determines if the image has been selected and if not it will mark as selected then return the value
    userChoice = function (id) {
        let correct = false;
        const newData = data.map(function (choice) {
            const newChoice = { choice };

            if (newChoice.id === id) {
                if(!newChoice.selected) {
                    newChoice.selected = true;
                    correct = true;
                } 
            }
            return newChoice;
        });

        // if the returned value is true, the correctChoice function will run. If it is false, the incorrectChoice function will run.
        
            if (correct === true) {
                this.correctChoice(newData)
            }
            else {
                this.incorrectChoice(newData)
            };
    };
    
    // organizes all of the frontend components and extra functions in one place
    render() {
    return (
        <div>
        <IntroCard/>
        <Navbar score={this.state.score} highscore={this.state.highscore} />
        <Body>
            {this.state.data.map(character => (
                <UserClick 
                key={character.id} 
                id={character.id}
                userChoose={this.userChoice}
                image={character.image}
                />
            ))} 
         </Body>
       </div>
    );
}

};




export default Game;