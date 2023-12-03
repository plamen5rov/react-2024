/** @format */
import { useState } from 'react';

export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);

	const handleEdit = (e) => {
		e.preventDefault();
		setIsEditing(true);
	};

	let playerName = <span className='player-name'>{name}</span>;

	if (isEditing) {
		playerName = (
			<span className='player-name'>
				<input type='text' required />
			</span>
		);
	}

	return (
		<li>
			{playerName}
			<span className='player-symbol'>{symbol}</span>

			<button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}
