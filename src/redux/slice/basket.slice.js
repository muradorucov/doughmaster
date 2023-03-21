import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        value: {
            pizzas: [],
            mainTotalPrice: 0
        }
    },
    reducers: {
        addtobasket: (state, action) => {
            let item = state.value.pizzas.find(pizza => pizza.id === action.payload.id)
            if (!item) {
                state.value = {
                    mainTotalPrice: state.value.mainTotalPrice + action.payload.price,
                    pizzas: [...state.value.pizzas, {
                        id: action.payload.id,
                        name: action.payload.name,
                        img: action.payload.img,
                        price: action.payload.price,
                        totaltPrice: action.payload.price,
                        count: 1
                    }]
                }
            } else {
                state.value.mainTotalPrice += action.payload.price
                state.value.pizzas.forEach(element => {
                    if (element.id === action.payload.id) {
                        element.count++
                        element.totaltPrice += element.price
                    }
                })
            }
        },
        removefrombasket: (state, action) => {
            state.value.pizzas.forEach(pizza => {
                if (pizza.id === action.payload) {
                    pizza.count--
                    pizza.totaltPrice -= pizza.price
                    if (!pizza.count) {
                        state.value.pizzas = state.value.pizzas.filter(pizza => pizza.id !== action.payload)
                    }
                    state.value.mainTotalPrice -= pizza.price
                }
            })
        }
    }
})

export const { addtobasket, removefrombasket } = basketSlice.actions

export default basketSlice.reducer