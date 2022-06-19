import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Nav from './components/Nav';

import {CartProvider} from "./context/CartContext";
import AddItem from './components/AddItem';

function App() {
  
  return (
    <CartProvider>
      <div className="App">
        <Nav />
        <AddItem/>
        <ShoppingList />
      </div>
    </CartProvider>
  );
}

export default App;
