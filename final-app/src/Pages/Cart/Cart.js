import React from 'react'
import { useSelector } from 'react-redux';
import './cart.css'
const Cart = () => {
    const cart = useSelector(state => state.cart);
    const loggedIn=useSelector(state=>state.loggedIn)
  return (
    <div>
    <h2>Cart</h2>
    <div className="cart-wrapper">
      {cart===[]?<h1>Cart is empty.</h1>
    :cart.map(product => (
         <div key={product.id} className='cart-item'>
         <img src={product.url} alt={product.title} />
         <p><b>Name:</b> {product.title}</p>
         <p><b>Price:</b> {product.price}</p>
       </div>
      ))}
      <button className=' cart-btn hover' disabled={!loggedIn} onClick={()=>{
       
      }}>{loggedIn?'Purchase':'Login first'}</button>
    </div>
     
  </div>
  )
}

export default Cart;