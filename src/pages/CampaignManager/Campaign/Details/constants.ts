import { formGrey2, grey4, primaryPadding, secondaryBorder, primaryColor as primaryColorText } from 'constants/styles';
import { infoType } from 'types';
import { themeStores } from 'stores/theme';

export const wrapperBorder = secondaryBorder;
export const wrapperPadding = '40px 52px';
export const borderBlockWidth = '300px';
export const sectionWidth = parseInt(borderBlockWidth) - parseInt(primaryPadding) * 2 + 'px';

export const pickerMarginTop = '15px';

export const graphicBlockBorder = `2px solid ${formGrey2}`;

export const testSelectArray = ['1 day', '7 days', '14days', '21 days', '31 days'];

export const growSpread: (value: undefined | number) => { growType?: infoType; growNumber?: number } = value =>
    value !== undefined ? { growType: value > 0 ? 'success' : 'error', growNumber: value } : {};

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
const labelBackground = 'white';

export const engagementName1 = 'Views';
export const engagementName2 = 'Likes';
export const engagementName3 = 'Saves';
export const engagementName4 = 'Comments';
export const engagementName5 = 'Shares';

// export const previewColor = '#FF6B00';
// export const viewColor = '#FC4237';
// export const engageColor = '#03A3D6';
// export const clickColor = '#8BD317';
// export const buyColor = '#FECF00';
const { primaryColor } = themeStores.theme.getState();
export const color1 = primaryColor;
export const color2 = '#FC4237';
export const color3 = '#03A3D6';
export const color4 = '#8BD317';
export const color5 = '#FECF00';

export const colors = [color1, color2, color3, color4, color5];

export const areaCommonStyle = { origin: 'start', shadowColor: 'rgba(0, 0, 0, 0.1)', shadowBlur: 3, opacity: 0.1 };

export const graphicOption = {
    backgroundColor: '#FBFBFB',
    textStyle: { color: graphicTextColor },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'white',
        textStyle: {
            color: primaryColorText
        },
        axisPointer: {
            type: 'cross',
            axis: 'auto',
            lineStyle: { type: 'dashed', width: 1.5 },
            crossStyle: { type: 'dashed', width: 1.5 },
            label: {
                backgroundColor: labelBackground,
                color: primaryColorText
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
        // ,{
        //     type: 'category',
        //     axisTick: { show: false },
        //     axisLine: { show: false },
        //     axisLabel: {
        //         color: primaryColor
        //     },
        //     boundaryGap: false,
        //     data: ['', 'YEAY', '', 'Adidas US', '', 'Test Campaign1', '', 'Test Campaign2', '']
        // }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisTick: { show: false },
            axisLine: {
                show: false
            },
            axisLabel: { show: true, color: grey4 }
        }
    ]
    // series: [
    //     {
    //         name: 'Buy',
    //         type: 'line',
    //         smooth: true,
    //         stack: 'Buy',
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: 'top'
    //             }
    //         },
    //         // markLine: {
    //         //     symbol: 'circle',
    //         //     symbolSize: 15,
    //         //     label: { show: false, position: 'end' },
    //         //     data: [{ xAxis: 1 }],
    //         //     lineStyle: {
    //         //         color: yeayColor
    //         //     }
    //         // },
    //         itemStyle: {
    //             color: color1
    //         },
    //         lineStyle: {
    //             color: color1
    //         },
    //         areaStyle: {
    //             ...areaCommonStyle,
    //             color: color1
    //         },
    //         data: [0, 9320, 9010, 13340, 19900, 15300, 24700, 27400, 21170]
    //     }
    //     // {
    //     //     name: 'Click',
    //     //     type: 'line',
    //     //     smooth: true,
    //     //     stack: 'Click',
    //     //     // markLine: {
    //     //     //     symbol: 'circle',
    //     //     //     symbolSize: 15,
    //     //     //     label: { show: false, position: 'end' },
    //     //     //     data: [{ xAxis: 3 }],
    //     //     //     lineStyle: {
    //     //     //         color: adidasColor
    //     //     //     }
    //     //     // },
    //     //     itemStyle: {
    //     //         color: clickColor
    //     //     },
    //     //     lineStyle: {
    //     //         color: clickColor
    //     //     },
    //     //     areaStyle: {
    //     //         ...areaCommonStyle,
    //     //         color: clickColor
    //     //     },
    //     //     data: [0, 3320, 7010, 8340, 9900, 3300, 13200, 7400, 5200]
    //     // },
    //     // {
    //     //     name: 'Engage',
    //     //     type: 'line',
    //     //     smooth: true,
    //     //     stack: 'Engage',
    //     //     // markLine: {
    //     //     //     symbol: 'circle',
    //     //     //     symbolSize: 15,
    //     //     //     label: { show: false, position: 'end' },
    //     //     //     data: [{ xAxis: 5 }],
    //     //     //     lineStyle: {
    //     //     //         color: testCampaignColor
    //     //     //     }
    //     //     // },
    //     //     itemStyle: {
    //     //         color: engageColor
    //     //     },
    //     //     lineStyle: {
    //     //         color: engageColor
    //     //     },
    //     //     areaStyle: {
    //     //         ...areaCommonStyle,
    //     //         color: engageColor
    //     //     },
    //     //     data: [0, 4320, 2010, 7540, 6900, 1330, 5100, 3700, 5100]
    //     // },
    //     // {
    //     //     name: 'View',
    //     //     type: 'line',
    //     //     smooth: true,
    //     //     stack: 'View',
    //     //     // markLine: {
    //     //     //     symbol: 'circle',
    //     //     //     symbolSize: 15,
    //     //     //     label: { show: false, position: 'end' },
    //     //     //     data: [{ xAxis: 7 }],
    //     //     //     lineStyle: {
    //     //     //         color: testCampaignColor
    //     //     //     }
    //     //     // },
    //     //     itemStyle: {
    //     //         color: viewColor
    //     //     },
    //     //     lineStyle: {
    //     //         color: viewColor
    //     //     },
    //     //     areaStyle: {
    //     //         ...areaCommonStyle,
    //     //         color: viewColor
    //     //     },
    //     //     data: [0, 1820, 2910, 2340, 2900, 1330, 4100, 3300, 5000]
    //     // },
    //     // {
    //     //     name: 'Preview',
    //     //     type: 'line',
    //     //     smooth: true,
    //     //     stack: 'Preview',
    //     //     itemStyle: {
    //     //         color: previewColor
    //     //     },
    //     //     lineStyle: {
    //     //         color: previewColor
    //     //     },
    //     //     areaStyle: {
    //     //         ...areaCommonStyle,
    //     //         color: previewColor
    //     //     },
    //     //     data: [0, 1320, 1010, 134, 900, 2300, 2100, 2700, 3500]
    //     // }
    // ]
};

// option.visualMap.target.inRange.color = ['red', 'blue'];

// export const testHeaderRadioArray: RowHeaderRadioType[] = [
//     {
//         title: engagementName1,
//         quantity: '1m 23',
//         inBrackets: '',
//         growType: 'success',
//         growNumber: 0
//     },
//     {
//         title: engagementName2,
//         quantity: '100K',
//         inBrackets: '(71.1%)',
//         growType: 'success',
//         growNumber: 0
//     },
//     {
//         title: engagementName3,
//         quantity: '100K',
//         inBrackets: '(71.1%)',
//         growType: 'success',
//         growNumber: 0
//     },
//     {
//         title: engagementName4,
//         quantity: '100K',
//         inBrackets: '(71.1%)',
//         growType: 'success',
//         growNumber: 0
//     },
//     {
//         title: engagementName5,
//         quantity: '100K',
//         inBrackets: '(71.1%)',
//         growType: 'success',
//         growNumber: 0
//     }
// ];
