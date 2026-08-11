import React from "react";
import Navbar from "./Components/Navbar";

function About() {
    return (
        <>
            <Navbar />

            <section>
                <div className="position-relative">

                    <img
                        src="\down.jpeg"
                        className="w-100"
                        style={{
                            height: "100vh",
                            objectFit: "cover",
                            opacity: 0.9
                        }}
                        alt="Restaurant"
                    />

                    <div className="position-absolute top-50 start-50 translate-middle text-center text-dark bg-light bg-opacity-50 p-4 rounded w-75 h-100">

                        <p className="fs-4 fst-italic text-warning mb-2">
                            Since 2006
                        </p>

                        <h1 className="display-3 fw-semibold fst-italic mb-3">
                            La Maison
                        </h1>

                        <p className="fs-4 fst-italic mb-4">
                            Where every meal becomes a memory
                        </p>

                        <h2 className="fw-bold">
                            About La Maison
                        </h2>

                        <p>
                            Since <strong>2006</strong>, La Maison has been serving
                            delicious food made with fresh ingredients, authentic
                            recipes, and a passion for great dining. Our goal is to
                            create memorable meals in a warm and welcoming atmosphere.
                        </p>

                        <h3 className="mt-4">
                            Our Story
                        </h3>

                        <p>
                            La Maison began with a love for quality food and
                            exceptional hospitality. Every dish is prepared with
                            care using fresh ingredients and traditional flavors
                            that bring comfort and joy.
                        </p>

                        <h3 className="mt-4">
                            Our Mission
                        </h3>

                        <p>
                            To provide every guest with an unforgettable dining
                            experience through outstanding food, friendly service,
                            and a relaxing atmosphere.
                        </p>

                        <h3 className="mt-4">
                            Why Choose Us?
                        </h3>

                        <ul className="list-unstyled">
                            <li>Fresh, high-quality ingredients</li>
                            <li>Authentic recipes and rich flavors</li>
                            <li>Friendly and professional staff</li>
                            <li>Cozy and elegant atmosphere</li>
                            <li>Fast service and affordable prices</li>
                        </ul>

                    </div>
                </div>
            </section>
        </>
    );
}

export default About;