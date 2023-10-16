import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Filters from "../../components/Vans/Filters";
import Card from "../../components/Vans/Card";
import { Link } from "react-router-dom";

export default function Vans() {
    const [vans, setVans] = useState([])
    const [filter, setFilter] = useSearchParams()
    const typeFilter = filter.get("filter")

    useEffect(() => {

        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
            })
    }, [])

    function returnFilteredList() {
        return typeFilter ? vans.filter(van => van.type === filter.get("filter")) : vans
    }

    return (
            <div className="vans-body">
                <h1>Explore our van options</h1>
                <Filters />
                <div className="van-cards-panel">
                    {returnFilteredList().map(van => {
                        return (
                            <Link 
                                key={van.id} 
                                to={`/vans/${van.id}`} 
                                state={{filter: filter.toString()}} 
                            >
                                <Card                                     
                                    id={van.id}
                                    imageUrl={van.imageUrl}
                                    name={van.name}
                                    price={van.price}
                                    type={van.type}
                                />
                            </Link>
                        )
                    })}
                </div>
            </div>
    )
}