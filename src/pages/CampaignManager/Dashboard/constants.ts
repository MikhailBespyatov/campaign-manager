import { RowHeaderRadioType } from 'types';

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

export const graphicOption = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            smooth: true,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

export const testHeaderRadioArray: RowHeaderRadioType[] = [
    {
        title: 'Preview',
        quantity: '1m 23',
        inBrackets: '',
        growType: 'error',
        growNumber: 5.2
    },
    {
        title: 'View',
        quantity: '100K',
        inBrackets: '(71.1%)',
        growType: 'success',
        growNumber: 12.2
    },
    {
        title: 'Engage',
        quantity: '100K',
        inBrackets: '(71.1%)',
        growType: 'success',
        growNumber: 12.2
    },
    {
        title: 'Click',
        quantity: '100K',
        inBrackets: '(71.1%)',
        growType: 'success',
        growNumber: 12.2
    },
    {
        title: 'Buy',
        quantity: '100K',
        inBrackets: '(71.1%)',
        growType: 'success',
        growNumber: 12.2
    }
];
