import React from "react";
import "./style.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Cart = ({ data }) => {
  return (
    <>

      <div className="cart">

        <div className="cart-items">

          <div className="crt-img">
            <img src={data.img} alt="" />
          </div>
          <div className="crt-dist">
            <div>
            <p>{data.title}</p>
            <p>{data.prize}</p>
            </div>
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
