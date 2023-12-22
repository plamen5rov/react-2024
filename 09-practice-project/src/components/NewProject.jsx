/** @format */

import Input from './Input.jsx';

function NewProject() {
	return (
		<div>
			<menu>
				<li>
					<button>Cancel</button>
				</li>
				<li>
					<button>Save</button>
				</li>
			</menu>
			<div>
				<Input label='Title' />
				<Input label='Description' isTextArea={true} />
				<Input label='Due Date' />
			</div>
		</div>
	);
}

export default NewProject;
