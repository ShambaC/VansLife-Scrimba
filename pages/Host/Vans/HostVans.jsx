import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HostVanCard from "../../../components/HostVanCard";

export default function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    return (
        <div className="host-vans-list-body">
            <h1>Your listed vans</h1>
            {
                vans.length > 0 ? 
                vans.map((van) => 
                    <Link key={van.id} to={`/host/vans/${van.id}`}>
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
    )
}