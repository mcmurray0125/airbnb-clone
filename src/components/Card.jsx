import React from "react"
import star from "/src/images/star.png"


export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }  else if (props.location === "Online") {
        badgeText = "ONLINE"
    } 


    /*
    Challenge:
    1. Display the correct text in the badge based on the logic above
    2. Only display the badge if badgeText has a value
    */


    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--status">
                {badgeText}
            </div>}
            <img src={`/src/images/${props.img}`} alt="katie-zeferes" />
                <div className="card--stats">
                    <img src={star}  alt="star" className="star"/>
                    <small className="card--rating">&nbsp;{props.rating}&nbsp;</small>
                    <small className="card--more--info">({props.reviewCount}) &bull; {props.location}</small>
                </div>
                <small className="card--desc">{props.title}</small>
                <small className="card--price"><strong>From ${props.price} </strong>/ person</small>
            </div>
    )
}