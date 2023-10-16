import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs'

import Badge from "../../../components/Badge";

export default function HostVanDetails() {
    const { id } = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [van])

    return (
        <div className="host-van-det-body">
            <Link to="/host/vans" className="back-btn">
                <BsArrowLeft style={{color: "#858585"}}/>
                <p>Back to all vans</p>
            </Link>
            {
                van ?
                <div className="van-det-layout">
                    <div className="van-det-layout-main">
                        <img src={van.imageUrl} />
                        <div className="van-det-layout-info">
                            <Badge type={van.type} state="selected" />
                            <h1>{van.name}</h1>
                            <p><span>${van.price}</span>/day</p>
                        </div>
                    </div>
                    <div className="van-det-nav">
                        <NavLink 
                            className={({ isActive }) => isActive ? "active-route" : ""}
                            end
                            to={`.`}
                        >
                            Details
                        </NavLink>
                        <NavLink 
                            className={({ isActive }) => isActive ? "active-route" : ""}
                            to={`pricing`}
                        >
                            Pricing
                        </NavLink>
                        <NavLink 
                            className={({ isActive }) => isActive ? "active-route" : ""}
                            end
                            to={`photos`}
                        >
                            Photos
                        </NavLink>
                    </div>
                    <Outlet context={{ van }}/>
                </div>
                : <h1>Loading ...</h1>
            }
        </div>
    )
}