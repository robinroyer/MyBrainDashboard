import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import 'whatwg-fetch';
import Chart from './Chart.js';
import UserSelect from './UserSelect.js';
import TagSelect from './TagSelect.js';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: [],
			tags: [],
			dataToPrint: [[]],
			chartLabel: '',
		};

		this.getDataFromUser = this.getDataFromUser.bind(this);
		this.getDataFromTags = this.getDataFromTags.bind(this);
	}

	componentWillMount() {
		fetch('http://localhost:8080/users')
		.then(response => {
			return response.json();
		}).then(json => {
			this.setState({ users: json });
		}).catch(ex => {
			console.log('parsing failed', ex);
		});

		fetch('http://localhost:8080/tags')
		.then(response => {
			return response.json();
		}).then(json => {
			this.setState({ tags: json });
		}).catch(ex => {
			console.log('parsing failed', ex);
		});
	}

	getDataFromUser(user) {
		if (user === null) {
			alert('please select a user');
			return;
		};
		fetch(`http://localhost:8080/data/users/${user}`)
		.then(response => {
			return response.json();
		}).then(json => {
			this.setState({ dataToPrint: json, chartLabel: user });
		}).catch(ex => {
			console.log('parsing failed', ex);
		});
	}

	getDataFromTags(tags) {
		if (tags.length === 0) {
			alert('please select some tags')
			return;
		}

		let query = 'filters=';
		tags.forEach(element => { query += `${element},` });
		query = query.substring(0, query.length - 1);
		fetch(`http://localhost:8080/data/tags?${query}`)
		.then(response => {
			return response.json();
		}).then(json => {
			this.setState({ dataToPrint: json, chartLabel: tags });
		}).catch(ex => {
			console.log('parsing failed', ex);
		});
	}

	render() {
		const { users, tags, dataToPrint, chartLabel } = this.state;
		return (
		  <div className="App">
		  	<Grid>
		  		<Row className="show-grid">
		  			<Col md={4} />
		  			<Col md={4} className="header">
		  				<h2>My Brain Dashboard</h2>
		  			</Col>
		  		</Row>
		      	<Row className="show-grid">
		  			<Col md={4}>
						<UserSelect users={users} buttonClick={this.getDataFromUser} />
		  			</Col>
		  			<Col md={2}>
						<TagSelect tags={tags} buttonClick={this.getDataFromTags} />
		  			</Col>
		  			<Col md={6}>
						<Chart data={dataToPrint} label={chartLabel}/>
		  			</Col>
		        </Row>
		  	</Grid>
		  </div>
		);
	}
}

export default App;
