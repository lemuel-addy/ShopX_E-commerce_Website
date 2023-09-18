import React from "react";
import "./Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header(){
    const [{basket},dispatch]=useStateValue();
    return(
        <div className="header">
            <Link to ="/" style={{textDecoration:"none"}}>
                <div className="header_logo">
                    <AppleIcon className="header_logoImage" fontSize='large'/>
                    <h2 className="header_logoTitle">ShopX</h2>
                </div>
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
                <Link to="/login" style={{textDecoration:"none"}}>
                    <div className="nav_item">
                        <span className="nav_itemLineOne">Hello Guest</span>
                        <span className="nav_itemLineTwo">Sign In</span>
                    </div>
                </Link>
                
                <div className="nav_item">
                <span className="nav_itemLineOne">Your</span>
                <span className="nav_itemLineTwo">Cart</span>
                </div>
                <Link to="/checkout" style={{textDecoration: "none"}}>
                    <div className="nav_itemBasket">
                    <ShoppingCartIcon/>
                    <span className="nav_itemLineTwo nav_basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Header