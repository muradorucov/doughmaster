import { createSlice } from "@reduxjs/toolkit";
import { pizzalist } from "../../Data";

const searchPizzaSlice = createSlice({
    name: "pizza",
    initialState: {
        value: [...pizzalist]
    },
    reducers: {
        serachPizza: (state, action) => {
            state.value = [...action.payload]
        }
    }
})

export const { serachPizza } = searchPizzaSlice.actions

export default searchPizzaSlice.reducer