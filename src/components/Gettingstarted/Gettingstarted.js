import React, { Component } from 'react'
import "./Gettingstarted.css";
import Card from "../../components/Card/Card";
import Button from "components/CustomButtons/Button.js";
class Gettingstarted extends Component {
    render() {
        return (
            
            <div className="get-started">
            <div className="card">
            <h2><b>Getting Started</b></h2>
            <h5><b>No credit Card Required</b></h5>
            <form class="form-inline" action="/action_page.php">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter email" name="email"/>
            <label for="pwd">Password:</label>
            <input type="password" id="pwd" placeholder="Enter password" name="pswd"/>
            <label>
              <input type="checkbox" name="remember"/> By signing up the Terms & Conditions
            </label>
            <Button color="danger" large>

             </Button>
          </form> 
          <label className="center">
          <input  className="center" type="checkbox" name="remember"/> By signing up the Terms & Conditions
        </label>
        <hr/>

            </div>
            </div>
            
            
        )
    }
}

export default Gettingstarted

