import React from "react";
import "./Product.css";

function Product(){
    return(
        <div>
            <div className="product">
                <div className="product_info">
                    <p>Title</p>
                    <p className="product_price">$20</p>
                    <div className="product_rating">⭐️⭐️⭐️</div>
                </div>
                <img src="https://images.macrumors.com/t/yQ9qjY9aEl1VGRNOPash4QjlfPQ=/1600x0/article-new/2020/10/iphone-13-color-lineup.jpg" alt="product_image" />
                <button>
                    
                </button>
            </div>
        </div>
    )
}

export default Product

