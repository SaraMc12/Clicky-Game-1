import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score:0,
    total:0,
    clicked: []    // array with objects comming from the json file
  };

  handleclick = id => {
    console.log(this.state)
    console.log("ID:", id)
    if (this.state.clicked.includes(id)){  
      
      this.setState({
        friends: this.state.friends.sort(() => Math.random() - 0.5),
        score: 0,
        clicked:[]

      })
    }
    else{
      let newClicked = this.state.clicked
      newClicked.push(id)
      let newtotal= this.state.total;
      if (this.state.score+1 > this.state.total){
          newtotal = this.state.score +1
      }   
      this.setState({
        friends: this.state.friends.sort(() => Math.random() - 0.5),
        score: this.state.score + 1,
        total: newtotal,
        clicked: newClicked
      })

    }
   
    //const friends = this.state.friends.sort(() => Math.random() - 0.5)
    // Set this.state.friends equal to the new friends array
   // this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
        score= {this.state.score}
        total={this.state.total}
        topic="Judgy Animal Clicky Game">
        </Title>
        {this.state.friends.map(friend => (     // map = for/loop
          <FriendCard
            click={this.handleclick}
            id={friend.id}
            key={friend.id}
    
            image={friend.image}
         
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


// for (var i =0; i<this.state.friends; i++{

//   friend = this.state.friends[i]
//   do whatever 
// })