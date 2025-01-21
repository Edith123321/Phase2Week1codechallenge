import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import ProductList from './Components/ProductList/ProductList';
import Cart from './Components/Cart/Cart';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const[cartItems, setCartItems]=useState([])

  return (
    <div>
      <NavBar setSearchValue={setSearchValue} cartCount={cartItems.length}/>
      <ProductList searchValue={searchValue} cartItems={cartItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
};

export default App;
