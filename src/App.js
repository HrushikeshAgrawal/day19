import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Nav from './components/Nav';

function App() {
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
    <div className="App">
      <Nav cart={cart} />
      <ShoppingList cart={cart} />
    </div>
  );
}

export default App;
