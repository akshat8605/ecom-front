import React from 'react'
import './nav.css'
import logo from '../../../media/cart.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const NavBar = () =>{
    return(
        <div className="nav_container">
            <img src={logo} width={50} alt="logo"/>
            <div style={{alignContent:"center",display:"flex"}}>
                <div style={{alignContent:"center", position:"relative", marginRight:10}}>
                    <input placeholder="Search" style={{marginTop:"5%", height:"50%", width:"300px"}}/>
                    <img alt="search" style={{position:"absolute", top:"20%", right:"10px"}} src="http://assets.stickpng.com/thumbs/585e4ad1cb11b227491c3391.png" width={20}/>
                </div>
                <button ><ShoppingCartIcon/></button>
                <button>Login</button>
            </div>
        </div>

    )
}

export default NavBar;