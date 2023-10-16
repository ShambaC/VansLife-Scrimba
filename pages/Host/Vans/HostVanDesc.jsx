import React, {useState, useEffect} from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDesc() {
    const { van } = useOutletContext()

    return (
        <div className="host-van-desc">
            <p><strong>Name: </strong>{van.name}</p>
            <br />
            <p><strong>Category: </strong>{van.type}</p>
            <br />
            <p><strong>Description: </strong>{van.description}</p>
            <br />
            <p><strong>Visibility: </strong>Public</p>
        </div>
    )
}