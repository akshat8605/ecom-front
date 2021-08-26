import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search'
import "./style.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <>
        <div className="navbar">
            <div>
                <Link to="/" style={{color:"white", textDecoration:"none"}}><AppleIcon className="icon"/></Link>
            </div>
            <div className="menu">
                <div className="input">
                    <input type="text"  placeholder="Search"/>
                    <SearchIcon className="srch-icon"/>
                </div>
                <button><ShoppingCartIcon/></button>
                <button><Link to="/login" style={{color:"white", textDecoration:"none"}}>Login</Link></button>
            </div>

        </div>
      </>
    )
}

export default Navbar;
