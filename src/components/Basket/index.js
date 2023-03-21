import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtobasket, removefrombasket } from '../../redux/slice/basket.slice'
import "./style.css"
export const Basket = () => {
    const { pizzas, mainTotalPrice } = useSelector(state => state.basket.value)
    const dispacth = useDispatch()
    const basketOverflow = useRef(null);
    const [basketHeight, setBasketHeight] = useState(0);
    useEffect(() => {
        setBasketHeight(basketOverflow.current.clientHeight)
    }, [pizzas])
    return (
        <div className='Basket'>

            <ul ref={basketOverflow}
                style={{
                    overflowY: basketHeight > 370 ? 'scroll' : 'auto',
                    paddingRight: basketHeight > 370 ? '10px' : '0',
                    maxHeight: basketHeight > 370 ? '375px' : 'auto'
                }}>
                {pizzas.length ?
                    pizzas.map(pizza => (
                        <li className="basket-pizza center" key={pizza.id}>
                            <img src={pizza.img} alt={pizza.name} />
                            <div className='center'>
                                <h3 className="pizza-name" title={pizza.name}>{pizza.name}</h3>
                                <div className="content-footer center">
                                    <p className="price">{(pizza.totaltPrice).toFixed(2)} Azn</p>
                                    <div className='center'>
                                        <button onClick={() => dispacth(removefrombasket(pizza.id))}>-</button>
                                        <span>{pizza.count}</span>
                                        <button onClick={() => dispacth(addtobasket(pizza))}>+</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )) : <p className='not-buy-pizza'>Have you not tasted our pizzas yet?😒</p>
                }
            </ul >
            {
                pizzas.length ? < div className='buy-pizza center'>
                    <button>Buy pizza</button>
                    <span>{mainTotalPrice.toFixed(2)} Azn</span>
                </div> : null
            }
        </div >
    )
}
