import React from 'react'
import { useDispatch } from 'react-redux'
import { pizzalist } from '../../Data'
import { addtobasket } from '../../redux/slice'
import "./style.css"

export const Pizza = () => {
    const dispacth = useDispatch()

    return (
        <div>
            <ul className='pizza-list'>
                {pizzalist.map(pizza => <li key={pizza.id} className="pizza">
                    <img src={pizza.img} alt={pizza.name} />
                    <div className='pizza-content'>
                        <h3 className='pizza-name' title={pizza.name}>{pizza.name}</h3>
                        <p className='pizza-desc' title={pizza.dsc}>{(pizza.dsc)}</p>
                        <div className='content-footer center'>
                            <p className='price'>{pizza.price} Azn</p>
                            <button onClick={() => dispacth(addtobasket(pizza))}>+</button>
                        </div>
                    </div>

                </li>)}
            </ul>
        </div>
    )
}
