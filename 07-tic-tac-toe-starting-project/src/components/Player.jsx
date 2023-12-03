/** @format */
import { useState } from 'react';

export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);

	const handleEdit = (e) => {
		e.preventDefault();
		setIsEditing(!isEditing);
	};

	let playerName = <span className='player-name'>{name}</span>;
	// let btnCaption = "Edit";
	if (isEditing) {
		playerName = (
			<span className='player-name'>
				<input type='text' required value={name} />
			</span>
		);
		// btnCaption = "Save";
	}

	return (
		<li>
			<span className='player'>{playerName}</span>
			<span className='player-symbol'>{symbol}</span>

			<button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}
