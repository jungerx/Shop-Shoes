import React from 'react'
import {AiFillStar} from "react-icons/ai";
import {BsFillBagCheckFill} from "react-icons/bs";
function Card(props) {
  const { img, title, star, reviews, prevPrice, newPrice }=props
  return (
    <>
      <div className="card">
          <img src={img} alt={title} className='card-img'/>
          <div className="card-detail">
            <h3 className='card-title'>{title}</h3>
            <div className="card-reviews">
              {star}
              {star}
              {star}
              {star}
              <span className='total-reviews'>{reviews}</span>
            </div>
            <div className="card-price">
              <div className="price">
                <del>{prevPrice}</del> ${newPrice}
              </div>
              <div className="bag">
                <BsFillBagCheckFill className='bag-icon'/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card