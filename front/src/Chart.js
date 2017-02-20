import React from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const Chart = ({ data, label }) => (
  <div>
	  <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      <XAxis dataKey={'x'} name='' unit=''/>
      <YAxis dataKey={'y'} name='' unit=''/>
      <ZAxis range={[100]}/>
      <CartesianGrid />
      <Tooltip cursor={{strokeDasharray: '1 1'}}/>
      <Legend/>
      {data && data.map((x,i) => 
        <Scatter key={i+1} name={label} data={x} fill={"#"+((1<<24)*Math.random()|0).toString(16)} line/>
      )}
    </ScatterChart>
  </div>
);

export default Chart;