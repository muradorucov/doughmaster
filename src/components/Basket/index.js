import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtobasket, removefrombasket } from '../../redux/slice'

export const Basket = () => {
    const { pizzas, mainTotalPrice } = useSelector(state => state.basket.value)
    const dispacth = useDispatch()
    return (
        <div className='Basket'>
            <ul>
                {pizzas.length > 0 ?
                    <>
                        {pizzas.map(pizza => (
                            <li className="basket-pizza" key={pizza.id}>
                                <img src={pizza.img} alt={pizza.name} />
                                <div>
                                    <h3 className="pizza-name">{pizza.name}</h3>
                                    <div className="content-footer">
                                        <p className="price">{(pizza.totaltPrice).toFixed(2)} $</p>
                                        <div>
                                            <button onClick={() => dispacth(removefrombasket(pizza.id))}>-</button>
                                            <span>{pizza.count}</span>
                                            <button onClick={() => dispacth(addtobasket(pizza))}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                        < div >
                            <button>Buy pizza</button>
                            <span>{mainTotalPrice.toFixed(2)}</span>
                        </div>
                    </>
                    : <p>Siz hələdə bizim pizzaların dadına baxmamısınızz?😒
                    </p>
                }


            </ul >
        </div >
    )
}
