import React, { useState } from 'react'
import {TextField, Button, Row, RightRow} from './Styled'

export default function NewProjectForm(props) {
	const {addProject} = props
	const initialFormState = {
		name: "",
		description: ""
	}
	const [formData, setFormData] = useState(initialFormState)

	function changeHandler(event) {
		setFormData({
			...formData, 
			[event.target.name]: event.target.value
		})
	}

	function submitHandler(event) {
		event.preventDefault()
		addProject(formData)
		setFormData({
			name: "",
			description: ""
		})
	}

	return (
		<form onSubmit={submitHandler}>
			<Row>
				<label>Name:</label>	
				<TextField name="name" value={formData.name} onChange={changeHandler}></TextField>
			</Row>
			<Row>
				<label>Description:</label>
				<TextField name="description" value={formData.description} onChange={changeHandler}></TextField>
			</Row>
			<RightRow>
				<Button>Add Project</Button>
			</RightRow>
		</form>
	)
	
}
