import React, {Component} from 'react';
import './login.css';
import { Form, Input, Button, Card, Checkbox, Icon } from 'antd';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userData: {
        email: 'xyz@gmail.com',
        password: '123456'
      }
      }
    }

    render() {
      return (
        // <div className = "card">
        // <div className = "card-block">
        //     <h2 className = "card-title">Login</h2>
        //     <a input type="text" ></a>
        // </div>
        // </div>

    <div class="row">
      <div class="col"></div>
      <div class="col-sm-12 col-md-8">
        <div class="card signin-card">
          <div class="card-block">
            {/* <img src="assets/DevslopesLogo.png" alt = "Login" class="img-fluid signin-img"></img> */}
            <form class="sigin-form">
              <div class="form-group">
                <input type="email" class="form-control" id="emailInput" placeholder="Username" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="passwordInput" placeholder="Password" />
              </div>
              <button type="button" class="btn signin-btn">Sign In</button>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" /> Remember me<a href="#"> forgot password?</a></label>
              </div>
            </form>
          </div>
        </div>
        {/* <a href="#" class="create-new-account">Create New Account</a> */}
      </div>
      <div class="col"></div>
    </div>

  // </div>
      )
    }
  }
  
  export default Login;

