import editButtonIcon from 'assets/img/edit_icon.svg';
import { ImgButton } from 'components/common/buttons/ImgButton';
import { AddButton } from 'components/common/buttons/NewDesign/AddButton';
import { ToggleButton } from 'components/common/buttons/ToggleButton';
import { CopyableField } from 'components/common/features/CopyableField';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Table } from 'components/common/tables/NewDesign/Table';
import { Loader } from 'components/dynamic/Loader';
import { TagFilter } from 'components/filters/TagFilter';
import { FlexGrow, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { OverflowAutoLayout } from 'components/Layouts';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { PaginationLayout } from 'components/Layouts/PaginationLayout';
import { channelsEdit, routes } from 'constants/routes';
import { blue5 } from 'constants/styles';
import { useStore } from 'effector-react';
import { copyButtonIconDiameter } from 'pages/CampaignManager/Campaign/Create/Steps/Channels/constants';
import { ChannelNameSpan } from 'pages/CampaignManager/Campaign/Create/Steps/Channels/styles';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { channelsEffects, channelsEvents, channelsStores } from 'stores/channels';
import { themeStores } from 'stores/theme';
import { DataTable } from 'types';
import { channelParameters, channelsContentPadding, editButtonDiameter } from './constants';

const { invokeGetChannels, setIsFirstToFalse, updateValues } = channelsEvents;

export const Channels = () => {
    const history = useHistory();
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const { items, totalRecords } = useStore(channelsStores.items);
    const isFirst = useStore(channelsStores.isFirst);
    const { limit, pageIndex } = useStore(channelsStores.values);
    const loading = useStore(channelsEffects.getItems.pending);

    const onClickAddButton = () => history.push(globalPrefixUrl + routes.campaignManager.channels.create);
    const onClickEditButton = (id: string) => () => history.push(globalPrefixUrl + channelsEdit + `/${id}`);

    //Mock
    // const channels = channelsMock;
    const channelLink = 'https://something.yeay.com/?merchantid=22&channelid&channelid';

    const dataTable: DataTable[] | undefined = items?.map(({ name, id = '', isPrivate }) => ({
        cells: [
            <Row key={id} alignCenter>
                <ChannelNameSpan>{name}</ChannelNameSpan>
            </Row>,
            <CopyableField key={id} copyData={channelLink} />,
            <ToggleButton key={id} disabled value={isPrivate} />,
            <ImgButton
                key={id}
                backgroundColor={blue5}
                height={editButtonDiameter}
                width={editButtonDiameter}
                onClick={onClickEditButton(id)}
            >
                <CustomImg height={copyButtonIconDiameter} src={editButtonIcon} width={copyButtonIconDiameter} />
            </ImgButton>
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
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CampaignManagerLayout>
            <Section marginBottom="8px">
                <ContentWrapper padding={channelsContentPadding} width="100%">
                    <Row noWrap>
                        <FlexGrow marginRight="24px">
                            <TagFilter
                                defaultChecked
                                tagsValues={['test']}
                                onChange={(checked: boolean, values: string[]) => {}}
                            />
                        </FlexGrow>
                        <AddButton onClick={onClickAddButton}>Add Channel</AddButton>
                    </Row>
                </ContentWrapper>
            </Section>
            <Section>
                <ContentWrapper padding={channelsContentPadding} width="100%">
                    <PaginationLayout
                        limit={limit}
                        pageIndex={pageIndex}
                        totalRecords={totalRecords}
                        onPaginationChange={onPaginationChange}
                        onSizeChange={onSizeChange}
                    >
                        {loading ? (
                            <Loader />
                        ) : (
                            <OverflowAutoLayout>
                                <Table columnSizes={[2, 3, 1, 1]} columns={channelParameters} data={dataTable} />
                            </OverflowAutoLayout>
                        )}
                    </PaginationLayout>
                </ContentWrapper>
            </Section>
        </CampaignManagerLayout>
    );
};
