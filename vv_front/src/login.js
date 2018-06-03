import React, { Component } from 'react';
import './bootstrap/vendor/bootstrap/css/bootstrap.min.css';
import './bootstrap/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './bootstrap/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import './bootstrap/vendor/animate/animate.css';
import './bootstrap/vendor/css-hamburgers/hamburgers.min.css';
import './bootstrap/vendor/animsition/css/animsition.min.css';
import './bootstrap/vendor/select2/select2.min.css';
import './bootstrap/vendor/daterangepicker/daterangepicker.css';
import './bootstrap/css/util.css';
import './bootstrap/css/main.css';

class Login extends Component {
	render() {
		return (
			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
						<form className="login100-form validate-form flex-sb flex-w">
							<span className="login100-form-title p-b-32">
								Account Login
							</span>
              
							<span className="txt1 p-b-11">
								Username
							</span>
            
							<div className="wrap-input100 validate-input m-b-36" data-validate = "Username is required">
								<input className="input100" type="text" name="username" />
								<span className="focus-input100"></span>
							</div>         
					
							<span className="txt1 p-b-11">
								Password
							</span>
					
							<div className="wrap-input100 validate-input m-b-12" data-validate = "Password is required">
								<span className="btn-show-pass">

								</span>
								<input class="input100" type="password" name="pass" />	
								<span className="focus-input100"></span>
							</div>
					
							<div className="container-login100-form-btn">
								<button className="login100-form-btn">
								Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
