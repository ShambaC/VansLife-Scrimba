import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function HostVanDesc() {
    const { id } = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [van])

    return (
        van ?
        <div className="host-van-desc">
            <p><strong>Name: </strong>{van.name}</p>
            <br />
            <p><strong>Category: </strong>{van.type}</p>
            <br />
            <p><strong>Description: </strong>{van.description}</p>
            <br />
            <p><strong>Visibility: </strong>Public</p>
        </div>
        : <h1>Loading ...</h1>
    )
}