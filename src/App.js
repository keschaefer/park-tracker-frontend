import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
// import Footer from './Components/Footer.js'
import Main from './Components/Main.js'
import CardContainer from './Components/Card_Container.js'
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
        email_signin: "",
        password_signin: "",
        first_name_signup: "",
        last_name_signup: "",
        email_signup: "",
        password_signup: "",
        currentUser: "",
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

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  addNewUser = (event) => {
    event.preventDefault()
    let newUser = {
      first_name: this.state.first_name_signup,
      last_name: this.state.last_name_signup,
      email: this.state.email_signup,
      password: this.state.password_signup
    }
    fetch("https://localhost:3001/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify(newUser)
    })
    .then(response => (response.json()))
    .then(response => {
      this.setState({ currentUser: response.first_name})
    })
    this.onCloseModal()
    
  }

  render() {
    return (
      <div className= "App">
        <div className= "body">
          <Header />
          <Login openSignupModal= {this.openSignupModal} onCloseModal= {this.onCloseModal} modal_open= {this.state.modal_open}/>
          <Route path= "/signup" render= {() => (<SignUp onOpenModal= {this.onOpenModal} onCloseModal= {this.onCloseModal} modal_open_signup= {this.state.modal_open_signup} handleChange= {this.handleChange} addNewUser= {this.addNewUser} />)} />
          <Parallax
          bgImage= {this.state.image1} strength= {700}>
              <div style={{height:400}}>
              </div>
          </Parallax>
          <Main />
          <CardContainer parks= {this.state.parks}/>
        </div>
      </div>
    );
  }
}

export default App;