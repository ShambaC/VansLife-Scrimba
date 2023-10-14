import React, { useContext } from "react";

import { filterContext } from "../pages/Vans";

export default function Badge({ type, state }) {
    const { filter, setFilter } = useContext(filterContext)
    if(filter === type) {
        state = "selected"
    }

    let bg
    if(state) {
        if(type === "simple") bg = "#E17654"
        else if(type === "luxury") bg = "#161616"
        else if(type === "rugged") bg = "#115E59"
    }

    return (
        <div className="badge" 
            style={state ? {background: bg, color: "#FFEAD0"} : {}} 
            onClick={() => setFilter(type)}
        >
            {type}
        </div>
    )
}