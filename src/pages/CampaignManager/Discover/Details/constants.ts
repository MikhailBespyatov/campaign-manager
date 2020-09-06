export const wrapperBorderWidth = '3px';
export const wrapperBorderColor = '#EDEDED';
export const wrapperBorderRadius = '20px';
export const wrapperHorizontalPadding = '35px';
export const wrapperVerticalPadding = '36px';

export const ballDiameter = '20px';

export const seriesTestData = [
    [0, 0],
    [1, 4000],
    [2, 9700],
    [3, 16000],
    [4, 20350],
    [5, 19000],
    [6, 21000],
    [7, 26500],
    [8, 28000],
    [9, 26400],
    [10, 24800],
    [11, 26450],
    [12, 28100],
    [13, 30000],
    [14, 28500],
    [15, 23000],
    [16, 20950],
    [17, 20000]
];

export const graphicOption = (color: string) => ({
    xAxis: {
        type: 'value',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '30%']
    },
    series: [
        {
            data: seriesTestData,
            type: 'line',
            smooth: true,
            lineStyle: {
                type: 'dashed',
                color: color,
                width: 2
            },
            markLine: {
                symbol: ['none', 'none'],
                label: { show: false },
                data: [{ xAxis: 2 }, { xAxis: 6 }, { xAxis: 10 }, { xAxis: 14 }]
            }
        }
    ]
});
