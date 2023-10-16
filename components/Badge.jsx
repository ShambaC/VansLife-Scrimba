import React from "react";

export default function Badge({ type, state, filter = "" }) {
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
        >
            {type}
        </div>
    )
}