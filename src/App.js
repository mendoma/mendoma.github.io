import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import M from 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Error from './components/Error'
import Sidenav from './components/Sidenav'

class App extends Component {
	componentDidMount() {
		var modal = document.querySelectorAll('.modal')
		var modal_component = M.Modal.init(modal, { dismissible: false })
	}

	render() {
		return (
			<BrowserRouter>
				<div className="main">
					<Sidenav />
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/about" component={About} />
						<Route path="/projects" component={Projects} />
						<Route path="/contact" component={Contact} />
						<Route component={Error} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App
