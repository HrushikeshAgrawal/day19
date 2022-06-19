import React, {useState, useContext} from 'react'
import { CartContext } from '../context/CartContext';

const AddItem = () => {

    const [cart, setCart] =  useContext(CartContext);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addItemToCart = (e) => {
        e.preventDefault();
        const newItem = {id: 5, name, price}
        setCart(oldItems => [...oldItems, newItem])
    }

  return (
    <div className='form' >
        <form>
            <input value={name} onChange={updateName} placeholder='Enter Product Name' />
            <input value={price} onChange={updatePrice} placeholder='Enter Product Price' />
            <button onClick={addItemToCart} >Add Item</button>
        </form>
    </div>
  )
}

export default AddItem