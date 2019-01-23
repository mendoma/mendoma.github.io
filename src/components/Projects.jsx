import React, { Component } from 'react'
import Card from './Card'
import Modal from './Modal'
import apps from '../projects/projects.json'

class Projects extends Component {
	state = {
		selectedProject: {}
	}

	openModal = currentProject => {
		this.setState({ selectedProject: currentProject })
	}

	render() {
		return (
			<div className="container">
				<h5>Projects</h5>
				<div className="divider" />
				<Modal project={this.state.selectedProject} />
				<div className="row section">
					<Card projects={apps} openModal={this.openModal} />
				</div>
			</div>
		)
	}
}

export default Projects
