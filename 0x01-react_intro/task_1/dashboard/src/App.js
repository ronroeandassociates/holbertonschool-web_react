import React, { Component } from 'react'
import logo from './Holberton-Logo.jpg'

export default class App extends Component {
	render() {
		return (
			<div className="App">
	  			<header className="App-header">
		  			<img src={logo} className="App-logo" alt="logo" />
		  			<h1>School dashboard</h1>
	  			</header>
	 			<body className="App-body">
		 		 	<p>Login to access the full dashboard</p>
	  			</body>
				<footer className="App-footer">
					<p>Copyright 2022 - holberton School</p>
				</footer>
			</div>
		)
	}
}
