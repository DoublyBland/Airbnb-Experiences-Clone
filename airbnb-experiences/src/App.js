import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data"

export default function App() {
    const cardElements = cardData.map(card => {
        return (
            <Card
            key = {card.id}
            card={card}
            />
        )
    })
    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className="cards">
                {cardElements}
            </div>
        </div>
    )
}