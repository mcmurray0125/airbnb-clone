import React from "react"
import star from "/src/images/star.png"


export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }  else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    } 


    return (
        <div className="card">
            {badgeText && <div className="card--status">
                {badgeText}
            </div>}
            <img src={`/src/images/${props.item.coverImg}`} alt="katie-zeferes" />
                <div className="card--stats">
                    <img src={star}  alt="star" className="star"/>
                    <small className="card--rating">&nbsp;{props.item.stats.rating}&nbsp;</small>
                    <small className="card--more--info">({props.item.stats.reviewCount}) &bull; {props.item.location}</small>
                </div>
                <small className="card--desc">{props.item.title}</small>
                <small className="card--price"><strong>From ${props.item.price} </strong>/ person</small>
            </div>
    )
}