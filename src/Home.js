import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/A_black_background.jpg" alt="" className="home_image" />

                    <div className="home_row">
                        <Product
                            id = "11111"
                            title = "Apple iPhone 12 Pro Max Midnight Green 64gb"
                            price = {999.99}
                            rating = {5}
                            image = "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/identify-iphone-11pro-max.jpg"
                        />
                        <Product
                            id = "44444"
                            title = "Apple iPhone 12 Pro Max Midnight Green 128gb"
                            price = {1099.99}
                            rating = {5}
                            image = "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/2021-iphone12-mini-colors.png"
                        />
                        <Product
                            id = "22233"
                            title = "Apple iPhone 12 Pro Midnight Green 64gb"
                            price = {699.99}
                            rating = {4}
                            image = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1692912410963"
                        />
                    </div>
                    <div className="home_row">
                        <Product
                            id = "33333"
                            title = "Apple iPhone X Gold 64gb"
                            price = {599.99}
                            rating = {3.5}
                            image = "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/2022-spring-iphone13-pro-max-colors.png"
                        />
                        <Product
                            id = "22222"
                            title = "Apple iPhone 11 Pro Matte Green 128gb"
                            price = {699.99}
                            rating = {4.5}
                            image = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312"
                        />
                        
                        <Product
                            id = "55555"
                            title = "Apple iPhone SE 64gb"
                            price = {199.99}
                            rating = {4}
                            image = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921"
                        />
                    </div>
                    <div className="home_row">
                        <Product
                            id = "11311"
                            title = "Apple iPhone 12 Pro Max Midnight Green 64gb"
                            price = {999.99}
                            rating = {5}
                            image = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290654"
                        />
                        <Product
                            id = "21222"
                            title = "Apple iPhone 11 Pro Matte Green 128gb"
                            price = {699.99}
                            rating = {4.5}
                            image = "https://images.macrumors.com/t/yQ9qjY9aEl1VGRNOPash4QjlfPQ=/1600x0/article-new/2020/10/iphone-13-color-lineup.jpg"
                        />
                        <Product
                            id = "22253"
                            title = "Apple iPhone 12 Pro Midnight Green 64gb"
                            price = {699.99}
                            rating = {4}
                            image = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290559"
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home