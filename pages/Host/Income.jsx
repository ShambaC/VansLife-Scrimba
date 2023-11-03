import React from "react";

export default function Income() {
    const recent = [
        { price: 720, date: "1/12/22" },
        { price: 560, date: "10/11/22" },
        { price: 980, date: "23/11/22" }
    ]

    return (
        <div className="host-income-body">
            <h2>Income</h2>
            <p>Last <u>30 days</u></p>
            <h1>$2,260</h1>
            <img />
            <div className="host-income-recent">
                <h3>Your transactions ({recent.length})</h3>
                <p>Last <u>30 days</u></p>
            </div>
            {
                recent.map((e) => 
                    <div className="host-income-card" key={e.price}>
                        <h2>${e.price}</h2>
                        <p>{e.date}</p>
                    </div>
                )
            }
        </div>
    )
}