import React from 'react'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'

import "./Sidebar.css"
import { BsCart4 } from "react-icons/bs";
function Sidebar() {
  return (
    <>
    <section className='sidebar'>
      <div className="logo-container">
        <h1><BsCart4/></h1>
      </div>
    <Category/>
    <Price/>
    <Colors/>
    </section>
    </>
  )
}

export default Sidebar