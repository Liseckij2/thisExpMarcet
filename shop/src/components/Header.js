import React, {useState} from "react"

import { FaCcApplePay } from "react-icons/fa";

export default function Header () {
    let [cartOpen,  setCardOpen] = useState(false)
    return (
        <header>
            <div>
                <span className='logo'>
House Staff
                </span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaCcApplePay class name='shop-card-button'/>
                </div>
                <div className='presentation'></div>

        </header>
    )
}