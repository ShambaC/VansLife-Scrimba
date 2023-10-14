import React, { useState, useEffect, createContext } from "react";

import Filters from "../components/Vans/Filters";
import Card from "../components/Vans/Card";
import { Link } from "react-router-dom";

const filterContext = createContext()
export { filterContext }

export default function Vans() {
    const [vans, setVans] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
            })
    }, [])

    function returnFilteredList() {
        if(filter.length > 0) {
            return vans.filter(van => van.type === filter)
        }

        return vans
    }

    return (
        <filterContext.Provider value={{filter, setFilter}}>
            <div className="vans-body">
                <h1>Explore our van options</h1>
                <Filters />
                <div className="van-cards-panel">
                    {returnFilteredList().map(van => {
                        return (
                            <Link key={van.id} to={`/vans/${van.id}`} >
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
        </filterContext.Provider>
    )
}