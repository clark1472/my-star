import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
//import star from "./star.json";
import Footer from "./components/Footer";


// class App extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
//     friends
//   };

//   removeFriend = id => {
//     // Filter this.state.friends for friends with an id not equal to the id being removed
//     const friends = this.state.friends.filter(friend => friend.id !== id);
//     // Set this.state.friends equal to the new friends array
//     this.setState({ friends });
//   };

//   // Map over this.state.friends and render a FriendCard component for each friend object
//   render() {
//     return (
//       <Wrapper>
//         <Title>Friends List</Title>
//         {this.state.friends.map(friend => (
//           <FriendCard
//             removeFriend={this.removeFriend}
//             id={friend.id}
//             key={friend.id}
//             name={friend.name}
//             image={friend.image}
//             occupation={friend.occupation}
//             location={friend.location}
//           />
//         ))}
//       </Wrapper>
//     );
//   }
// }

const App = () => (
  
  <div>
    <Navbar />
    <Header />
    <div>
        <Container image={"././public/images/Apophis"} />
        <Container />
        <Container />
        <Container />
    </div>
    <div>
        <Container />
        <Container />
        <Container />
        <Container />
    </div>
    <div>
        <Container />
        <Container />
        <Container />
        <Container />
    </div>
    <Footer />
  </div>
  
);

export default App;