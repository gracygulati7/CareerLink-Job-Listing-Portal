import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { loginUser } from '../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
	const dispatch = useDispatch();

	const login = values => {
		dispatch(loginUser(values));
	};

	return (
		<div className="login-container">
			<Row justify="center" align="middle" className="login-row">
				<Col lg={8} md={12} sm={24} className="branding">
					<h1 className="branding-title" data-aos="fade-up">Career<span className="highlight">Link</span>
					</h1>
					<p className="branding-tagline" data-aos="fade-down">
						Your dream job is just a click away
					</p>
				</Col>

				<Col
					lg={10}
					md={12}
					sm={24}
					className="login-form-container"
					data-aos="zoom-in"
				>
					<div className="login-header">
						<h3 className="login-title">Welcome Back!</h3>
						<p className="login-subtitle">Log in to your account</p>
					</div>
					<hr className="divider" />
					<Form
						layout="vertical"
						onFinish={login}
						className="login-form"
					>
						<Form.Item
							label="Username"
							name="username"
							rules={[
								{
									required: true,
									message: 'Please enter your username!'
								}
							]}
						>
							<Input
								placeholder="Enter your username"
								className="input-field"
							/>
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{
									required: true,
									message: 'Please enter your password!'
								}
							]}
						>
							<Input.Password
								placeholder="Enter your password"
								className="input-field"
							/>
						</Form.Item>

						<Button
							type="primary"
							htmlType="submit"
							className="login-button"
						>
							Login
						</Button>

						<div className="register-link">
							<Link to="/register">
								Not registered?{' '}
								<span className="register-highlight">
									Sign up here
								</span>
							</Link>
						</div>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default Login;
