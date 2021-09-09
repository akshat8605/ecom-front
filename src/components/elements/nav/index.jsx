import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search'
import "./style.css"
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchField } from '../../action';
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';


const mapStateToProps = (state) => {
    return{
        searchField:state.searchField
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setSearchField: (event)=>dispatch(setSearchField(event.target.value))
    }
    
}

const Navbar = ({auth,  searchField, setSearchField}) => {
    let history = useHistory()
    const onKeyDown=(event)=>{
        
        if(event.keyCode===13){
            history.push("/search")
        }
    }
    return (
      <>
        <div className="navbar">
            <div>
                <Link to="/">
                    <AppleIcon className="icon"/>
                </Link>
            </div>
            <div className="menu">
                <div className="input">
                    <input type="text"  placeholder="Search" onChange={setSearchField} onKeyDown={onKeyDown}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
