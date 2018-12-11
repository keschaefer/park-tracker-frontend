import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Main from './Components/Main.js'
import Card_Container from './Components/Card_Container.js'
import Card from './Components/Card.js'
import { Parallax } from 'react-parallax';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        image1: "https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Parallax
        bgImage= {this.state.image1} strength= {700}>
            <div style={{height:500}}>
            </div>
        </Parallax>
        <Main />
      </div>
    );
  }
}

export default App;
