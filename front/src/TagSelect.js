import React, { Component } from 'react';
import { ReactSelectList } from 'react-selectlist';

class TagSelect extends Component {
  render() {
    return (
      <div>
		coucou tagselect
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

export default TagSelect;