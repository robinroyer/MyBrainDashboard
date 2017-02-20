import React, { Component } from 'react';
import { ReactSelectList } from 'react-selectlist';

class UserSelect extends Component {
  render() {
    return (
      <div>
		coucou userselect
		<ReactSelectList
		  // data={[]}
		  // disabled={[true,true]}
		  // value={selected}
		  // multiple={multiple}
		  // orientation={orientation}
		  // onChange={this._onSelectChange}
		/>
      </div>
    );
  }
}

export default UserSelect;