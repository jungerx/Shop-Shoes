import React from 'react'

function Button(props) {
 const {onClichHandler,value,title}=props

  return (
    <button onClick={onClichHandler} value={value} className='btns'>{title}</button>
  )
}

export default Button