import React from "react";

import Badge from "../Badge";

export default function Card({ imageUrl, name, price, type }) {
    return (
        <div className="explore-card">
            <img src={imageUrl} alt={name} />
            <div className="card-name-price">
                <h3>{name}</h3>
                <h3>${price}</h3>
            </div>
            <p>/day</p>
            <Badge type={type} state="selected" />
        </div>
    )
}