/** @format */

import { useState } from 'react';
import NewProject from './components/NewProject';
import ProjectsSidebar from './components/ProjectsSidebar';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectID: undefined,
		projects: [],
	});

	function handleSelectProject(id) {
		setProjectsState((prevState) => {
			return {
				...prevState,
				selectedProjectID: id,
			};
		});
	}

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

	const selectedProject = projectsState.projects.find(
		(project) => project.id === projectsState.selectedProjectID
	);

	let content = <SelectedProject project={selectedProject} />;

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
				onSelectProject={handleSelectProject}
			/>
			{content}
		</main>
	);
}

export default App;
