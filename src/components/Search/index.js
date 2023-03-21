import React from 'react'
import { useDispatch } from 'react-redux'
import { pizzalist } from '../../Data'
import { serachPizza } from '../../redux/slice/pizzas.slice'

export const Search = () => {
    const dispatch = useDispatch()
    const searchHandlePizza = (q) => {
        let sList = pizzalist.filter(pizza => pizza.name.toLowerCase().includes(q.toLowerCase()))
        dispatch(serachPizza(sList))
    }
    return (
        <input type="search" placeholder='Pizza Axtar ...'
            onChange={(e) => searchHandlePizza(e.target.value)} />
    )
}
