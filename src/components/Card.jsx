import React from 'react'

const Card = props => {
	const app = props.projects.map(project => {
		return (
			<div key={project.id} className="col s12 m6 l4">
				<a href="#modal1" className="modal-trigger" onClick={props.openModal.bind(this, project)}>
					<div className="card small hoverable">
						<div className="card-image waves-effect waves-block waves-light">
							<img
								className="activator"
								src={project.image}
								alt={project.app}
							/>
						</div>
						<div className="card-content">
							<span className="card-title activator grey-text text-darken-4">
								{project.app}
							</span>
							<p>Play Game</p>
						</div>
					</div>
				</a>
			</div>
		)
	})
	return (
		<React.Fragment>
			{app}
		</React.Fragment>
	)
}

export default Card
