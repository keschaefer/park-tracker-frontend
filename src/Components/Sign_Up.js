import React from "react"
import Modal from 'react-responsive-modal';

const SignUp = (props) => {
   const { modal_open_signup } = props;
   return(
      <div>
         <Modal open={modal_open_signup} onClose={props.onCloseModal} center>
            <div className="custom-container">
               <div>
                  <img className= "park_logo" src="../parktrkr_logo.png"></img>
               </div>
               <form>
                  <div className="form-group">
                     <input onChange= {props.handleChange} type="text" className="form-control form-border" id="first_name" placeholder="First Name" name="first_name_signup"></input>
                  </div>
                  <div className="form-group">
                     <input onChange= {props.handleChange} type="text" className="form-control form-border" id="last_name" placeholder="Last Name" name="last_name_signup"></input>
                  </div>
                  <div className="form-group">
                     <input onChange= {props.handleChange} type="email" className="form-control form-border" id="Email" aria-describedby="emailHelp" placeholder="Email" name="email_signup"></input>
                  </div>
                  <div className="form-group">
                     <input onChange= {props.handleChange} type="password" className="form-control form-border" id="Password1" placeholder="Password" name="password_signup"></input>
                  </div>
                  <div className="form-group">
                     <input type="password" className="form-control form-border" id="Password2" placeholder="Re-enter Password"></input>
                  </div>
                  <div className="sign-button">
                     <button routerLink="" type="submit" className="sign-up-button btn btn-primary">Sign Up</button>
                  </div>
               </form>
            </div>
         </Modal>
      </div>
   )
}

export default SignUp