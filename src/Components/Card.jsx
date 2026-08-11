import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";


export default function Card({ food }) {

    let [count, setCount] = useState(1);


    let addToCartStore = useCartStore(
        function (state) {
            return state.addToCart;
        }
    );


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

        /*
            DummyJSON recipes don't have
            a price field.

            So we create a price based
            on the recipe ID.
        */

        let price = Number(food.id) * 3;


        let product = {

            id: food.id,

            title: food.name,

            price: price,

            image: food.image,

            category: food.cuisine,

            quantity: count

        };


        console.log(
            "Product added:",
            product
        );


        addToCartStore(product);


        toast.success(
            food.name + " added to cart"
        );

    }


    // PRICE
    let price = Number(food.id) * 3;


    return (

        <div className="card h-100 shadow-sm">


            {/* IMAGE */}

            <img
                src={food.image}
                className="card-img-top"
                alt={food.name}
                style={{
                    height: "200px",
                    objectFit: "cover"
                }}
            />


            <div className="card-body d-flex flex-column">


                {/* NAME */}

                <h5 className="card-title">

                    {food.name}

                </h5>


                {/* CUISINE */}

                <p className="card-text">

                    Cuisine: {food.cuisine}

                </p>


                {/* PRICE */}

                <p className="card-text">

                    Price:

                    <mark className="bg-warning fw-bold ms-1">

                        $
                        {price * count}

                    </mark>

                </p>


                {/* COUNTER */}

                <div className="d-flex align-items-center justify-content-center mb-3">

                    <button
                        className="btn btn-danger"
                        onClick={decrease}
                    >

                        <i className="bi bi-dash"></i>

                    </button>


                    <span className="mx-3 fw-bold">

                        {count}

                    </span>


                    <button
                        className="btn btn-primary"
                        onClick={increase}
                    >

                        <i className="bi bi-plus"></i>

                    </button>

                </div>


                {/* BUTTONS */}

                <div className="mt-auto">


                    {/* VIEW DETAILS */}

                    <Link
                        to={`/menu/${food.id}`}
                        className="btn btn-outline-dark w-100 mb-2"
                    >

                        <i className="bi bi-eye me-2"></i>

                        View Details

                    </Link>


                    {/* ADD TO CART */}

                    <button
                        className="btn btn-warning w-100"
                        onClick={addToCart}
                    >

                        <i className="bi bi-cart-plus me-2"></i>

                        Add to Cart

                    </button>


                </div>


            </div>

        </div>

    );

}