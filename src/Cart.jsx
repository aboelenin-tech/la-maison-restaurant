import React from "react";

import Navbar from "./Components/Navbar";

import { useCartStore } from "./store/cartStore";


export default function Cart() {


    // GET CART

    let cart = useCartStore(
        function (state) {
            return state.cart;
        }
    );


    // FUNCTIONS

    let removeFromCart = useCartStore(
        function (state) {
            return state.removeFromCart;
        }
    );


    let increaseQuantity = useCartStore(
        function (state) {
            return state.increaseQuantity;
        }
    );


    let decreaseQuantity = useCartStore(
        function (state) {
            return state.decreaseQuantity;
        }
    );


    // TOTAL

    let total = cart.reduce(

        function (sum, item) {


            let price =
                Number(item.price) || 0;


            let quantity =
                Number(item.quantity) || 0;


            return sum + price * quantity;


        },

        0

    );


    return (

        <>

            <Navbar />


            <div className="container my-5">


                <h1 className="mb-4">

                    Shopping Cart

                </h1>


                {/* EMPTY CART */}

                {cart.length === 0 ? (

                    <div className="text-center mt-5">

                        <h3>

                            Your cart is empty

                        </h3>


                        <p className="text-muted">

                            Add products from the menu.

                        </p>

                    </div>

                ) : (


                    <>


                        {/* PRODUCTS */}

                        {cart.map(function (item) {


                            let price =
                                Number(item.price) || 0;


                            let quantity =
                                Number(item.quantity) || 0;


                            let itemTotal =
                                price * quantity;


                            return (


                                <div
                                    className="card mb-3 shadow-sm"
                                    key={item.id}
                                >


                                    <div className="card-body">


                                        <div className="row align-items-center">


                                            {/* IMAGE */}

                                            <div className="col-12 col-md-2 text-center">


                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="img-fluid"
                                                    style={{
                                                        height: "120px",
                                                        width: "120px",
                                                        objectFit: "contain"
                                                    }}
                                                />


                                            </div>


                                            {/* INFORMATION */}

                                            <div className="col-12 col-md-4">


                                                <h5>

                                                    {item.title}

                                                </h5>


                                                <p>

                                                    Category:
                                                    {" "}
                                                    {item.category}

                                                </p>


                                                <p>

                                                    Price:
                                                    {" "}
                                                    ${price.toFixed(2)}

                                                </p>


                                            </div>


                                            {/* QUANTITY */}

                                            <div className="col-12 col-md-3">


                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        decreaseQuantity(
                                                            item.id
                                                        )
                                                    }
                                                >

                                                    -

                                                </button>


                                                <span className="mx-3 fw-bold">

                                                    {quantity}

                                                </span>


                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() =>
                                                        increaseQuantity(
                                                            item.id
                                                        )
                                                    }
                                                >

                                                    +

                                                </button>


                                            </div>


                                            {/* TOTAL */}

                                            <div className="col-12 col-md-2">


                                                <h5>

                                                    ${itemTotal.toFixed(2)}

                                                </h5>


                                            </div>


                                            {/* DELETE */}

                                            <div className="col-12 col-md-1">


                                                <button
                                                    className="btn btn-outline-danger"
                                                    onClick={() =>
                                                        removeFromCart(
                                                            item.id
                                                        )
                                                    }
                                                >

                                                    <i className="bi bi-trash"></i>

                                                </button>


                                            </div>


                                        </div>


                                    </div>


                                </div>

                            );

                        })}


                        {/* GRAND TOTAL */}

                        <div className="text-end mt-4">


                            <h3>

                                Total:
                                {" "}
                                ${total.toFixed(2)}

                            </h3>


                            <button className="btn btn-success">

                                Checkout

                            </button>


                        </div>


                    </>

                )}


            </div>

        </>

    );

}