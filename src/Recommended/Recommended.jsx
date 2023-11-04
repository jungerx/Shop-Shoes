import React from 'react'
import "./Recommended.css"
import Button from '../components/Button'
function Recommended({handleClick}) {
  return (
    <>
    <h2 className='recommended-title'>Recommended</h2>
    <div className="recommended-flex">
      <Button onClichHandler={handleClick} value="" title="All Products"/>
      <Button onClichHandler={handleClick} value="Nike" title="Nike"/>
      <Button onClichHandler={handleClick} value="Adidas" title="Adidas"/>
      <Button onClichHandler={handleClick} value="Puma" title="Puma"/>
      <Button onClichHandler={handleClick} value="Vans" title="Vans"/>
    </div>
    </>
  )
}

export default Recommended