import React from 'react'
import './nav.css'
import logo from '../../../media/cart.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
const NavBar = () =>{
    return(
        <div className="nav_container">
            <img src={logo} width={50} alt="logo"/>


            
            <div style={{alignContent:"center",display:"flex"}}>
                <div style={{alignContent:"center", position:"relative", marginRight:10}}>
                    <input placeholder="Search" style={{marginTop:"5%", height:"50%", width:"300px"}}/>
                    <SearchIcon style={{position:"absolute", top:"35%", right:"10px"}}/>
                </div>
                <button ><ShoppingCartIcon/></button>
               <button> <Link to="/login" style={{color:'white', textDecoration:"none"}}>Login</Link></button>
            </div>
        </div>

    )
}

export default NavBar;