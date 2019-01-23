import React from 'react'

const Card = props => {
	const app = props.projects.map(project => {
		return (
			<div className="col s12 m6 l4" key={project.id}>
				<a rel="noopener noreferrer" href={project.link} target="_blank">
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
							<p>View App</p>
						</div>
					</div>
				</a>
			</div>
		)
	})
	return <React.Fragment>{app}</React.Fragment>
}

export default Card
