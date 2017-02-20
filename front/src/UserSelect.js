import React, { Component } from 'react';
import { ReactSelectList } from 'react-selectlist';
import { Button } from 'react-bootstrap';
import './UserSelect.css';


class UserSelect extends Component {

	constructor(props) {
		super(props);
		this.state = { userSelected: null };
		this._onSelectChange = this._onSelectChange.bind(this);
	}

	_onSelectChange(value) { this.setState({ userSelected: value }); }

  render() {
  	const { users } = this.props;
  	const data = users.map(user => { 
  		return { value: user, label: user };
  	});
  	const { userSelected } = this.state;

    return (
      <div className="user-select">
		<ReactSelectList
		  data={data}
		  value={userSelected}
		  multiple={false}
		  orientation="vertical"
		  onChange={this._onSelectChange}
		/>
		<Button
			bsStyle="primary"
			bsSize="large"
			onClick={() => this.props.buttonClick(userSelected)}
		>
			show user data
		</Button>
      </div>
    );
  }
}

export default UserSelect;