import React from "react"

const Card = (props) => {
   if (props.parks.length > 0) { 
      return (
      props.parks.map(park => {
         console.log(park.image)
         return (
            <div className="card">
               <img className="card-image rounded" src={park.image} alt="national park image"></img>
               <div className="card-body">
                  <p className= "card-title title">{park.name}</p>
                  <p className="card-text description">{park.description}</p>
                  <p className= "card-text state">{park.state}</p>
               </div>
            </div>
         )
      })
   )} else {
      return (
         <div>
            "Sorry, waiting for parks data"
         </div>
      )
   }
}

export default Card