import React from 'react'
import { useDispatch } from 'react-redux'
import { pizzalist } from '../../Data'
import { addtobasket } from '../../redux/slice'

export const Pizza = () => {
    const dispacth = useDispatch()

    return (
        <div>
            <ul className='pizza-list'>
                {pizzalist.map(pizza => <li key={pizza.id} className="pizza">
                    <img src={pizza.img} alt={pizza.name} />
                    <h3 className='pizza-name'>{pizza.name}</h3>
                    <p className='pizza-desc'>{pizza.dsc}</p>
                    <div className='content-footer'>
                        <p className='price'>{pizza.price} $</p>
                        <button onClick={() => dispacth(addtobasket(pizza))}>+</button>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}
