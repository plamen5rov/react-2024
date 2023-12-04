/** @format */
import { useState } from 'react';

export default function Player({ initialName, symbol }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	function handleEdit() {
		setIsEditing((previousState) => !previousState);
	}

	function handleChange(e) {
		setPlayerName(e.target.value);
	}

	let editablePlayerName = <span className='player-name'>{playerName}</span>;
	// let btnCaption = "Edit";
	if (isEditing) {
		editablePlayerName = (
			<input type='text' required value={playerName} onChange={handleChange} />
		);

		// btnCaption = "Save";
	}

	return (
		<li>
			<span className='player'>
				{editablePlayerName}
				<span className='player-symbol'>{symbol}</span>
			</span>

			<button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
}
