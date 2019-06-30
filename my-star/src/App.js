import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import StarCard from "./components/StarCard";
import Footer from "./components/Footer";
import stars from "./stars.json";
import "./App.css";


class App extends Component {
  state = {
    stars,
    clickedCharacters: [],
    score: 0
  };

  //check to see if image already picked.
  imageClick = event => {
    const currentCharacter = event.target.alt;
    const characterAlreadyClicked =
      this.state.clickedCharacters.indexOf(currentCharacter) > -1;

    //image already clicked. Start over. Score is back to zero.
    if (characterAlreadyClicked) {
      this.setState({
        stars: this.state.stars.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacters: [],
        score: 0
      });
      alert("Boo Who! You Lose!");
      // want to include an alert (character already clicked. You lose, start again!);

      // otherwise continue picking unique character images.
    } else {
      this.setState(
        {
          stars: this.state.stars.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          //clicked characters are array and the concat is adding a character to the array.
          clickedCharacters: this.state.clickedCharacters.concat(
            currentCharacter
          ),
          score: this.state.score + 1
        },
        () => {

          // if you score 12 characters you win!
          if (this.state.score === 12) {
            alert("Yippee! You Win!");
            this.setState({
              stars: this.state.stars.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              //characters zeroed out and new game begins.
              clickedCharacters: [],
              score: 0
            });
          }
        }
      );
    }
  };


  //Map over this.state.stars and render a StarCard component for each stars object
  render() {
    return (
      <div>
        <Navbar
        score={this.state.score} />
        <Jumbotron />
        <div className="wrapper">
     {this.state.stars.map(stars => ( 
          <StarCard
            imageClick={this.imageClick}
            id={stars.id}
            key={stars.id}
            name={stars.name}
            image={stars.image}
          />
        ))}
        </div>
        <Footer />
      </div>
    );
  }
}



export default App;