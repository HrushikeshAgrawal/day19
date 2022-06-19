import React,{createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([
        {
            id: 1,
            name: "Shoes",
            price: 1000
        },
        {
          id: 2,
          name: "Shirt",
          price: 2000
      },
      {
          id: 3,
          name: "Pants",
          price: 500
      },
    ])

    return (
        <CartContext.Provider value={[cart, setCart]} >
            {props.children}
        </CartContext.Provider>
    )
}