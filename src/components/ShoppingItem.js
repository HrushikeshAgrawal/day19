import React from 'react'

const ShoppingItem = ({item}) => {
  return (
    <div>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
    </div>
  )
}

export default ShoppingItem