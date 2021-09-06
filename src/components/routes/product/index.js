import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import NavBar from '../../elements/nav'
import Slider from '../../elements/slider'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const products = [
    {
        id:1,
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title:"Nike Air",
        prize:"63$"
    },
    {
        id:2,
        img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
        title:"Gucci Bag",
        prize:"993$"
    },
    {
        id:3,
        img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80",
        title:"Omega Planet",
        prize:"93$"
    },
    {   id:4,
        img:"  https://images.unsplash.com/photo-1537963447914-dbc04b81de27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
        title:"Razer",
        prize:"193$"
    },
    {
        id:5,
        img:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
        title:"Nike",
        prize:"33$ 13% off"
    },
     
    {
        id:6,
        img:"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title:"Faith & Yarn",
        prize:"13$"
    },

    {
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        title:"Nike Air",
        prize:"63$"
    },
    {
        img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
        title:"Gucci Bag",
        prize:"993$"
    },
]


const Product =()=>{
    const [currentProduct, setCurrentProduct] = useState({})
    let {id} = useParams();
    const getProduct=()=>{
       setCurrentProduct(products[id])
    }
    useEffect(() => {
        getProduct()
    }, [id])
    console.log(currentProduct)
    return(
    <div>
        <NavBar/>
        <div style={{marginTop:67, padding:20, display:"flex"}}>
            <img src={currentProduct.img} width="350" height="250"/>
            <div style={{alignContent:'center', justifyContent:"center", display:"flex", flexDirection:'column', margin:"auto"}}>
                <h1>{currentProduct.title}</h1>
                <h3>{currentProduct.prize}</h3>
                <div className="add-cart">
                 <span>Add</span>
                <ShoppingCartIcon/>
             </div>
            </div>
        </div>
        <Slider data={products}  title="Offer"/>
    </div>)
}

export default Product;