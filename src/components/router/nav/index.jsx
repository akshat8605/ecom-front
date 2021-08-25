import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search'
import "./style.css"

const Navbar = () => {
    return (
      <>
        <div className="navbar">
            <div>
                <AppleIcon className="icon"/>
            </div>
            <div className="menu">
                <div className="input">
                    <input type="text"  placeholder="Search"/>
                    <SearchIcon className="srch-icon"/>
                </div>
                <button><ShoppingCartIcon/></button>
                <button>Login</button>
            </div>
        </div>
      </>
    )
}

export default Navbar;
