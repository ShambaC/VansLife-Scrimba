import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPrice() {
    const { van } = useOutletContext()

    return (
        <div>
            <p><span style={{fontSize: '1.5rem'}}>${van.price}.00</span>/day</p>
        </div>
    )
}