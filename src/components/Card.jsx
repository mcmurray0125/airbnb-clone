import React from "react"
import katie from "../assets/katie-zaferes.png"
import star from "../assets/star.png"


/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--status">
                SOLD OUT
            </div>
            <img src={`/src/assets/${props.img}`} alt="katie-zeferes" />
                <div className="card--stats">
                    <img src={star}  alt="star" className="star"/>
                    <small className="card--rating">&nbsp;{props.rating}&nbsp;</small>
                    <small className="card--more--info">({props.reviewCount}) &bull; {props.country}</small>
                </div>
                <small className="card--desc">{props.title}</small>
                <small className="card--price"><strong>From ${props.price} </strong>/ person</small>
            </div>
    )
}