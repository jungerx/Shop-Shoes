import React from 'react'
import {FiHeart} from 'react-icons/fi'
import { AiOutlineShoppingCart,AiOutlineUser } from "react-icons/ai";
import "./Nav.css"
function Nav(props) {
  const { handleInputChange, query }=props
  return (
    <nav>
    <div className='nav-container'>
      <input type="text" 
      className='search-input'
      onChange={handleInputChange}
      value={query}
      placeholder='Enter your search shoes'/>
    </div>
    <div className="profile-container">
      <a href="#">
        <FiHeart className="nav-icons"/>
      </a>
      <a href="#">
        <AiOutlineShoppingCart className="nav-icons"/>
      </a>
      <a href="#" >
        <AiOutlineUser className="nav-icons"/>
      </a>
    </div>
    </nav>
  )
}

export default Nav