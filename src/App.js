import React, { useState, useEffect } from 'react'
import {Heading} from './Styled'
import NewProjectForm from './NewProjectForm'
import ProjectList from './ProjectList'

const App = () => {
	const initialProjects = []
	function addProject(project) {
		setProjects([project, ...projects])
	}

	const [projects, setProjects] = useState(initialProjects)

	useEffect(() => {
		console.log("in use effect")
		fetch('project.json',{
			headers : {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then((response) => response.json())
		.then((projects) => setProjects(projects))
	}, [])

	return (
		<div >
			<Heading>Recent Projects</Heading>
			<NewProjectForm addProject={addProject}/>
			<ProjectList projects={projects} />
		</div>
	)
}

export default App
