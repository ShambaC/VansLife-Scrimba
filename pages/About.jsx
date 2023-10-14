import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about-body">
            <img src="images/aboutBanner.png" />
            <div className="about-main">
                <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
                <div>
                    <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
                    <p>(Hitch costs extra 😉)</p>
                    <br />
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className="explore-banner">
                    <h2>Your destination is waiting.</h2>
                    <h2>Your van is ready</h2>
                    <Link to="/vans">Explore our vans</Link>
                </div>
            </div>
        </div>
    )
}