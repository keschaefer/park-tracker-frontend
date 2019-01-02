import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Main from './Components/Main.js'
import Card_Container from './Components/Card_Container.js'
import Login from './Components/Login_In.js'
import { Parallax } from 'react-parallax';

class App extends Component {
  constructor() {
    super() 
      this.state = {
        image1: "https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        parks: [],
        modal_open: true,
    }
  }

  async componentDidMount() {
    fetch('http://localhost:3001/')
    .then(response => response.json())
    .then(response => {
      this.setState({
        parks: response
      })
    })
  }

  onOpenModal = () => {
    this.setState({ modal_open: true });
  }
 
  onCloseModal = () => {
    this.setState({ modal_open: false });
  }

  render() {
    return (
      <div className= "App">
        <div className= "body">
          <Header />
          <Login onOpenModal= {this.onOpenModal} onCloseModal= {this.onCloseModal} modal_open= {this.state.modal_open}/>
          <Parallax
          bgImage= {this.state.image1} strength= {700}>
              <div style={{height:400}}>
              </div>
          </Parallax>
          <Main />
          <Card_Container parks= {this.state.parks}/>
        </div>
      </div>
    );
  }
}

export default App;
