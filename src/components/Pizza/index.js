import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtobasket } from '../../redux/slice/basket.slice'
import Pagination from '../Pagination'
import "./style.css"

export const Pizza = () => {
    const dispacth = useDispatch()
    const pizzalist = useSelector(state => state.pizzas.value)
    console.log(pizzalist);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * 9;
    const indexOfFirstItem = indexOfLastItem - 9;
    const currentItems = pizzalist.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <ul className='pizza-list'>
                {currentItems.length ? currentItems.map(pizza => <li key={pizza.id} className="pizza">
                    <img src={pizza.img} alt={pizza.name} />
                    <div className='pizza-content'>
                        <h3 className='pizza-name' title={pizza.name}>{pizza.name}</h3>
                        <p className='pizza-desc' title={pizza.dsc}>{(pizza.dsc)}</p>
                        <div className='content-footer center'>
                            <p className='price'>{pizza.price} Azn</p>
                            <button onClick={() => dispacth(addtobasket(pizza))}>+</button>
                        </div>
                    </div>

                </li>) : <p className='not-pizza'>We don't have any pizza matching this name 😒. Look at the others!</p>}
            </ul>
            <Pagination
                itemsPerPage={9}
                totalItems={pizzalist.length}
                paginate={paginate}
            />
        </div>
    )
}
