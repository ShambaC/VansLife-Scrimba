import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const { van } = useOutletContext()
    const styles = {
        width: '103px',
        height: '102px',

        borderRadius: '5px'
    }
    return (
        <img src={van.imageUrl} style={styles} />
    )
}