import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtobasket } from '../../redux/slice/basket.slice'
import "./style.css"

export const Pizza = () => {
    const dispacth = useDispatch()
    const pizzalist = useSelector(state => state.pizzas.value)
    return (
        <div>
            <ul className='pizza-list'>
                {pizzalist.length ? pizzalist.map(pizza => <li key={pizza.id} className="pizza">
                    <img src={pizza.img} alt={pizza.name} />
                    <div className='pizza-content'>
                        <h3 className='pizza-name' title={pizza.name}>{pizza.name}</h3>
                        <p className='pizza-desc' title={pizza.dsc}>{(pizza.dsc)}</p>
                        <div className='content-footer center'>
                            <p className='price'>{pizza.price} Azn</p>
                            <button onClick={() => dispacth(addtobasket(pizza))}>+</button>
                        </div>
                    </div>

                </li>): <p className='not-pizza'>Bu ada uyğun pizzamız yoxdur 😒. Digərlərinə bax!</p>}
            </ul>
        </div>
    )
}
