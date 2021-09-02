import React from 'react'
import "./style.css";
import Cart from "./cart";




const Carts = ({products}) => {
 
    return (
       <>
         <h1 className="prd-titl">Products</h1>
         <div className="carts">
           {
               products.map((e,indx)=>
               <Cart data = {e}  key={indx}/>
               )
           }
         </div>
       </>
    )
}

export default Carts;


