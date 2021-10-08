import { grey4, primaryColor, white } from 'constants/styles';
import { getDateBeforeAndReturnISO } from 'utils/usefulFunctions';

export const defaultUtsTo = new Date().toISOString();
export const defaultUtsFrom = getDateBeforeAndReturnISO(7);

export const getRequestObject = (organizationId: string, dateFrom: string, dateTo: string, groupByWeek: boolean) => ({
    organizationId: organizationId,
    dateFrom,
    dateTo,
    groupByWeek,
    returnQueryCount: true
});

export const areaCommonStyle = { origin: 'start', shadowColor: 'rgba(0, 0, 0, 0.1)', shadowBlur: 3, opacity: 0.1 };

export const graphicOption = {
    title: {
        text: `Current WOM Balance`,
        textStyle: {
            color: 'rgba(0, 0, 0, 0.5)',
            fontSize: 18,
            lineHeight: 22,
            fontWeight: 'normal',
            fontFamily: 'Montserrat'
        }
    },
    backgroundColor: white,
    legend: { show: true },
    textStyle: { color: primaryColor },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'white',
        textStyle: {
            color: primaryColor
        },
        axisPointer: {
            type: 'cross',
            axis: 'auto',
            lineStyle: { type: 'dashed', width: 1.5 },
            crossStyle: { type: 'dashed', width: 1.5 },
            label: {
                backgroundColor: white,
                color: primaryColor
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
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
};
