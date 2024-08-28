import React from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/userAction';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
	const dispatch = useDispatch();

	const register = values => {
		if (values.password !== values.confirmpassword) {
			message.error('Passwords do not match');
		} else {
			dispatch(registerUser(values));
		}
	};

	return (
		<div className="register-container">
			<Row justify="center" align="middle" className="register-row">
				<Col lg={8} md={12} sm={24} className="branding">
					<h1 className="branding-title" data-aos="fade-up">
						Career<span className="highlight">Link</span>
					</h1>
					<p className="branding-tagline" data-aos="fade-down">
						Start your journey with us
					</p>
				</Col>

				<Col
					lg={10}
					md={12}
					sm={24}
					className="register-form-container"
					data-aos="zoom-in"
				>
					<div className="register-header">
						<h3 className="register-title">Create an Account</h3>
						<p className="register-subtitle">
							Join us and explore new opportunities
						</p>
					</div>
					<hr className="divider" />
					<Form
						layout="vertical"
						onFinish={register}
						className="register-form"
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

						<Form.Item
							label="Confirm Password"
							name="confirmpassword"
							rules={[
								{
									required: true,
									message: 'Please confirm your password!'
								}
							]}
						>
							<Input.Password
								placeholder="Confirm your password"
								className="input-field"
							/>
						</Form.Item>

						<Button
							type="primary"
							htmlType="submit"
							className="register-button"
						>
							Register
						</Button>

						<div className="login-link">
							<Link to="/login">
								Already registered?{' '}
								<span className="login-highlight">
									Log in here
								</span>
							</Link>
						</div>
					</Form>
				</Col>
			</Row>
		</div>
	);
}

export default Register;
