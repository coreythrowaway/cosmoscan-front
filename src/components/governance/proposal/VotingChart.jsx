import React from 'react';
import ChartContainer from '../../../layouts/ChartContainer';
import PieChart from '../../chart-types/PieChart';


const chartName = 'Voting';
const valFormatter = (val) => `${val}%`;
const labelFormatter = (entry) => `${entry.value}%`;
const data = [
  {
    title: 'Test', value: 22,
  },
  {
    title: 'Test2', value: 87.9,
  },
  {
    title: 'Test3', value: 0.1,
  },
];

function VotingChart() {
  return (
    <ChartContainer
      title={chartName}
      chart={(
        <PieChart
          data={data}
          valFormatter={valFormatter}
          labelFormatter={labelFormatter}
          height={200}
        />
      )}
    />
  );
}

export default VotingChart;
