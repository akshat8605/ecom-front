// import React from 'react'
import { useState } from 'react';
import NavBar from '../../elements/nav'
import './login.css'
import { Link } from 'react-router-dom';
const Singup = () => {
    const[email, setEmail] = useState("");
    const[pass, setPass] = useState("");
    const[number, setNumber] = useState("");
    const[msg, setmsg] = useState("");
    const[singup,setSingup] = useState([]);
     
    const onSingUp = () =>{
        let newUser ={
            email:email,
            pass:pass,
            number:number,
            msg:msg,
        }
        setSingup([newUser,...singup]);
        setEmail("");
        setPass("");
        setNumber("");
        setmsg("");
    }
    return (
        <div className="login">
               <NavBar/>
                <div className="login-container">
                    <h1 style={{margin:"20px 10px"}}>
                        Sing Up 
                    </h1>
                    <input placeholder="Email" onChange={(e)=>{
                       setEmail(e.target.value)
                    }}
                    value={email}
                    />
                    <input placeholder="password" type="password"
                    onChange={(e)=>{
                        setPass(e.target.value)
                    }}
                    value={pass}

                    />
                    <input placeholder="number" type="number"
                     onChange={(e)=>{
                        setNumber(e.target.value)
                    }} 
                    value={number}
                    />
                     <textarea name="" id="" placeholder="Say to hi" 
                     onChange={(e)=>{
                        setmsg(e.target.value)
                    }}
                    value={msg}

                     ></textarea>

                    <button onClick={onSingUp}  >Sing Up</button>
                  
                    <div className="sing-up">
                        <p>or</p>
                        <button><Link to="/login" style={{color:"white", textDecoration:"none"}}
                        >Login</Link></button>
                    </div>

                </div>
        </div>
    )
}

export default Singup;

