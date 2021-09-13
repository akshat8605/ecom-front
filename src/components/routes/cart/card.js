import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton } from '@material-ui/core';

const Card =({item})=>{
    var product = item.product
    var quantity = item.quantity
    return(<div className="cart_card_container">
        <img width="300px" src={product.image} alt="cart image"/>
        <div style={{ width:"100%", padding:10}}>
            <h2 >{product.title}</h2>
            <div style={{display:"flex", justifyContent:"space-between", marginTop:10}}>
                <h3>Price: {product.prize}</h3>
                <div style={{textAlign:"center"}}>
                    <h3>Quantity</h3>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton disabled>
                        {quantity}
                    </IconButton>
                    <IconButton>
                        <RemoveIcon/>
                    </IconButton>

                </div>
            </div>
        </div>
    </div>)
}

export default Card;