import React from 'react'

const Modal = props => {
	return (
		<div id="modal1" className="modal modal-fixed-footer">
			<div className="modal-content">
				<iframe title="contentFrame" src={props.project.link} frameBorder="0" id="modal-frame">
				Your browser does not support iframes.
				</iframe>
			</div>
			<div className="modal-footer">
				<div className="left">
					<a href={props.project.link} rel="noopener noreferrer" target="_blank" id="deployed-site" className="waves-effect waves-light btn hoverable blue darken-3">
						<i className="fas fa-globe"></i>&nbsp;
						Visit Site
					</a>
					<a href={props.project.code} rel="noopener noreferrer" target="_blank" id="view-code" className="waves-effect waves-light btn hoverable blue darken-3">
						<i className="fas fa-code" />&nbsp;
						View Code
					</a>
				</div>
				<a
					href="#!"
					className="modal-close waves-effect waves-light btn hoverable blue darken-3"
				>
					<i className="fas fa-times" />&nbsp;
					Close
				</a>
			</div>
		</div>
	)
}

export default Modal
