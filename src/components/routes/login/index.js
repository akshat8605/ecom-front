import React, { Component } from 'react'
import NavBar from '../../elements/nav'
import './login.css'

export default class Login extends Component{
    state={
        email:"",
        pass:"",
        database:[
            {
                email:'akshat8605@gmail.com',
                pass:"123"
            },
            {
                email:'akshat860512313@gmail.com',
                pass:"1234"
            },
            {
                email:'akshat8605998@gmail.com',
                pass:"123456"
            },
        
        ]
    }
    onLogin=()=>{
        if(this.state.pass.length<6){
            alert("Type password greater than 6 characters!")
            return;
        }







    }

    onRegister=()=>{

    }
    render(){
        return(<div className="login">
            <NavBar/>
                <div className="login-container">
                    <h1>
                        Login
                    </h1>
                    <input placeholder="Email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    <input placeholder="password" type="password" onChange={(e)=>{this.setState({pass:e.target.value})}}/>
                    <button onClick={this.onLogin}>Submit</button>
                </div>
        </div>)
    }
}