import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

function header() {
    return <div className="header">
        
            {/* logo on the left -> img */}
            <link to="/">
            <img
             classNam="header__logo"
              src="https://icon2.cleanpng.com/20180706/hby/kisspng-amazon-com-amazon-web-services-1-click-customer-amazone-5b3f84fc3e62e8.0500627615308894682555.jpg"
               alt="img"
               />

            </link>
            
            {/* Search box */}
            <input type="text" className="header__searchInput" />

            {/* 3 Links */}
            {/* Basket icon with number */}
        
    </div>;
}

export default header
