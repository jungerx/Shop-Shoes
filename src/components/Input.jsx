import React from 'react'

function Input(props) {
  const {handleChange,value,title,name,color}=props
  return (
    <div>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={value} name={name}
           />
          <span className="checkmark" style={{backgroundColor:color}}></span>{title}
        </label>
    </div>
  )
}

export default Input