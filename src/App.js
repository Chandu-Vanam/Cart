import React from 'react';
import CartItem from './Cartitem';
import Cart from './cart';

function App() {
  return (
    <div className="App">
      <Cart />
      <button onClick={ alertt}>Alert message</button>
    </div>
  );
}

function alertt()
{
  alert('Hello');
}

export default App;
