import React from "react";
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom'

const Login = (props) => {
   const { modal_open } = props;
    return (
      <div>
        <Modal open={modal_open} onClose={props.onCloseModal} center>
         <div className="custom-container">
            <div>
               <img className= "park_logo" src="../parktrkr_logo.png" alt= "parktrkr logo"></img>
            </div>
               <form className="form">
                  <div className="form-group">
                     <input type="email" className="form-control form-border" aria-describedby="emailHelp" placeholder="Email" name= "email_signin" required onChange= {props.handleChange}></input>
                  </div>
                  <div className="form-group">
                     <input type="password" className="form-control form-border" placeholder="Password" name="password" name= "password_signin" required onChange= {props.handleChange}></input>
                  </div>
                  <div className="sign-button">
                     <button type="button" className="btn btn-primary" onClick= {props.loginUser}>Sign In</button>
                     <span>OR</span>
                     <Link to= "/signup">
                        <button type="button" className="sign-up-button btn btn-secondary" onClick= {props.openSignupModal}>Sign Up</button>
                     </Link>
                  </div>
               </form>
            </div>
        </Modal>
      </div>
    )
}


export default Login