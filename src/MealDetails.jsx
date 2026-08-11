import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "./Components/Navbar";
import { useCartStore } from "./store/cartStore";


export default function MealDetails() {

    let { id } = useParams();

    let [meal, setMeal] = useState(null);

    let [count, setCount] = useState(1);


    // GET ADD TO CART FUNCTION FROM ZUSTAND

    let addToCartStore = useCartStore(
        function (state) {
            return state.addToCart;
        }
    );


    // GET MEAL

    useEffect(function () {

        fetch(`https://dummyjson.com/recipes/${id}`)

            .then(function (res) {
                return res.json();
            })

            .then(function (data) {

                console.log(data);

                setMeal(data);

            })

            .catch(function (error) {

                console.log(error);

            });

    }, [id]);


    // INCREASE

    function increase() {

        setCount(count + 1);

    }


    // DECREASE

    function decrease() {

        if (count > 1) {

            setCount(count - 1);

        }

    }


    // ADD TO CART

    function addToCart() {

        let price = Number(meal.id) * 3;


        let product = {

            id: meal.id,

            title: meal.name,

            price: price,

            image: meal.image,

            category: meal.cuisine,

            quantity: count

        };


        console.log(
            "Product added from details:",
            product
        );


        addToCartStore(product);


        toast.success(
            meal.name + " added to cart"
        );

    }


    // LOADING

    if (!meal) {

        return (

            <>

                <Navbar />

                <div className="container text-center mt-5">

                    <h3>
                        Loading...
                    </h3>

                </div>

            </>

        );

    }


    // PRICE

    let price = Number(meal.id) * 3;


    return (

        <>

            <Navbar />


            <div className="container my-5">

                <div className="row g-5">


                    {/* IMAGE */}

                    <div className="col-12 col-md-6">

                        <img
                            src={meal.image}
                            alt={meal.name}
                            className="img-fluid rounded shadow"
                            style={{
                                width: "100%",
                                height: "450px",
                                objectFit: "cover"
                            }}
                        />

                    </div>


                    {/* DETAILS */}

                    <div className="col-12 col-md-6">


                        <h1 className="fw-bold mb-3">

                            {meal.name}

                        </h1>


                        <p>

                            Cuisine:

                            <strong className="ms-2">

                                {meal.cuisine}

                            </strong>

                        </p>


                        <p>

                            Difficulty:

                            <strong className="ms-2">

                                {meal.difficulty}

                            </strong>

                        </p>


                        <p>

                            Rating:

                            ⭐ {meal.rating}

                        </p>


                        <p>

                            Calories:

                            {meal.caloriesPerServing} kcal

                        </p>


                        <hr />


                        {/* PRICE */}

                        <h3 className="mb-4">

                            Price:

                            <mark className="bg-warning fw-bold ms-2">

                                ${price * count}

                            </mark>

                        </h3>


                        {/* COUNTER */}

                        <div className="d-flex align-items-center mb-4">

                            <button
                                className="btn btn-danger"
                                onClick={decrease}
                            >

                                <i className="bi bi-dash"></i>

                            </button>


                            <span className="mx-3 fw-bold fs-5">

                                {count}

                            </span>


                            <button
                                className="btn btn-primary"
                                onClick={increase}
                            >

                                <i className="bi bi-plus"></i>

                            </button>

                        </div>


                        {/* ADD TO CART */}

                        <button
                            className="btn btn-warning btn-lg me-2"
                            onClick={addToCart}
                        >

                            <i className="bi bi-cart-plus me-2"></i>

                            Add to Cart

                        </button>


                        {/* BACK */}

                        <Link
                            to="/menu"
                            className="btn btn-secondary btn-lg"
                        >

                            Back to Menu

                        </Link>


                    </div>

                </div>


                {/* INGREDIENTS */}

                <div className="card shadow-sm mt-5">

                    <div className="card-body">

                        <h3 className="mb-3">

                            Ingredients

                        </h3>


                        <ul>

                            {meal.ingredients.map(
                                function (ingredient, index) {

                                    return (

                                        <li key={index}>

                                            {ingredient}

                                        </li>

                                    );

                                }
                            )}

                        </ul>

                    </div>

                </div>


                {/* INSTRUCTIONS */}

                <div className="card shadow-sm mt-4">

                    <div className="card-body">

                        <h3 className="mb-3">

                            Instructions

                        </h3>


                        <ol>

                            {meal.instructions.map(
                                function (instruction, index) {

                                    return (

                                        <li
                                            key={index}
                                            className="mb-2"
                                        >

                                            {instruction}

                                        </li>

                                    );

                                }
                            )}

                        </ol>

                    </div>

                </div>


            </div>

        </>

    );

}