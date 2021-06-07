import User from './components/User.js';
import Navbar from './components/Navbar.js';
import Contact from './components/Contact.js';
import About from './components/About.js';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Component } from 'react';
class App extends Component {
  state = {
    userA: {
      firstName: "Shinya",
      avatarUrl: "https://www.rakuten-sec.co.jp/web/shared/images/og-image.gif"
    },
    userB: {
      firstName: "Hayato",
      avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakuten_Global_Brand_Logo.svg/440px-Rakuten_Global_Brand_Logo.svg.png"
    },
    clickCount: 0,
    backColor: 'yellow',
    bootcamp: 'Rakuten Shoken'
  };
  colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };
  clickHandler = () => {
    if (this.state.clickCount % 5 === 0) {
      this.setState({ 
        backColor: this.colorMapper(),
        clickCount : this.state.clickCount + 1
      })
    }
    else {
      this.setState( { clickCount : this.state.clickCount + 1 } );
    }
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/" exact>
              <h1>React - state</h1>
              <p>Count is: {this.state.clickCount}</p>
              <button onClick={this.clickHandler}> Click me </button>
              <User
                theColor={this.state.backColor}
                firstName={this.state.userA.firstName}
                image={this.state.userA.avatarUrl}
                bootcampName={this.state.bootcamp}
                />
              <User 
                firstName={this.state.userB.firstName}
                image={this.state.userB.avatarUrl}
                bootcampName={this.state.bootcamp}
                />
            </Route>
        </div>
      </Router>
    );
  }
}
export default App;
