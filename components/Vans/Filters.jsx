import React, { useContext } from "react";

import Badge from "../Badge";
import { filterContext } from "../../pages/Vans";

export default function Filters() {
    const { setFilter } = useContext(filterContext)

    return (
        <div className="filter-bar">
            <Badge type="simple" />
            <Badge type="luxury" />
            <Badge type="rugged" />
            <p onClick={() => setFilter("")}>Clear filters</p>
        </div>
    )
}