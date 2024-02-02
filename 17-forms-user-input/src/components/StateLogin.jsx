/** @format */
import { useState } from 'react';
export default function StateLogin() {
	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	});

	const emailIsInvalid =
		enteredValues.email !== '' && !enteredValues.includes('@');
	function handleEmailChange(event) {
		setEnteredEmail(event.target.value);
	}

	function handlePasswordChange(event) {
		setEnteredPassword(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log('User email: ' + enteredEmail);
		console.log('User password: ' + enteredPassword);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<div className='control no-margin'>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						name='email'
						onChange={handleEmailChange}
						value={enteredEmail}
					/>
				</div>
				<div className='control-error'>
					{emailIsInvalid && <p>Please, enter a valid email address!</p>}
				</div>

				<div className='control no-margin'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						type='password'
						name='password'
						onChange={handlePasswordChange}
						value={enteredPassword}
					/>
				</div>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
