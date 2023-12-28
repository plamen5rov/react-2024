/** @format */

import { useState } from 'react';
import NewProject from './components/NewProject';
import ProjectsSidebar from './components/ProjectsSidebar';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectID: undefined,
		projects: [],
	});

	function handleStartAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectID: null,
			};
		});
	}

	let content;

	if (projectsState.selectedProjectID === null) {
		content = <NewProject />;
	} else if (projectsState.selectedProjectID === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}
	return (
		<main className='h-screen my-8 flex gap-8'>
			<ProjectsSidebar onStartAddProject={handleStartAddProject} />
			{content}
		</main>
	);
}

export default App;
