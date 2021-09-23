import editButtonIcon from 'assets/img/edit_icon.svg';
// import defaultChannelImg from 'assets/img/wom_logo.svg';
import WOMLogo from 'assets/img/sample_logo.png';
import { ImgButton } from 'components/common/buttons/ImgButton';
import { AddButton } from 'components/common/buttons/NewDesign/AddButton';
import { CopyableField } from 'components/common/features/CopyableField';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Checkbox } from 'components/common/inputs/NewDesign/Checkbox';
import { Table } from 'components/common/tables/NewDesign/Table';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { OverflowAutoLayout } from 'components/Layouts';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { EmptyLayout } from 'components/Layouts/EmptyLayout';
import { PaginationLayout } from 'components/Layouts/PaginationLayout';
import { channelsEdit, routes } from 'constants/routes';
import { primaryMargin, white } from 'constants/styles';
import { useStore } from 'effector-react';
import { copyButtonIconDiameter } from 'pages/CampaignManager/Campaign/Create/Steps/Channels/constants';
import { ChannelNameSpan } from 'pages/CampaignManager/Campaign/Create/Steps/Channels/styles';
import { ProductThumbnail } from 'pages/CampaignManager/Products/styles';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { channelsEffects, channelsEvents, channelsStores } from 'stores/channels';
import { themeStores } from 'stores/theme';
import { DataTable } from 'types';
import {
    channelParameters,
    channelsContentPadding,
    editButtonDiameter,
    emptyChannelSubtitle,
    emptyChannelTitle,
    noChannelsContentPadding
} from './constants';

const { invokeGetChannels, setIsFirstToFalse, updateValues } = channelsEvents;
const { getItems } = channelsEffects;

export const Channels = () => {
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const { items, totalRecords } = useStore(channelsStores.items);
    const isFirst = useStore(channelsStores.isFirst);
    const { limit, pageIndex } = useStore(channelsStores.values);
    const loading = useStore(channelsEffects.getItems.pending);
    const contentWrapperPadding = items?.length ? channelsContentPadding : noChannelsContentPadding;
    const contentWrapperBackground = items?.length ? white : 'transparent';

    const onClickAddButton = () => history.push(globalPrefixUrl + routes.campaignManager.channels.create);
    const onClickEditButton = (id: string) => () => history.push(globalPrefixUrl + channelsEdit + `/${id}`);
    const onClickHowItWork = () => history.push(globalPrefixUrl + routes.campaignManager.channels.help);

    //Mock
    // const channels = channelsMock;
    const channelLink = 'https://something.yeay.com/?merchantid=22&channelid&channelid';

    const dataTable: DataTable[] | undefined = items?.map(({ name, id = '', /*imageUrl,*/ isPrivate }) => ({
        cells: [
            <Row key={id} alignCenter>
                <MarginWrapper marginLeft="8px" marginRight="16px">
                    <ProductThumbnail>
                        <CustomImg src={/*imageUrl ||*/ WOMLogo} />
                    </ProductThumbnail>
                </MarginWrapper>
                <ChannelNameSpan>{name}</ChannelNameSpan>
            </Row>,
            <Row key={id}>
                <CopyableField subject={channelLink} />
            </Row>,
            // <ToggleButton key={id} disabled value={isPrivate} />,
            <Checkbox key={id} disabled defaultValue={isPrivate} />,
            <Row key={id}>
                <ImgButton
                    backgroundColor="transparent"
                    height={editButtonDiameter}
                    width={editButtonDiameter}
                    onClick={onClickEditButton(id)}
                >
                    <CustomImg height={copyButtonIconDiameter} src={editButtonIcon} width={copyButtonIconDiameter} />
                </ImgButton>
            </Row>
        ],
        alignment: ['start', ...new Array(4).fill('center')]
    }));

    // const dataTable: DataTable[] = channels.map(({ channelLink, channelName }) => ({
    //     cells: [
    //         <Row key={channelName} alignCenter>
    //             <MarginWrapper marginLeft="8px" marginRight="17px">
    //                 <CustomImg height={channelLogoDiameter} src={mockChannelImg} width={channelLogoDiameter} />
    //             </MarginWrapper>
    //             <ChannelNameSpan>{channelName}</ChannelNameSpan>
    //         </Row>,
    //         <CopyableField key={channelLink} copyData={channelLink} />,
    //         <ToggleButton key={channelLink} disabled />,
    //         <ImgButton
    //             key={channelLink}
    //             backgroundColor={blue5}
    //             height={editButtonDiameter}
    //             width={editButtonDiameter}
    //             onClick={onClickEditButton(channelName)}
    //         >
    //             <CustomImg height={copyButtonIconDiameter} src={editButtonIcon} width={copyButtonIconDiameter} />
    //         </ImgButton>
    //     ],
    //     alignment: ['start', ...new Array(4).fill('center')]
    // }));
    //
    // const onPaginationChange = (current: number) =>
    //     updateValues({
    //         pageIndex: current
    //     });
    //
    // const onSizeChange = (current: number, size: number) =>
    //     updateValues({
    //         pageIndex: current,
    //         limit: size
    //     });

    const onPaginationChange = (current: number) =>
        updateValues({
            pageIndex: current
        });

    const onSizeChange = (current: number, size: number) =>
        updateValues({
            pageIndex: current,
            limit: size
        });

    useEffect(() => {
        if (isFirst) {
            invokeGetChannels();
            setIsFirstToFalse();
        } else {
            getItems({ pageIndex, limit, returnQueryCount: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CampaignManagerLayout>
            <Section alignCenter justifyBetween noWrap marginBottom={primaryMargin}>
                {/* <Section noWrap> */}
                {/*<FlexGrow marginRight="24px">*/}
                {/*    <TagFilter*/}
                {/*        defaultChecked*/}
                {/*        tagsValues={}*/}
                {/*        onChange={(checked: boolean, values: string[]) => {}}*/}
                {/*    />*/}
                {/*</FlexGrow>*/}

                {/* <MarginWrapper marginRight="10px">
                    <Search />
                </MarginWrapper> */}
                <AddButton onClick={onClickAddButton}>Add Channel</AddButton>
                <Span pointer color="#3333FF" textDecoration="underline" onClick={onClickHowItWork}>
                    How it works?
                </Span>
                {/* </Section> */}
            </Section>
            <Section>
                <ContentWrapper
                    backgroundColor={contentWrapperBackground}
                    //padding={channelsContentPadding}
                    padding={contentWrapperPadding}
                    width="100%"
                >
                    {/*<PaginationLayout*/}
                    {/*    limit={limit}*/}
                    {/*    pageIndex={pageIndex}*/}
                    {/*    totalRecords={totalRecords}*/}
                    {/*    onPaginationChange={onPaginationChange}*/}
                    {/*    onSizeChange={onSizeChange}*/}
                    {/*>*/}
                    {loading ? (
                        <Loader />
                    ) : !items?.length ? (
                        <EmptyLayout subtitle={emptyChannelSubtitle} title={emptyChannelTitle} />
                    ) : (
                        <PaginationLayout
                            limit={limit}
                            pageIndex={pageIndex}
                            totalRecords={totalRecords}
                            onPaginationChange={onPaginationChange}
                            onSizeChange={onSizeChange}
                        >
                            <OverflowAutoLayout>
                                <Table columnSizes={[2, 3, 1, 1]} columns={channelParameters} data={dataTable} />
                            </OverflowAutoLayout>
                        </PaginationLayout>
                    )}
                    {/*</PaginationLayout>*/}
                </ContentWrapper>
            </Section>
        </CampaignManagerLayout>
    );
};
