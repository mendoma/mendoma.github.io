import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidenav = props => {
	return (
		<div>
			<a href="#" data-target="mobile-demo" className="sidenav-trigger">
				<i className="material-icons" id="menu">
					menu
				</i>
			</a>
			<ul className="sidenav sidenav-fixed z-depth-5 blue darken-3">
				<div id="sidenavContent">
					<div className="row center blue-grey darken-4" id="name">
						<div className="col s12">
							<img
								className="circle"
								src="https://randomuser.me/api/portraits/lego/6.jpg"
								alt="Manny Mendoza Pic"
								id="profilePic"
							/>
						</div>
						<div className="col s12">
							<span id="firstName">Manny </span>
							<span id="lastName">Mendoza</span>
						</div>
						<div className="center">
							<div className="col l2 offset-l3 icons">
								<a
									href="https://github.com/mendoma"
									target="_blank"
									rel="noopener noreferrer"
									className="iconLink"
								>
									<i className="fab fa-github fa-2x" />
								</a>
							</div>
							<div className="col l2 icons">
								<a
									href="https://www.linkedin.com/in/manny-mendoza-0259a628/"
									target="_blank"
									rel="noopener noreferrer"
									className="iconLink"
								>
									<i className="fab fa-linkedin-in fa-2x" />
								</a>
							</div>
							<div className="col l2 icons">
								<a
									href="https://www.instagram.com/?hl=en"
									target="_blank"
									rel="noopener noreferrer"
									className="iconLink"
								>
									<i className="fab fa-instagram fa-2x" />
								</a>
							</div>
						</div>
					</div>
					<li
						onClick={props.handleItemClick}
						className={props.activeItem === 'Home' ? 'active' : ''}
					>
						<NavLink to="/">
							<i className="fas fa-home fa-2x" />
							Home
						</NavLink>
					</li>
					<li
						onClick={props.handleItemClick}
						className={props.activeItem === 'About' ? 'active' : ''}
					>
						<NavLink to="about">
							<i className="fas fa-user fa-2x" />
							About
						</NavLink>
					</li>
					<li
						onClick={props.handleItemClick}
						className={props.activeItem === 'Projects' ? 'active' : ''}
						name="projects"
					>
						<NavLink to="projects">
							<i className="fas fa-code fa-2x" />
							Projects
						</NavLink>
					</li>
					<li
						onClick={props.handleItemClick}
						className={props.activeItem === 'Contact' ? 'active' : ''}
						name="contact"
					>
						<NavLink to="contact">
							<i className="fas fa-envelope-open fa-2x" />
							Contact
						</NavLink>
					</li>
				</div>
			</ul>
			<ul className="sidenav" id="mobile-demo">
				<li
					onClick={props.handleItemClick}
					className={props.activeItem === 'Home' ? 'active' : ''}
				>
					<NavLink to="/">
						<i className="fas fa-home fa-2x" />
						Home
					</NavLink>
				</li>
				<li
					onClick={props.handleItemClick}
					className={props.activeItem === 'About' ? 'active' : ''}
				>
					<NavLink to="about">
						<i className="fas fa-user fa-2x" />
						About
					</NavLink>
				</li>
				<li
					onClick={props.handleItemClick}
					className={props.activeItem === 'Projects' ? 'active' : ''}
					name="projects"
				>
					<NavLink to="projects">
						<i className="fas fa-code fa-2x" />
						Projects
					</NavLink>
				</li>
				<li
					onClick={props.handleItemClick}
					className={props.activeItem === 'Contact' ? 'active' : ''}
					name="contact"
				>
					<NavLink to="contact">
						<i className="fas fa-envelope-open fa-2x" />
						Contact
					</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Sidenav
