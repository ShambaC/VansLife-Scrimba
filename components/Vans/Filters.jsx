import React from "react";
import { useSearchParams } from "react-router-dom";

import Badge from "../Badge";
import { Link } from "react-router-dom";

export default function Filters() {
    const [filter, setFilter] = useSearchParams()
    const typeFilter = filter.get("filter")

    return (
        <div className="filter-bar">
            <Link to='?filter=simple'>
                <Badge type="simple" filter={typeFilter} />
            </Link>
            <Link to='?filter=luxury'>
                <Badge type="luxury" filter={typeFilter} />
            </Link>
            <Link to='?filter=rugged'>
                <Badge type="rugged" filter={typeFilter} />
            </Link>
            <Link to=''>
                <p>Clear filters</p>
            </Link>
        </div>
    )
}