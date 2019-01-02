import React from "react";
import Modal from 'react-responsive-modal';

const Login = (props) => {
   const { modal_open } = props;
    return (
      <div>
        <button onClick={props.onOpenModal}>Open modal</button>
        <Modal open={modal_open} onClose={props.onCloseModal} center>
         <div className="custom-container">
            <img src=""></img>
               <form className="form">
                  <div className="form-group">
                     <input type="email" className="form-control form-border" aria-describedby="emailHelp" placeholder="Email" required></input>
                  </div>
                  <div className="form-group">
                     <input type="password" className="form-control form-border" placeholder="Password" name="password" required></input>
                  </div>
                  <div className="sign-button">
                     <button type="button" className="btn btn-primary">Sign In</button>
                     <button type="button" className="sign-up-button btn btn-secondary">Sign Up</button>
                  </div>
               </form>
            </div>
        </Modal>
      </div>
    )
}


export default Login