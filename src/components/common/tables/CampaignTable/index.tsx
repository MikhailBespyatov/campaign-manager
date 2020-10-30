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
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { CampaignEmpty } from 'components/Layouts/ResultLayouts/CampaignEmpty';
import { noContentMessage } from 'constants/messages';
import { routes } from 'constants/routes';
import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { campaignsEffects, campaignsStores } from 'stores/campaigns';
import { loadingStores } from 'stores/loading';
import { themeStores } from 'stores/theme';
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

const LegendaryItem = () => (
    //const [checked, setChecked] = useState(false);

    //const onChange = (checked: boolean) => setChecked(checked);

    <LegendaryTableRow>
        <LegendaryTableColumn>
            <Row alignCenter noWrap marginBottom="0">
                {/* <Column marginRight={tableMargin}>
                        <Checkbox onChange={onChange} />
                    </Column> */}
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
            <LegendaryTableSpan>Views</LegendaryTableSpan>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <LegendaryTableSpan>Likes</LegendaryTableSpan>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <LegendaryTableSpan>Saves</LegendaryTableSpan>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <LegendaryTableSpan>Comments</LegendaryTableSpan>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <LegendaryTableSpan>Shares</LegendaryTableSpan>
        </LegendaryTableColumn>
        <LegendaryTableColumn>
            <LegendaryTableSpan></LegendaryTableSpan>
        </LegendaryTableColumn>
    </LegendaryTableRow>
);
interface ItemProps extends WOM.CampaignDetailResponse {}

const Item = ({ id, title, budget, engagement, isActive, isEnabled }: ItemProps) => {
    //const [checked, setChecked] = useState(false);
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);

    //const onChange = (checked: boolean) => setChecked(checked);

    const removeHandler = () => campaignsEffects.removeItemById(id || '');
    const onMoreInfoClick = () => history.push(globalPrefixUrl + routes.campaignManager.campaign.indexDetails + id);

    return (
        <TableRow active={!(isActive && isEnabled)}>
            <TableColumn>
                <Row alignCenter noWrap marginBottom="0">
                    {/* <Column marginRight={tableMargin}>
                        <Checkbox onChange={onChange} />
                    </Column> */}
                    <TableSpan>{title ? title : noContentMessage}</TableSpan>
                </Row>
            </TableColumn>
            {/* <TableColumn>
                <TableSpan>??</TableSpan>
            </TableColumn> */}
            <TableColumn>
                <TableSpan>{budget?.budgetTotal ? budget?.budgetTotal : noContentMessage}</TableSpan>
            </TableColumn>
            <TableColumn>
                <TableSpan>{budget?.budgetSpent ? budget?.budgetSpent : 0}</TableSpan>
            </TableColumn>
            <TableColumn>
                <Row marginBottom="5px">
                    <TableSpan>{engagement?.viewCount ? engagement.viewCount : 0}</TableSpan>
                </Row>
            </TableColumn>
            <TableColumn>
                <Column>
                    <Row marginBottom="5px">
                        <TableSpan>{engagement?.likeCount ? engagement.likeCount : 0}</TableSpan>
                    </Row>
                    <Row alignCenter noWrap marginBottom="0">
                        <PercentageGrowth
                            type={engagement?.likesPercentage && engagement.likesPercentage > 0 ? 'success' : 'error'}
                        >
                            {engagement?.likesPercentage ? engagement.likesPercentage : 0}
                        </PercentageGrowth>
                    </Row>
                </Column>
            </TableColumn>
            <TableColumn>
                <Column>
                    <Row marginBottom="5px">
                        <TableSpan>{engagement?.saveCount ? engagement.saveCount : 0}</TableSpan>
                    </Row>
                    <Row alignCenter noWrap marginBottom="0">
                        <PercentageGrowth
                            type={engagement?.likesPercentage && engagement.likesPercentage > 0 ? 'success' : 'error'}
                        >
                            {engagement?.savesPercentage ? engagement.savesPercentage : 0}
                        </PercentageGrowth>
                    </Row>
                </Column>
            </TableColumn>
            <TableColumn>
                <Column>
                    <Row marginBottom="5px">
                        <TableSpan>{engagement?.commentCount ? engagement.commentCount : 0}</TableSpan>
                    </Row>
                    <Row alignCenter noWrap marginBottom="0">
                        <PercentageGrowth
                            type={engagement?.likesPercentage && engagement.likesPercentage > 0 ? 'success' : 'error'}
                        >
                            {engagement?.commentsPercentage ? engagement.commentsPercentage : 0}
                        </PercentageGrowth>
                    </Row>
                </Column>
            </TableColumn>
            <TableColumn>
                <Column>
                    <Row marginBottom="5px">
                        <TableSpan>{engagement?.shareCount ? engagement.shareCount : 0}</TableSpan>
                    </Row>
                    <Row alignCenter noWrap marginBottom="0">
                        <PercentageGrowth
                            type={engagement?.likesPercentage && engagement.likesPercentage > 0 ? 'success' : 'error'}
                        >
                            {engagement?.sharesPercentage ? engagement.sharesPercentage : 0}
                        </PercentageGrowth>
                    </Row>
                </Column>
            </TableColumn>
            <TableColumn>
                <Row alignCenter noWrap marginBottom="0">
                    <Column marginRight="29px">
                        <CustomImg
                            pointer
                            height={deleteImgDiameter}
                            src={deleteImg}
                            width={deleteImgDiameter}
                            onClick={removeHandler}
                        />
                    </Column>
                    <ClickableWrapper onClick={onMoreInfoClick}>
                        <CustomImg pointer height={moreInfoImgHeight} src={moreInfoImg} width={moreInfoImgWidth} />
                    </ClickableWrapper>
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
