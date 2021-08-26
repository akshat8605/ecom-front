import React, { Component } from "react";
import NavBar from "../../elements/nav";
import "./login.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {

    super(props);
    this.state = {
      email: "",
      pass: "",
      found: false,
      database: [
        {
          email: "akshat8605@gmail.com",
          pass: "123",
        },
        {
          email: "akshat860512313@gmail.com",
          pass: "1234",
        },
        {
          email: "akshat8605998@gmail.com",
          pass: "123456",
        },
        {
          email: "biki",
          pass: "123",
        },
      ],
    };
  }

  onLogin = () => {
        let check = false;
        
        this.state.database.filter((e) => {
            if (e.email === this.state.email && e.pass === this.state.pass) {
              check = true;
            } 
            else {
              check = false;
            }
          
        });
        if (check) {
            alert("Success!! 😀");
           }

        else if (this.state.email === "" && this.state.pass === "") {
        alert("Enter your  pasword and email 📝");
        } 
        else {
        alert("check email or password !!🙁");
        }
  };

  onRegister = (e) => {
    if (this.state.pass.length < 6) {
      alert("Type password greater than 6 characters!");
      return;
    }
    console.log(e);
  };
  render() {
    return (
      <div className="login">
        <NavBar />
        <div className="login-container">
          <h1>Login</h1>
          <input
            placeholder="Email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <input
            placeholder="password"
            type="password"
            onChange={(e) => {
              this.setState({ pass: e.target.value });
            }}
          />
          <button onClick={this.onLogin}>Submit</button>

          <div className="sing-up">
            <p>or</p>
            <button>
              <Link
                to="/Singup"
                style={{ color: "white", textDecoration: "none" }}
              >
                Sing up
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
