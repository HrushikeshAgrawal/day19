import React, {useContext} from 'react'

import { CartContext } from '../context/CartContext'

const Nav = () => {

  const [cart,setCart] = useContext(CartContext);

  return (
    <div className='navbar' >
        <h1>Shopping Website</h1>
        <p>Your cart has <span>{cart.length}</span> items</p>
    </div>
  )
}

export default Nav