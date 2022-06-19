import React from 'react'

const Nav = ({cart}) => {
  return (
    <div className='navbar' >
        <h1>Shopping Website</h1>
        <p>Your cart has <span>{cart.length}</span> items</p>
    </div>
  )
}

export default Nav