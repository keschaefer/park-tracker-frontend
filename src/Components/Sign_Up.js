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
                     <input type="text" className="form-control form-border" id="first_name" placeholder="First Name" name="first_name"></input>
                  </div>
                  <div className="form-group">
                     <input type="text" className="form-control form-border" id="Last_name" placeholder="Last Name" name="last_name"></input>
                  </div>
                  <div className="form-group">
                     <input type="text" className="form-control form-border" id="Username" placeholder="Username" name="username"></input>
                  </div>
                  <div className="form-group">
                     <input type="email" className="form-control form-border" id="Email" aria-describedby="emailHelp" placeholder="Email" name="email"></input>
                  </div>
                  <div className="form-group">
                     <input type="password" className="form-control form-border" id="Password1" placeholder="Password" name="password"></input>
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