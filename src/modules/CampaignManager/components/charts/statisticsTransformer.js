const indicators = {
  views: 'views',
  likes: 'likes',
  saves: 'saves',
  clicks: 'clicks',
  buys: 'buys',
};

const createDataSet = (items, param) => items.map(({ [param]: indicator, dateUtc }) => ({
  x: Date.parse(dateUtc),
  y: indicator,
}));

const statisticsTransformer = (items) => {
  const reverseData = items.reverse();

  return ({
    views: {
      title: 'Views',
      data: createDataSet(reverseData, indicators.views),
      gradientColors: {
        start: '#fc4237',
        finish: '#ae0232',
      },
    },
    likes: {
      title: 'Likes',
      data: createDataSet(reverseData, indicators.likes),
      gradientColors: {
        start: '#feb833fc',
        finish: '#845f1afc',
      },
    },
    saves: {
      title: 'Saves',
      data: createDataSet(reverseData, indicators.saves),
      gradientColors: {
        start: '#4286effc',
        finish: '#8d2cb3fc',
      },
    },
    clicks: {
      title: 'Clicks',
      data: createDataSet(reverseData, indicators.clicks),
      gradientColors: {
        start: '#00b2e2',
        finish: '#152169',
      },
    },
    buys: {
      title: 'Buys',
      data: createDataSet(reverseData, indicators.buys),
      gradientColors: {
        start: '#93d609',
        finish: '#0ab5d3',
      },
    },
  });
};

export default statisticsTransformer;
