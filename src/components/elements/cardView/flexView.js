import React from 'react'
import Card from '../card/index.js'
import './styles.css'

const FlexView = ({products}) => {
 
    return (
       <>
         <div className="cards">
         {
             products.map((e)=>{
                return( <Card e={e}/>)
             })
         }
         </div>
       </>
    )
}

export default FlexView;
