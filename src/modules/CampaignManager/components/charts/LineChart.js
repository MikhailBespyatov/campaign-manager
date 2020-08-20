import React from 'react';
import PropTypes from 'prop-types';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const LineChart = ({ dataset }) => {
  const [chartOptions, setChartOptions] = React.useState({ title: { text: '' } });
  React.useEffect(
    () => {
      setChartOptions({
        chart: {
          type: 'line',
        },
        title: {
          text: dataset.title,
        },
        xAxis: {
          type: 'datetime',
        },
        yAxis: {
          title: '',
          type: 'linear',
        },
        series: [
          {
            name: dataset.title,
            color: {
              linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
              stops: [
                [0, dataset.gradientColors.start],
                [1, dataset.gradientColors.finish],
              ],
            },
            data: dataset.data,
          },
        ],
      });
    },
    [dataset],
  );

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

LineChart.propTypes = {
  dataset: PropTypes.shape({
    title: PropTypes.string,
    gradientColors: PropTypes.shape({
      start: PropTypes.string,
      finish: PropTypes.string,
    }),
    data: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default LineChart;
