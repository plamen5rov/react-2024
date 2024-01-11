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
	function handleAddProject(projectData) {
		setProjectsState((prevState) => {
			const newProject = { ...projectData, id: Math.random() };
			return {
				...prevState,
				selectedProjectID: undefined,
				projects: [...prevState.projects, newProject],
			};
		});
	}

	function handleCancelAddProject() {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectID: undefined,
			};
		});
	}

	let content;

	//console.log(projectsState);

	if (projectsState.selectedProjectID === null) {
		content = (
			<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
		);
	} else if (projectsState.selectedProjectID === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
	}
	return (
		<main className='h-screen my-8 flex gap-8'>
			<ProjectsSidebar
				onStartAddProject={handleStartAddProject}
				projects={projectsState.projects}
			/>
			{content}
		</main>
	);
}

export default App;
