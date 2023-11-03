import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function Reviews() {
    const reviews = [
        {
            name: "Elliot",
            date: "December 1, 2022",
            review: "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
        },
        {
            name: "Sandy",
            date: "November 23, 2022",
            review: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
        }
    ]

    return (
        <div className="host-review-body">
            <div className="review-toptext">
                <h1>Your reviews</h1>
                <p>Last <u>30 days</u></p>
            </div>
            <img />
            <h3>Reviews ({reviews.length})</h3>
            {
                reviews.map((e) => 
                    <div key={e.name} className="review">
                        <div className="review-stars">
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                        <p><strong>{e.name}</strong> <span>{e.date}</span></p>
                        <p>{e.review}</p>
                        <hr style={{width: "100%", color: "#C7C7C7"}}/>
                    </div>
                )
            }
        </div>
    )
}