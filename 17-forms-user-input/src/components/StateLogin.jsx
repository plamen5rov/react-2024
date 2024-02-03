/** @format */
import { useState } from 'react';
import { transformWithEsbuild } from 'vite';
export default function StateLogin() {
	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	});

	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

	const emailIsInvalid = didEdit.email !== '' && !enteredValues.includes('@');
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
				<div className='control no-margin'>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='email'
						name='email'
						onChange={handleEmailChange}
						onBlur={() => handleInputBlur('email')}
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
						onBlur={() => handleInputBlur('password')}
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
