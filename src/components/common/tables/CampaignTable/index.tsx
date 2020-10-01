import deleteImg from 'assets/img/delete.svg';
import moreInfoImg from 'assets/img/ellipsis_line.svg';
import arrowImg from 'assets/img/select_arrow_dark.svg';
import history from 'BrowserHistory';
import { PercentageGrowth } from 'components/common/features/PercentageGrowth';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Loader } from 'components/common/Loader';
import {
    arrowImgHeight,
    arrowImgWidth,
    deleteImgDiameter,
    moreInfoImgHeight,
    moreInfoImgWidth,
    tableMargin
} from 'components/common/tables/CampaignTable/constants';
import {
    LegendaryTableColumn,
    LegendaryTableRow,
    TableColumn,
    TableRow
} from 'components/common/tables/CampaignTable/styles';
import { Table } from 'components/common/tables/Table';
import { Span } from 'components/common/typography/Span';
import { SmallSpan } from 'components/common/typography/special';
import { BooleanCheckbox as Checkbox } from 'components/FormComponents/inputs/BooleanCheckbox';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { CampaignEmpty } from 'components/Layouts/ResultLayouts/CampaignEmpty';
import { noContentMessage } from 'constants/messages';
import { routes } from 'constants/routes';
import { useStore } from 'effector-react';
import React, { FC, useEffect, useState } from 'react';
import { campaignsEffects, campaignsStores } from 'stores/campaigns';
import { loadingStores } from 'stores/loading';
import { getOrganizationId } from 'utils/usefulFunctions';

const LegendaryTableSpan: FC = ({ children }) => (
    <Span fontSize="18px" fontWeight="bold" lineHeight="22px">
        {children}
    </Span>
);

const TableSpan: FC = ({ children }) => (
    <Span fontSize="18px" lineHeight="22px">
        {children}
    </Span>
);

const LegendaryItem = () => {
    const [checked, setChecked] = useState(false);

    const onChange = (checked: boolean) => setChecked(checked);

    return (
        <LegendaryTableRow active={checked}>
            <LegendaryTableColumn>
                <Row alignCenter noWrap marginBottom="0">
                    <Column marginRight={tableMargin}>
                        <Checkbox onChange={onChange} />
                    </Column>
                    <Column marginRight={tableMargin}>
                        <LegendaryTableSpan>Campaign Name</LegendaryTableSpan>
                    </Column>
                    <CustomImg height={arrowImgHeight} src={arrowImg} width={arrowImgWidth} />
                </Row>
            </LegendaryTableColumn>
            {/* <LegendaryTableColumn>
                <Row alignCenter noWrap marginBottom="0">
                    <Column marginRight={tableMargin}>
                        <LegendaryTableSpan>Product</LegendaryTableSpan>
                    </Column>
                    <CustomImg height={arrowImgHeight} src={arrowImg} width={arrowImgWidth} />
                </Row>
            </LegendaryTableColumn> */}
            <LegendaryTableColumn>
                <LegendaryTableSpan>Budget</LegendaryTableSpan>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <LegendaryTableSpan>Spend</LegendaryTableSpan>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <LegendaryTableSpan>Preview</LegendaryTableSpan>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <LegendaryTableSpan>View</LegendaryTableSpan>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <LegendaryTableSpan>Engage</LegendaryTableSpan>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <LegendaryTableSpan>Click</LegendaryTableSpan>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <LegendaryTableSpan>Buy</LegendaryTableSpan>
            </LegendaryTableColumn>
            <LegendaryTableColumn>
                <LegendaryTableSpan></LegendaryTableSpan>
            </LegendaryTableColumn>
        </LegendaryTableRow>
    );
};

interface ItemProps extends WOM.CampaignDetailResponse {}

const Item = ({ id, title, budget, engagement }: ItemProps) => {
    const [checked, setChecked] = useState(false);

    const onChange = (checked: boolean) => setChecked(checked);

    const onMoreInfoClick = () => history.push(routes.campaignManager.campaign.index + '/' + id);

    return (
        <TableRow active={checked}>
            <TableColumn>
                <Row alignCenter noWrap marginBottom="0">
                    <Column marginRight={tableMargin}>
                        <Checkbox onChange={onChange} />
                    </Column>
                    <TableSpan>{title ? title : noContentMessage}</TableSpan>
                </Row>
            </TableColumn>
            {/* <TableColumn>
                <TableSpan>??</TableSpan>
            </TableColumn> */}
            <TableColumn>
                <TableSpan>{budget?.amount ? budget?.amount : noContentMessage}</TableSpan>
            </TableColumn>
            <TableColumn>
                <TableSpan>{budget?.spend ? budget?.spend : noContentMessage}</TableSpan>
            </TableColumn>
            <TableColumn>
                <TableSpan>??</TableSpan>
            </TableColumn>
            <TableColumn>
                <Column>
                    <Row marginBottom="5px">
                        <TableSpan>{engagement?.viewCount ? engagement.viewCount : 0}</TableSpan>
                    </Row>
                    <Row alignCenter noWrap marginBottom="0">
                        <Column marginRight="5px">
                            <SmallSpan>??</SmallSpan>
                        </Column>
                        <PercentageGrowth type={'success'}>??</PercentageGrowth>
                    </Row>
                </Column>
            </TableColumn>
            <TableColumn>
                <TableSpan>??</TableSpan>
            </TableColumn>
            <TableColumn>
                <Column>
                    <Row marginBottom="5px">
                        <TableSpan>{engagement?.clickCount ? engagement.clickCount : 0}</TableSpan>
                    </Row>
                    <Row alignCenter noWrap marginBottom="0">
                        <Column marginRight="5px">
                            <SmallSpan>{engagement?.clicksPercentage ? engagement.clicksPercentage : 0}%</SmallSpan>
                        </Column>
                        <PercentageGrowth type={'success'}>??</PercentageGrowth>
                    </Row>
                </Column>
            </TableColumn>
            <TableColumn>
                <Column>
                    <Row marginBottom="5px">
                        <TableSpan>{engagement?.buyCount ? engagement.buyCount : 0}</TableSpan>
                    </Row>
                    <Row alignCenter noWrap marginBottom="0">
                        <Column marginRight="5px">
                            <SmallSpan>{engagement?.buysPercentage ? engagement.buysPercentage : 0}%</SmallSpan>
                        </Column>
                        <PercentageGrowth type={'success'}>??</PercentageGrowth>
                    </Row>
                </Column>
            </TableColumn>
            <TableColumn>
                <Row alignCenter noWrap marginBottom="0">
                    <Column marginRight="29px">
                        <CustomImg pointer height={deleteImgDiameter} src={deleteImg} width={deleteImgDiameter} />
                    </Column>
                    <CustomImg
                        pointer
                        height={moreInfoImgHeight}
                        src={moreInfoImg}
                        width={moreInfoImgWidth}
                        onClick={onMoreInfoClick}
                    />
                </Row>
            </TableColumn>
        </TableRow>
    );
};

export const CampaignTable = () => {
    // const { sets } = useStore(campaignsStores.statisticsItems);
    const { items } = useStore(campaignsStores.items);
    const loading = useStore(loadingStores.initialLoading);

    const defaultOrganizationId = getOrganizationId();

    // useEffect(() => {
    //     // campaignsEffects.getStatisticsItems({
    //     //     returnQueryCount: false,
    //     //     campaignId: '5dfb9a1669819a1e9a77fb30',
    //     //     dateFrom: '2020-08-01T00:00:00Z',
    //     //     dateTo: '2020-09-01T00:00:00Z',
    //     //     historicalSets: 1
    //     // });
    //     campaignsEffects.getItemById('5dfb9a1669819a1e9a77fb30');
    // }, []);

    useEffect(() => {
        defaultOrganizationId &&
            campaignsEffects.getItems({ organizationId: defaultOrganizationId, limit: 10, pageIndex: 0 });
    }, [defaultOrganizationId]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : items?.length ? (
                <Table>
                    <LegendaryItem />
                    {items.map(i => (
                        <Item key={i.id} {...i} />
                    ))}
                </Table>
            ) : (
                <CampaignEmpty />
            )}
        </>
    );
};
