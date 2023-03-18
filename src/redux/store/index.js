import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../slice";

export const GlobalStore = configureStore({
    reducer: {
        basket: basketSlice
    }
})