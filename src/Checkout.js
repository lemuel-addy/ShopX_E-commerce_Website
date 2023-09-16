import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout(){
    return (
        <div className="checkout">
            <div className="checkout_left">
                <div>
                    <h2 className="checkout_title">
                        Your Shopping Cart
                    </h2>
                    <CheckoutProduct/>
                    <CheckoutProduct/>
                    <CheckoutProduct/>

                </div>

            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout