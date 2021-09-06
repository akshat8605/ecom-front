import React from 'react'
// import Slider from 'react-slick';
import Carts from '../../elements/card/index';
import Banner from '../../elements/offerBnnr/index';
import Slide from '../../elements/slider/index';

import Navbar from '../../elements/nav'; 
import { useHistory } from 'react-router-dom';



const products = [
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
    {
        img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80",
        title:"Omega Planet",
        prize:"93$"
    },
    {
        img:"  https://images.unsplash.com/photo-1537963447914-dbc04b81de27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
        title:"Razer",
        prize:"193$"
    },
    {
        img:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
        title:"Nike",
        prize:"33$ 13% off"
    },
     
    {
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



const Loding = ({auth, setSearch}) => {
    let history = useHistory()
    const onSearch=(e)=>{
        setSearch(e.target.value)
        history.push('/search')
    }
    return (
        <div>
           <Navbar auth={auth} onSearch={onSearch}/>
           <Banner/>
           <Slide data={products}  title="best Selling"/>
           <Slide data={products}  title="Hot today"/>
           <Slide data={products}  title="Offer"/>
           <Carts products={products}/>
        </div>
    )
}

export default Loding;
