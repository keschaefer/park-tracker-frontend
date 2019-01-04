import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Main from './Components/Main.js'
import Card_Container from './Components/Card_Container.js'
import Login from './Components/Login_In.js'
import SignUp from './Components/Sign_Up.js'
import { Parallax } from 'react-parallax';
import { Route } from "react-router-dom"

class App extends Component {
  constructor() {
    super() 
      this.state = {
        image1: "https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        parks: [],
        modal_open: true,
        modal_open_signup: false,
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

  openSignupModal = () => {
    this.setState({ modal_open_signup: true });
  }
 
  onCloseModal = () => {
    this.setState({ 
      modal_open: false,
      modal_open_signup: false, 
    });
  }

  onCloseSignupModal = () => {
    this.setState({ modal_open_signup: false });
  }

  render() {
    return (
      <div className= "App">
        <div className= "body">
          <Header />
          <Login openSignupModal= {this.openSignupModal} onCloseModal= {this.onCloseModal} modal_open= {this.state.modal_open}/>
          {/* <SignUp onOpenModal= {this.onOpenModal} onCloseModal= {this.onCloseModal} modal_open_signup= {this.state.modal_open_signup} /> */}
          <Route path= "/signup" render= {() => (<SignUp onOpenModal= {this.onOpenModal} onCloseModal= {this.onCloseModal} modal_open_signup= {this.state.modal_open_signup} />)} />
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

{/* <Route exact path= "/" render= {() => (<Main />)} />
          <Route path= "/movies" render= {() => (<MovieListContainer selectMovie= {this.selectMovie} movies= {this.state.movies_list} populateEditMovie= {this.populateEditMovie} deleteMovie= {this.deleteMovie}/>)} /> */}