import React from "react";
import "./Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';

function Header(){
    return(
        <div className="header">
            <div className="header_logo">
                <LanguageIcon className="header_logoImage" fontSize='large'/>
                <h2 className="header_logoTitle">ShopX</h2>
            </div>

            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <div className="nav_item">
                <span className="nav_itemLineOne">Hello Guest</span>
                <span className="nav_itemLineTwo">Sign In</span>
                </div>
                <div className="nav_item">
                <span className="nav_itemLineOne">Your</span>
                <span className="nav_itemLineTwo">Shop</span>
                </div>
                <div className="nav_itemBasket">
                <ShoppingCartIcon/>
                <span className="nav_itemLineTwo nav_basketCount">0</span>

                </div>
            </div>

        </div>
    )
}

export default Header