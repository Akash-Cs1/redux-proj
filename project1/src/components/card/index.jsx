import React from 'react'
import { mobile } from '../../images'
import './card.css'
import Button from '../button'

export default function Card() {
  return (
    <div className='cardWrapper'>
        <img src={mobile} alt="" className="mobileImg" />
        <p>I-phone <br></br>20,000</p>
        <Button />
    </div>
  )
}
