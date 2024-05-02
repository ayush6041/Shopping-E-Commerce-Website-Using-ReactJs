import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  const  subscribe=()=> {
    alert("Subscribed")
  }
  return (
    <div className='NewsLetter'>
        <h1>Get Exclusive offer on your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email"placeholder='Your Email ID' name="" id="" />
            <button onClick={subscribe}>Subscribe</button>
        </div>
    </div>
  )
}
