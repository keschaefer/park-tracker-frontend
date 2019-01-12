import React from "react"
import Card from "./Card.js"

const CardContainer = (props) => {
   return (
      <div className= "card-container">
         <Card parks= {props.parks} currentUser_parks= {props.currentUser_parks}/>
      </div>
   )
}

export default CardContainer