import React from 'react'
import "./style.css";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { IconButton } from '@material-ui/core';

const Card =({e})=>(
    <div className="cart">
                    <div className="cart-items">
                        <div className="crt-img">
                        <img src={e.img} alt="" />
                        </div>
                        
                          <div className="crt-dist">
                            <p className="card_title">{e.title}</p>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                              <p className="card_price">{e.prize}</p>
                              <IconButton style={{color:"#212121"}}>
                              <AddShoppingCartIcon />
                              </IconButton>
                            </div>
                         
                      </div>
                    </div>
    </div>
)

export default Card