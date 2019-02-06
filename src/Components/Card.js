import React from "react"

const Card = (props) => {
   if (props.currentUser_parks.length > 0) {
      return (
         props.currentUser_parks.map(park => {
            return (
               <div className="card card-accomplished" key= {park.id}>
                  <img className="card-image rounded" src={park.image} alt="national park"></img>
                  <div className="card-body">
                     <p className= "card-title title">{park.name}</p>
                     <p className="card-text description">{park.description}</p>
                     <p className= "card-text state">{park.state}</p>
                  </div>
               </div>
            )
         })
      )
   } else {
      if (props.parks.length > 0) { 
      return (
         props.parks.map(park => {
            return (
               <div className="card" key= {park.id}>
                  <img className="card-image rounded" src={park.image} alt="national park"></img>
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
}

export default Card