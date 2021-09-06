import React from "react";
import "./style.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
const Cart = ({ data, id }) => {
  return (
    
    <>
  
      <div className="cart">

        <div className="cart-items">

          <div className="crt-img">
            <img src={data.img} alt="" />
          </div>
          <div className="crt-dist">
           <Link to={`/product/${id}`}>
             <div>
            <p>{data.title}</p>
            <p>{data.prize}</p>
            </div>
            </Link>
             <div className="add-cart">
                 <span>Add</span>
                <ShoppingCartIcon/>
             </div>
          </div>
          
        </div>

      </div>

    </>
  );
};

export default Cart;
