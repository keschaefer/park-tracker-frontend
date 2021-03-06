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

const isOk = response => response.ok ? response.json() : response.status

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
        password_confirm: "",
        currentUser: "",
        currentUser_id: 0,
        currentUser_parks: [],
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
    this.setState({ 
      modal_open_signup: true 
    });
  }

  openSigninModal = () => {
    this.setState({
      modal_open: true
    })
    console.log('opening modal')
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

  signOutUser = () => {
    this.setState({
      currentUser: "",
      currentUser_id: 0,
    })
  }

  getUserParks = () => {
    fetch(`http://localhost:3001/userparks/${this.state.currentUser_id}`) 
    .then(response => response.json())
    .then(response => {
      this.setState({
        currentUser_parks: response
      })
      this.filterNotVisited()
    })
  }

  filterNotVisited = () => {
    let notVisited = []
    for(let i=0; i< this.state.parks.length; i++) {
        for(let j=0; j< this.state.currentUser_parks.length; j++) {
          if (this.state.parks[i].id !== this.state.currentUser_parks[j].id) {
            notVisited.push(this.state.parks[i])
          }
      }
    }
    this.setState({
      parks: notVisited
    })
  }

  addNewUser = (event) => {
    event.preventDefault()
    if(this.state.password_signup === this.state.password_confirm) {
      let newUser = {
        first_name: this.state.first_name_signup,
        last_name: this.state.last_name_signup,
        email: this.state.email_signup,
        password: this.state.password_signup
      }
      fetch("http://localhost:3001/createuser", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify(newUser)
      })
      .then(isOk)
      .then(response => {
        if(response === 500) {
          alert("Sorry, that user already exist")
        } else {
          this.setState({ 
            currentUser: response.first_name,
            currentUser_id: response.id
          })
          this.onCloseModal()
        }
      })  
    } else {
      alert("Your passwords don't match!")
    }
  } 

  loginUser = () => {
      let signinUser = {
        email: this.state.email_signin,
        password: this.state.password_signin
      }
      fetch("http://localhost:3001/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify(signinUser)
      })
    .then(isOk)
    .then(data => {
      if (data === 404) {
        alert("Sorry, this user doesn't exist") 
      } else if (data === 400) {
        alert("Sorry, password incorrect")
      } else {
        this.setState({
          currentUser: data[0].first_name,
          currentUser_id: data[0].id
        });
        this.onCloseModal()
        this.getUserParks()
      }
    })    
  }

  render() {
    return (
      <div className= "App">
        <div className= "body">
          <Header currentUser= {this.state.currentUser} signOutUser= {this.signOutUser} openSigninModal= {this.openSigninModal}/>
          <Login openSignupModal= {this.openSignupModal} onCloseModal= {this.onCloseModal} modal_open= {this.state.modal_open} handleChange= {this.handleChange} loginUser= {this.loginUser}/>
          <Route path= "/signup" render= {() => (<SignUp onOpenModal= {this.onOpenModal} onCloseModal= {this.onCloseModal} modal_open_signup= {this.state.modal_open_signup} handleChange= {this.handleChange} addNewUser= {this.addNewUser} />)} />
          <Parallax
          bgImage= {this.state.image1} strength= {700}>
              <div style={{height:400}}>
              </div>
          </Parallax>
          <Main openSigninModal= {this.openSigninModal}/>
          <CardContainer parks= {this.state.parks} currentUser_parks= {this.state.currentUser_parks}/>
        </div>
      </div>
    );
  }
}

export default App;