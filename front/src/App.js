import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Chart from './Chart.js';
import UserSelect from './UserSelect.js';
import TagSelect from './TagSelect.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Grid>
	      	<Row className="show-grid">
	  			<Col md={3}>
					<UserSelect />
					<Button bsStyle="primary" bsSize="large">show user data</Button>
	  			</Col>
	  			<Col md={3}>
					<TagSelect />
					<Button bsStyle="primary" bsSize="large">show tags data</Button>
	  			</Col>
	  			<Col md={6}>
					<Chart />
	  			</Col>
	        </Row>
      	</Grid>
      </div>
    );
  }
}

export default App;
