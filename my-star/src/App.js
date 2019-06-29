import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import star from "./star.json";
import StarCard from "./components/StarCard";
import Footer from "./components/Footer";


class App extends Component {
  state = {
    star,
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
        star: this.state.star.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacters: [],
        score: 0
      });
      // want to include an alert (character already clicked. You lose, start again!);

      // otherwise continue picking unique character images.
    } else {
      this.setState(
        {
          star: this.state.star.sort(function(a, b) {
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
              star: this.state.star.sort(function(a, b) {
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


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
        score={this.state.score} />
        <div className="wrapper">
        {this.state.star.map(star => (
          <StarCard
            imageClick={this.imageClick}
            id={star.id}
            key={star.id}
            name={star.name}
            image={star.image}
          />
        ))}
        </div>
      </div>
    );
  }
}



export default App;
