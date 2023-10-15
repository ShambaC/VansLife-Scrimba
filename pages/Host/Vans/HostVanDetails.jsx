import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs'

export default function HostVanDetails() {
    const { id } = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [van])

    return (
        <div className="host-van-det-body">
            <Link to="/host/vans" className="back-btn">
                <BsArrowLeft style={{color: "#858585"}}/>
                <p>Back to all vans</p>
            </Link>
            {
                van ?
                <main>
                    
                </main>
                : <h1>Loading ...</h1>
            }
        </div>
    )
}