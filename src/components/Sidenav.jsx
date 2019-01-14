import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {
	return (
		<div>
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
								<a href="https://github.com/mendoma" target="_blank" className="iconLink">
									<i className="fab fa-github fa-2x" />
								</a>
							</div>
							<div className="col l2 icons">
								<a href="https://www.linkedin.com/in/manny-mendoza-0259a628/" target="_blank" className="iconLink">
									<i className="fab fa-linkedin-in fa-2x" />
								</a>
							</div>
							<div className="col l2 icons">
								<a href="https://www.instagram.com/?hl=en" target="_blank" className="iconLink">
									<i className="fab fa-instagram fa-2x" />
								</a>
							</div>
						</div>
					</div>
					<li>
						<NavLink to="/">
							<i className="fas fa-home fa-2x" />
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="about">
							<i className="fas fa-user fa-2x" />
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="projects">
							<i className="fas fa-code fa-2x" />
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink to="contact">
							<i className="fas fa-envelope-open fa-2x" />
							Contact
						</NavLink>
					</li>
				</div>
				<div className="footer center">
					Copyright © 2018 Manny Mendoza
				</div>
			</ul>
		</div>
	)
}

export default Sidenav
