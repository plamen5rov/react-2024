/** @format */
import { useState } from 'react';
// import { transformWithEsbuild } from 'vite';
import Input from './Input.jsx';
export default function Login() {
	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	});
	const enteredEmail = email.current.value;
	const enteredPassword = password.current.value;

	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

	function handleEmailChange(event) {}

	function handlePasswordChange(event) {}

	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleInputBlur(identifier) {
		setDidEdit((prevEdit) => ({
			...prevEdit,
			[identifier]: true,
		}));
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<Input
					label='Email'
					id='email'
					type='email'
					name='email'
					error='Enter valid email!'
					onChange={handleEmailChange}
					onBlur={() => handleInputBlur('email')}
					value={enteredEmail}
				/>
				<Input
					label='Password'
					id='password'
					type='password'
					name='password'
					error='Enter valid password!'
					onChange={handlePasswordChange}
					onBlur={() => handleInputBlur('password')}
					value={enteredPassword}
				/>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
