import React from 'react'
import './navbar.css'
import logo from '../../images/project_logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    let lastScroll=0;
    window.addEventListener('scroll',()=>{
       const curScroll=window.pageYOffset;
       let nav= document.querySelector('.navbar')
       if(curScroll>lastScroll){
        nav.style.top='-100%'
       }
       else{
        nav.style.top=0;
       }
       lastScroll=curScroll;
       
    })
  return (
    <nav className='navbar'>
       <div className="logo">
      <Link to='/'><img src={logo} alt="" /></Link>  
        </div> 
       <div className="about-link"><Link to='/about'>ABOUT US</Link> </div>
       <button className="login-link hover"><Link to='/login'>Login</Link></button>
       <div className='cart-link hover'><Link to='/cart'>CART</Link></div>
    </nav>
  )
}

export default Navbar