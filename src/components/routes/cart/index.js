import { Button } from '@material-ui/core'
import React from 'react'
import NavBar from '../../elements/nav'
import Card from './card'
import './cart.css'
import { connect } from 'react-redux'
import { addToCart } from '../../action'

const mapStateToProps = ( state ) =>{
    return{
        cart:state.cart
    }
}

const mapDispatchToProps = (dispatch) =>{

}

const Cart =(props)=>{
    console.log(props)
    return(<div>
        <NavBar/>
        <h1 style={{marginTop:105, textAlign:"center"}}>Cart</h1>
        {props.cart.map(item=>(<Card item={item}/>))}
        
    
        <div style={{margin:"auto"}}>
            <h2>Sub Total:  1000$</h2>
            <Button>Check out</Button>
        </div>
    </div>)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);