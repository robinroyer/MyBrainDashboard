import React, { Component } from 'react';
import { ReactSelectList } from 'react-selectlist';
import { Button } from 'react-bootstrap';
import './TagSelect.css';


class TagSelect extends Component {

	constructor(props) {
		super(props);
		this.state = { tagsSelected: [] };
		this._onSelectChange = this._onSelectChange.bind(this);
	}	

	_onSelectChange(value) { this.setState({ tagsSelected: value }); }

  render() {
  	const { tags } = this.props;
  	const data = tags.map(tag => { 
  		return { value: tag, label: tag };
  	});
  	const { tagsSelected } = this.state;
    return (
      <div className="tag-select">
		<ReactSelectList
		  data={data}
		  value={tagsSelected}
		  multiple={true}
		  orientation="vertical"
		  onChange={this._onSelectChange}
		/>
		<Button
			bsStyle="primary"
			bsSize="large"
			onClick={() => this.props.buttonClick(tagsSelected)}
		>
			show tags data
		</Button>
      </div>
    );
  }
}

TagSelect.propTypes = {
	tags: React.PropTypes.array,
};

export default TagSelect;