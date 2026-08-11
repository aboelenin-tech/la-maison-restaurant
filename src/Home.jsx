import React from "react";
import Navbar from "./Components/Navbar";
import "./Home.css";

function Home() {
    return (
        <>
            <Navbar />

            <section>
                <div className="position-relative">

                    <img
                        src="/pexels-ankit-11236793.jpg"
                        className="w-100"
                        style={{
                            height: "100vh",
                            objectFit: "cover",
                            opacity: 0.9
                        }}
                        alt="Restaurant"
                    />

                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">

                        <h1 className="display-3 fw-bold">
                            La Maison
                        </h1>

                        <p className="fs-4 fst-italic">
                            Where every meal becomes a memory
                        </p>

                        <a
                            href="/menu"
                            className="btn btn-warning text-black fst-italic fs-4 mb-1 me-2 fw-semibold"
                        >
                            ORDER ONLINE
                        </a>

                        <a
                            href="/about"
                            className="btn btn-outline-light text-black fst-italic fs-4 fw-semibold"
                        >
                            OUR STORY
                        </a>

                    </div>

                </div>
            </section>
        </>
    );
}

export default Home;