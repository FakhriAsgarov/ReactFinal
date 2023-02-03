import React, { useEffect, useState } from 'react'
import './shoppingPage.css'
import { useDispatch } from 'react-redux'
import ShopNavs from '../../Components/Shopping/ShopNavs'
import { useParams } from 'react-router-dom'
import { addToCart } from "../../redux/actions";
import axios from "axios";
const ShoppingPage = () => {
  let {category}=useParams();
  const [products, setProducts] = useState([]);
useEffect(()=>{
const fetchProduct= async()=>{
  console.log(category)
  const{data}=await axios.get(`/api/${category}`)
  setProducts(data);
};
fetchProduct();

},[])
  const dispatch = useDispatch();
  const addProductToCart = (product) => dispatch(addToCart(product));
  const params = useParams();

  return (
    <div className='shop-wrapper'>
      <ShopNavs />
      <div className="shop container">
        {products.map(product => {

          return (
            <div className="product-item" key={product.id}>
              <img src={product.url} alt="" />
              <p><b>Description:</b> {product.title}</p>
              <p><b>Price:</b> {product.price}</p>
              <button className='add-to-cart hover' onClick={() => addProductToCart(product)}> Add To Cart</button>
            </div>)
        }
        )

        }
      </div>
    </div>
  )
}

export default ShoppingPage