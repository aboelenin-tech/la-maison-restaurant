import { create } from "zustand";
import { persist } from "zustand/middleware";

export let useCartStore = create(

    persist(

        function (set) {

            return {

                cart: [],


                // ADD PRODUCT
                addToCart: function (product) {

                    set(function (state) {

                        let existingProduct = state.cart.find(
                            function (item) {
                                return item.id === product.id;
                            }
                        );


                        // Product already exists
                        if (existingProduct) {

                            return {

                                cart: state.cart.map(
                                    function (item) {

                                        if (item.id === product.id) {

                                            return {
                                                ...item,
                                                quantity:
                                                    item.quantity +
                                                    product.quantity
                                            };

                                        }

                                        return item;

                                    }
                                )

                            };

                        }


                        // New product
                        return {

                            cart: [
                                ...state.cart,
                                product
                            ]

                        };

                    });

                },


                // REMOVE PRODUCT
                removeFromCart: function (id) {

                    set(function (state) {

                        return {

                            cart: state.cart.filter(
                                function (item) {
                                    return item.id !== id;
                                }
                            )

                        };

                    });

                },


                // INCREASE
                increaseQuantity: function (id) {

                    set(function (state) {

                        return {

                            cart: state.cart.map(
                                function (item) {

                                    if (item.id === id) {

                                        return {
                                            ...item,
                                            quantity:
                                                item.quantity + 1
                                        };

                                    }

                                    return item;

                                }
                            )

                        };

                    });

                },


                // DECREASE
                decreaseQuantity: function (id) {

                    set(function (state) {

                        return {

                            cart: state.cart
                                .map(
                                    function (item) {

                                        if (item.id === id) {

                                            return {
                                                ...item,
                                                quantity:
                                                    item.quantity - 1
                                            };

                                        }

                                        return item;

                                    }
                                )
                                .filter(
                                    function (item) {
                                        return item.quantity > 0;
                                    }
                                )

                        };

                    });

                },


                // CLEAR CART
                clearCart: function () {

                    set({
                        cart: []
                    });

                }

            };

        },

        {
            name: "restaurant-cart"
        }

    )

);