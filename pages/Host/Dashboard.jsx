import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from 'react-icons/bs'
import HostVanCard from "../../components/HostVanCard"

export default function Dashboard() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    return (
        <>
            <div className="host-dash-welcome">
                <h2>Welcome!</h2>
                <div className="welcome-subtext">
                    <p>Income last <u>30 days</u></p>
                    <Link to="income">Details</Link>
                </div>
                <h1>$2260</h1>
            </div>
            <div className="welcome-review-div">
                <div>
                    <h3>Review score</h3>
                    <div>
                        <BsStarFill />
                        <p><strong>5.0</strong>/5</p>
                    </div>
                </div>
                <Link to="reviews">Details</Link>
            </div>
            <div className="welcome-vans-list">
                <div className="welcome-list-top">
                    <h3>Your listed vans</h3>
                    <Link to="vans">View all</Link>
                </div>
                    {
                        vans.length > 0 ? 
                        vans.map((van) => 
                            <Link key={van.id} to={`vans/${van.id}`}>
                                <HostVanCard
                                    imageUrl={van.imageUrl}
                                    name={van.name}
                                    price={van.price}
                                />
                            </Link>
                        )
                        : <h1>Loading ...</h1>
                    }
            </div>
        </>
    )
}