import React, { Component } from 'react';
import rd3 from 'rd3';

class Chart extends Component {
  render() {
	const LineChart = rd3.LineChart;
	const lineData = [
      { 
        values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
      },
      {
        values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
      },
      {
        values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
      } 
    ];
    return (
      <div>
	 	   <LineChart
	        legend={true}
	        data={lineData}
	        width='100%'
	        height={400}
	        viewBoxObject={{
	          x: 0,
	          y: 0,
	          width: 500,
	          height: 400
	        }}
	      />
      </div>
    );
  }
}

export default Chart;