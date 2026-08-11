import React from "react";

import {
    Routes,
    Route
} from "react-router-dom";

import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Cart from "./Cart";
import MealDetails from "./MealDetails";


function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/menu"
                element={<Menu />}
            />

            <Route
                path="/menu/:id"
                element={<MealDetails />}
            />

            <Route
                path="/about"
                element={<About />}
            />

            <Route
                path="/cart"
                element={<Cart />}
            />

        </Routes>

    );

}

export default App;