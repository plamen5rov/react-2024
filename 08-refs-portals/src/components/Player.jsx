/** @format */

import { useState } from 'react';

export default function Player() {
	const [playerName, setPlayerName] = useState('player');
	const [isSubmitted, setIsSubmitted] = useState(false);

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	function clicked() {
		setIsSubmitted(true);
	}
	return (
		<section id='player'>
			<h2>Welcome {isSubmitted ? playerName : 'unknown entity'}</h2>
			<p>
				<input type='text' onChange={handleChange} value={playerName} />
				<button onClick={clicked}>Set Name</button>
			</p>
		</section>
	);
}
