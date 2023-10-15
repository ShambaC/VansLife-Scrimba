import React, { useContext } from "react";

import Badge from "../Badge";
import { filterContext } from "../../pages/Vans/Vans";

export default function Filters() {
    const { filter, setFilter } = useContext(filterContext)

    return (
        <div className="filter-bar">
            <Badge type="simple" filter={filter} onClick={setFilter} />
            <Badge type="luxury" filter={filter} onClick={setFilter} />
            <Badge type="rugged" filter={filter} onClick={setFilter} />
            <p onClick={() => setFilter("")}>Clear filters</p>
        </div>
    )
}