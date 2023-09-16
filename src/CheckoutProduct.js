import React from 'react'
import "./CheckoutProduct.css";


function CheckoutProduct() {
  return (
        <div className="checkoutProduct">
            <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/identify-iphone-11pro-max.jpg" alt="" className="checkoutProduct_image" />
            <div className='checkoutProduct_info'>
            <p className="checkoutProduct_title">Apple iPhone 15 Pro Max 128gb</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>1999.99</strong>
            </p>
            <div className="checkoutProduct_rating">
                ⭐️⭐️⭐️⭐️⭐️
            </div>
            <button>Remove from Cart</button>
            </div>

        </div>

  )
}

export default CheckoutProduct

/* <img src={image} />
            <div className="checkoutProduct_info">
                <p>{title}</p>
                <p className="checkProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i)=>(
                        <p>⭐️</p>
                    ))}
                </div>
            </div>
            
            <button>Add to Basket</button> */