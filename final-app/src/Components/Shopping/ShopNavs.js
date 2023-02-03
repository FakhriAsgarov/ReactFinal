import React from 'react'
import { Link } from 'react-router-dom'
import './shopNavs.css'
const ShopNavs = () => {
  return (
    <div className='navigation-filter'>
      <ul>
        <li className='hover'>T-SHIRTS</li>
        <li className='hover'>TROUSERS</li>
        <li className='hover'>COATS</li>
        <li className='hover'>SNEAKERS</li>
        <li className='cart-link hover'><Link to='/cart'>CART</Link> </li>
      </ul>
    </div>
  )
}

export default ShopNavs