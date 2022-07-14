import React from 'react'
import './cart.css'
import { CartImage } from '../../images/index'

export default function Cart(props) {
  const {cartCount} = props;
  return (
    <div className='card-wrapper'>
        <img className='cardImage' src={CartImage} alt="cart image"  />
        <div className="cartNumber">{cartCount}</div>
    </div>
  )
  }

  Cart.defaultProps = {
   cartCount:"+"
  }
  