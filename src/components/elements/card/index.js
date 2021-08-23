import React from 'react'
import "./style.css";


const Card =({e})=>(
    <div className="cart">
                    <div className="cart-items">
                        <div className="crt-img">
                        <img src={e.img} alt="" />
                        </div>
                      <div className="crt-dist">
                        <p>{e.title}</p>
                        <p>{e.prize}</p>
                      </div>
                    </div>
    </div>
)

export default Card