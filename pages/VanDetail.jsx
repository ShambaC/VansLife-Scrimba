import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs'

import Badge from "../components/Badge";


export default function VanDetail() {
    const { id } = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [van])

    return (
        <div className="van-detail-body">
            <Link to="/vans" className="back-btn">
                <BsArrowLeft style={{color: "#858585"}}/>
                <p>Back to all vans</p>
            </Link>
            {van ? 
            <div className="details-main-content">
                <img src={van.imageUrl} alt={van.name} />
                <Badge type={van.type} state="selected" />
                <h1>{van.name}</h1>
                <p id="price-tag"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <Link className="rent-btn">Rent this van</Link>
            </div>
            : <h1>Loading ...</h1>}
        </div>
    )
}