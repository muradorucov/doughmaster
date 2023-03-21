import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../slice/basket.slice";
import searchPizzaSlice from "../slice/pizzas.slice"

export const GlobalStore = configureStore({
    reducer: {
        basket: basketSlice,
        pizzas: searchPizzaSlice
    }
})