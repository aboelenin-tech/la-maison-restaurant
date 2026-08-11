import React, { useEffect, useState } from "react";

import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

import "./Menu.css";


function Menu() {

    let [foods, setFoods] = useState([]);


    useEffect(function () {

        fetch("https://dummyjson.com/recipes")

            .then(function (res) {

                return res.json();

            })

            .then(function (data) {

                console.log(data);

                setFoods(data.recipes);

            })

            .catch(function (error) {

                console.log(error);

            });

    }, []);


    return (

        <>

            <Navbar />


            <section className="container my-5">

                <div className="row g-4">


                    {foods.map(function (food) {

                        return (

                            <div
                                className="col-12 col-sm-6 col-md-4 col-lg-3"
                                key={food.id}
                            >

                                <Card
                                    food={food}
                                />

                            </div>

                        );

                    })}


                </div>

            </section>

        </>

    );

}


export default Menu;