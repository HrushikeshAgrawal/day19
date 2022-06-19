import React,{useState, useContext} from 'react'
import ShoppingItem from './ShoppingItem';

import { CartContext } from '../context/CartContext';

const ShoppingList = () => {

  const [cart,setCart] = useContext(CartContext);

  return (
      <>
    {
        cart.map( item => (
            <ShoppingItem item={item} />
        ))
    }
    </>
  )
}

export default ShoppingList