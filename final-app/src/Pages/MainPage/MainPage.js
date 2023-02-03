import React from 'react'
import './MainPage.css'

const MainPage = () => {
 
   
  return (
    <div className='main-page'>
        <div className='for men'>
            <div className="shadow main-shadow" >
             <a href="/men">MEN</a>   
            </div>
        </div>
        <div className='for women'>
            <div className="shadow main-shadow" >
            <a href="/women">WOMEN</a>
            </div>
        </div>
        <div className='for kids'>
            <div className="shadow main-shadow">
            <a href="/kids">KIDS</a>
            </div>
        </div>
    </div>
  )
}

export default MainPage