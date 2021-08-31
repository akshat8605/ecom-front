import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search'
import "./style.css"
import { Link } from 'react-router-dom';

const Navbar = ({auth}) => {
    console.log(auth)
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
                {auth?<button><Link to="/login" style={{color:"white", textDecoration:"none"}}>Logout</Link></button>
                :<button><Link to="/login" style={{color:"white", textDecoration:"none"}}>Login</Link></button>}
            </div>
        </div>
      </>
    )
}

export default Navbar;
