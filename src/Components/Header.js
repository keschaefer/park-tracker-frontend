import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
   return (
      <div className= "Header">
         <nav className="navbar navbar-light bg-light">
            <div className= "header-links">
               <img src= "../favicon.ico" alt= "tree"></img>
               <h1>ParkTrkr</h1>
            </div>
            <div className= "header-links">
               <h5 className= "link" onClick= {props.openSigninModal}>Sign In/Sign Up</h5>
               <h5 className= "link" onClick= {props.signOutUser} >Sign Out</h5>
               <h5>{`Hello, ${props.currentUser ? props.currentUser: 'welcome'}!`} </h5>  
            </div>
         </nav>
      </div>
   )
}

export default Header