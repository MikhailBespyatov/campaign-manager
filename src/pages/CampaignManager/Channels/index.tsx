import editButtonIcon from 'assets/img/edit_icon.svg';
import moreButtonIcon from 'assets/img/gray_arrow.svg';
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
import { channel, channelsEdit, routes } from 'constants/routes';
import { primaryMargin, white } from 'constants/styles';
import { useStore } from 'effector-react';
import { copyButtonIconDiameter } from 'pages/CampaignManager/Campaign/Create/Steps/Channels/constants';
import { ChannelNameSpan } from 'pages/CampaignManager/Campaign/Create/Steps/Channels/styles';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { channelsEffects, channelsEvents, channelsStores } from 'stores/channels';
import { organizationsStores } from 'stores/organizations';
import { themeStores } from 'stores/theme';
import { DataTable } from 'types';
import { getFullScriptStringChannelViewer } from 'utils/usefulFunctions';
import {
    channelParameters,
    channelsContentPadding,
    editButtonDiameter,
    emptyChannelSubtitle,
    emptyChannelTitle,
    moreButtonIconHeight,
    moreButtonIconWidth,
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
    const { publicId: organizationPublicId } = useStore(organizationsStores.item);
    const contentWrapperPadding = items?.length ? channelsContentPadding : noChannelsContentPadding;
    const contentWrapperBackground = items?.length ? white : 'transparent';
    const organizationPublicIdString = typeof organizationPublicId === 'string' ? organizationPublicId : '';

    const onClickAddButton = () => history.push(globalPrefixUrl + routes.campaignManager.channels.create);
    const onClickEditButton = (id: string) => () => history.push(globalPrefixUrl + channelsEdit + `/${id}`);
    const onClickMoreButton = (id: string) => () => history.push(globalPrefixUrl + channel + `/${id}`, '_blank');
    const onClickHowItWork = () => history.push(globalPrefixUrl + routes.campaignManager.channels.help);

    const dataTable: DataTable[] | undefined = items?.map(({ name, id = '', isPrivate }) => ({
        cells: [
            <Row key={id} alignCenter>
                <ChannelNameSpan>{name}</ChannelNameSpan>
            </Row>,
            <Row key={id}>
                <CopyableField
                    data={getFullScriptStringChannelViewer(organizationPublicIdString, id)}
                    subject={`channelId=${id}`}
                />
            </Row>,
            <Checkbox key={id} disabled defaultValue={isPrivate} />,
            <Row key={id} alignCenter>
                <MarginWrapper marginRight="10px">
                    <ImgButton
                        backgroundColor="transparent"
                        height={editButtonDiameter}
                        width={editButtonDiameter}
                        onClick={onClickEditButton(id)}
                    >
                        <CustomImg
                            height={copyButtonIconDiameter}
                            src={editButtonIcon}
                            width={copyButtonIconDiameter}
                        />
                    </ImgButton>
                </MarginWrapper>
                <ImgButton backgroundColor="transparent" height="39px" width="36px" onClick={onClickMoreButton(id)}>
                    <CustomImg height={moreButtonIconHeight} src={moreButtonIcon} width={moreButtonIconWidth} />
                </ImgButton>
            </Row>
        ],
        alignment: ['start', ...new Array(4).fill('center')]
    }));

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
                <AddButton onClick={onClickAddButton}>Add Channel</AddButton>
                <Span pointer uppercase color="#3333FF" textDecoration="underline" onClick={onClickHowItWork}>
                    How it works
                </Span>
            </Section>
            <Section>
                <ContentWrapper backgroundColor={contentWrapperBackground} padding={contentWrapperPadding} width="100%">
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
                </ContentWrapper>
            </Section>
        </CampaignManagerLayout>
    );
};
