import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="main-header">
            <div className="main-header__inner">
                <div className="main-header__left">
                    <Link to="/">Raw Material Inventory</Link>
                </div>
                <div className="main-header__right">
                    <Link to ="/">Home Foods</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;