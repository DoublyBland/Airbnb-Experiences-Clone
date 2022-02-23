import React from "react";
import star from "../assets/star.png"

export default function Card(props) {
    let badgeText = ""
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {(badgeText.length > 0 ) && <div className="card--badge">{badgeText}</div>}
            <div><img src={window.location.origin + "/images/" + props.card.coverImg} alt="person" className="card-katie-img"></img></div>
            <div className="card-text">
                <div className="card-rating">
                    <img src={star} className="card-star-img" alt="star"></img>
                    <p className="card-star-rating">{props.card.stats.rating}</p>
                    <p className="card-review-numbers">({props.card.stats.reviewCount})</p>
                    <p className="card-location">{props.card.location}</p>
                </div>
                <p className="card--lessons">{props.card.title}</p>
                <div className="card-pricing">
                    <p className="card-price-start">From ${props.card.price}</p>
                    <p className="card-pricing-person">/ person</p>
                </div>
            </div>
        </div>
    )
}

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