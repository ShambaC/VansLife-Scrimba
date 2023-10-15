import React from "react";

export default function HostVanCard({ imageUrl, name, price }) {
    return (
        <div className="host-van-card">
            <img src={imageUrl} alt={name} />
            <div className="host-van-card-info">
                <h3>{name}</h3>
                <p>${price}/day</p>
            </div>
        </div>
    )
}