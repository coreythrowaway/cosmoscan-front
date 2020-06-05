import React, { useContext } from 'react';

import {
  ResponsiveContainer,
  AreaChart as AreaChartDefault,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';


const AreaChartStyled = styled(AreaChartDefault)`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
`;

const AreaChart = ({
  data,
  yAxisLabelsFormatter,
  yAxisWidth,
  yTickCount,
  tooltipFormatter,
  areaName,
  areaUnit,
  color,
  onDotClick,
  isDotClickable,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{ width: '100%', height: '400px' }}
    >
      <ResponsiveContainer>
        <AreaChartStyled
          data={data}
        >
          <XAxis
            dataKey="x"
            tickLine={false}
            tick={{ fill: theme.gray }}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            tick={{ fill: theme.gray }}
            tickFormatter={yAxisLabelsFormatter}
            width={yAxisWidth}
            tickCount={yTickCount}
            axisLine={false}
            type="number"
          />
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e2e2e9"
            vertical={false}
          />
          <Tooltip
            cursor={{ strokeDasharray: '3 3', stroke: color }}
            formatter={tooltipFormatter}
          />
          <Legend
            align="left"
            iconType="circle"
            verticalAlign="top"
            height={50}
            wrapperStyle={{
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          />
          <Area
            type="monotone"
            dataKey="y"
            stroke={color}
            fill={color}
            fillOpacity={0.3}
            activeDot={{
              r: 6,
              onClick: onDotClick,
              cursor: isDotClickable ? 'pointer' : 'initial',
            }}
            strokeWidth={2}
            connectNulls
            unit={areaUnit}
            name={areaName}
          />
        </AreaChartStyled>
      </ResponsiveContainer>
    </div>
  );
};

AreaChart.propTypes = {
  yAxisLabelsFormatter: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  yAxisWidth: PropTypes.number.isRequired,
  yTickCount: PropTypes.number.isRequired,
  tooltipFormatter: PropTypes.func,
  areaName: PropTypes.string.isRequired,
  areaUnit: PropTypes.string,
  color: PropTypes.string,
  isDotClickable: PropTypes.bool,
  onDotClick: PropTypes.func,
};
AreaChart.defaultProps = {
  yAxisLabelsFormatter: (value) => value,
  tooltipFormatter: (value) => value,
  areaUnit: '',
  color: '#476eeb',
  isDotClickable: false,
  onDotClick: () => null,
};

export default AreaChart;