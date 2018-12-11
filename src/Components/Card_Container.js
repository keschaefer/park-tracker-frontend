import React from "react"
import Card from "./Card.js"

const Card_Container = (props) => {
   return (
      <div className= "card-container">
         <Card parks= {props.parks}/>
      </div>
   )
}

export default Card_Container