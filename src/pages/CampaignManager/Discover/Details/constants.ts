import { formGrey2, secondaryBorder } from 'constants/styles';

export const ballDiameter = '20px';

export const tableUniversalWrapperBorder = secondaryBorder;
export const tableUniversalWrapperPadding = '40px 52px';

export const graphicBlockBorder = `2px solid ${formGrey2}`;

export const testSelectArray = ['1 day', '7 days', '14days', '21 days', '31 days'];

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

const graphicTextColor = '#C3CBD4';
const labelBackground = '#6a7985';

export const previewColor = '#FF6B00';
export const viewColor = '#FC4237';
export const engageColor = '#03A3D6';
export const clickColor = '#8BD317';
export const buyColor = '#FECF00';

export const graphicOption = (color: string) => ({
    textStyle: { color: graphicTextColor },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            axis: 'auto',
            label: {
                backgroundColor: labelBackground
            }
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {
                title: 'Save as image...'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        borderColor: 'red'
    },
    xAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            boundaryGap: false,
            data: ['', '01', '05', '09', '13', '17', '21', '26', '31']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: { show: false },
            axisLine: { show: false }
        }
    ],
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [
            {
                gt: 6,
                lte: 8,
                color: labelBackground
            }
        ]
    },
    series: [
        {
            name: 'Buy',
            type: 'line',
            smooth: true,
            stack: 'Buy',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            itemStyle: {
                color: color
            },
            lineStyle: {
                color: color
            },
            // areaStyle: {
            //     ...areaCommonStyle,
            //     color: buyColor
            // },
            data: [0, 9320, 9010, 13340, 19900, 15300, 24700, 27400, 21170]
            //seriesLayoutBy: 'row'
        }
    ]
});
