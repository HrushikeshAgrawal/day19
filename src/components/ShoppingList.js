import React,{useState} from 'react'
import ShoppingItem from './ShoppingItem';

const ShoppingList = ({cart}) => {

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