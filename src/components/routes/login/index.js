import React, { Component } from 'react'
import NavBar from '../../elements/nav'
import './login.css'

export default class Login extends Component{
    state={
        email:"",
        pass:"",
        route:"login",
        database:[
            {
                email:'akshat8605@gmail.com',
                pass:"123",
                bio:'asoidnhfiaundeuiwnd'
            },
            {
                email:'akshat860512313@gmail.com',
                pass:"1234",
                bio:'asoidnhfiaundeuiwnd'
            },
            {
                email:'akshat8605998@gmail.com',
                pass:"123456",
                bio:'asoidnhfiaundeuiwnd'
            }        
        ],
    currentUser:{}
    }
    onLogin=()=>{
        if(this.state.pass.length<6){
            alert("Type password greater than 6 characters!")
            return;
        }

        const {email, pass, database} = this.state
        var isInDatabase=false;
        database.forEach(item=>{
            if(item.email === email && item.pass === pass){
                this.setState({currentUser:item})
                alert("Success!");
                isInDatabase=true
            }
        })
        if(!isInDatabase){
           alert("check")
        }
        //for
        //while
        //forEach
        //doWhile

        //map
        //filter
        //reduce




    }
    onRegister=()=>{
        const {email,pass,database,bio} = this.state;
            var isInDatabase=false;
            database.forEach(item=>{
                if(item.email === email ){
                   
                    isInDatabase=true
                    
                }
            })
            if(isInDatabase){
                alert("Already registered, please login!");
                return;
            }
            var obj={
                email:email,
                pass:pass,
                bio:bio
            }
            database.push(obj);
        this.setState({database});
        alert("registered sucessfull");
       
        
        }
    render(){
        const {route}=this.state
        return(<div className="login">
            <NavBar/>
                <div className="login-container">
                    <div style={{display:'flex', justifyContent:"space-between"}}>
                        <h1 style={{color:route!=="login"?"blue":'white'}}>
                            Login
                        </h1>
                        <h1 style={{color:route!=="register"?"blue":'white'}}>
                            Register
                        </h1>
                    </div>
                    <input placeholder="Email"
                    onChange={(event)=>{
                        this.setState({email:event.target.value})
                    }}
                    />
                    <input placeholder="password" type="password" onChange={(e)=>{this.setState({pass:e.target.value})}}/>
                    <button onClick={this.onLogin}>Submit</button>
                    <button onClick={this.onRegister}>Register</button>
                </div>
        </div>)
    }
}