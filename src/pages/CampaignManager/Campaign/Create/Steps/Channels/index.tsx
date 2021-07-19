import WOMLogo from 'assets/img/sample_logo.png';
import { BarItem } from 'components/common/dividers/BarItem';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Checkbox } from 'components/common/inputs/NewDesign/Checkbox';
import { Table } from 'components/common/tables/NewDesign/Table';
import { Loader } from 'components/dynamic/Loader';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { OverflowAutoLayout } from 'components/Layouts';
import { PaginationLayout } from 'components/Layouts/PaginationLayout';
import { tertiaryMargin } from 'constants/styles';
import { useField } from 'effector-forms';
import { useStore } from 'effector-react';
import {
    channelsItem,
    channelsItemMarginRight,
    channelsPadding,
    publicChannelParameters
} from 'pages/CampaignManager/Campaign/Create/Steps/Channels/constants';
import React, { FC, useEffect, useState } from 'react';
import {
    channelsEvents,
    channelsStores,
    privateChannelsEffects,
    privateChannelsEvents,
    privateChannelsStores,
    publicChannelsEffects,
    publicChannelsEvents,
    publicChannelsStores
} from 'stores/channels';
import { forms } from 'stores/forms';
import { organizationsStores } from 'stores/organizations';
import { CreateCampaignStepsProps, DataTable } from 'types';
import { ChannelNameSpan, ChannelThumbnail, TitlePublicChannel } from './styles';

interface ChannelTableProps {
    selectedPublicChannel?: string;
    channels?: WOM.ChannelResponse[];
    selectedChannelNames: string[];
    onChangeChannelItem: (channel: string) => (checked: boolean) => void;
}

const ChannelTable = ({
    selectedPublicChannel,
    channels,
    selectedChannelNames,
    onChangeChannelItem
}: ChannelTableProps) => {
    const dataTable: DataTable[] | undefined = channels?.map(({ name, id = '' }) => ({
        cells: [
            <Row key={id} alignCenter>
                <MarginWrapper marginLeft="8px" marginRight="17px">
                    <ChannelThumbnail>
                        <CustomImg src={/*imageUrl ||*/ WOMLogo} />
                    </ChannelThumbnail>
                </MarginWrapper>
                <ChannelNameSpan>{name}</ChannelNameSpan>
            </Row>,
            // <Row key={id} alignCenter maxWidth="410px">
            //     <CopyableField key={id} subject={id} />
            // </Row>,
            <Checkbox key={id} defaultValue={selectedChannelNames.includes(id)} onChange={onChangeChannelItem(id)} />
        ],
        isCheckedRow: selectedChannelNames.includes(id),
        alignment: ['start', /*'center',*/ 'center']
    }));

    return (
        <>
            {selectedPublicChannel && (
                <MarginWrapper marginBottom="10px">
                    <TitlePublicChannel>{selectedPublicChannel}</TitlePublicChannel>
                </MarginWrapper>
            )}
            <OverflowAutoLayout>
                <Table columnSizes={[1, /* 2,*/ 1]} columns={publicChannelParameters} data={dataTable} />
            </OverflowAutoLayout>
        </>
    );
};

const { getPublicChannels } = publicChannelsEffects;
const { getPrivateChannels } = privateChannelsEffects;

const { updatePublicChannelsValues } = publicChannelsEvents;
const { setIsFirstToFalse /* setIsFirstToTrue*/ } = channelsEvents;

const { updatePrivateChannelsValues, invokeGetPrivateChannels } = privateChannelsEvents;

export const Channels: FC<CreateCampaignStepsProps> = () => {
    const { publicId } = useStore(organizationsStores.item);
    const [activeChannels, setActiveChannels] = useState(channelsItem[0].path);
    //const [selectedPublicChannel, setSelectedPublicChannel] = useState<string | undefined>();
    //const [selectedChannelNames, setSelectedChannelNames] = useState<string[]>([]);

    const { value, onChange } = useField(forms.createCampaignForm.fields.channels);

    const { items: privateTypeChannels, totalRecords: privateChannelsTotalRecords } = useStore(
        privateChannelsStores.privateChannels
    );

    const { items: publicTypeChannels, totalRecords: publicChannelsTotalRecords } = useStore(
        publicChannelsStores.publicChannels
    );

    const isFirst = useStore(channelsStores.isFirst);

    const { limit: publicChannelsLimit, pageIndex: publicChannelsPageIndex } = useStore(
        publicChannelsStores.publicChannelsValues
    );

    const { limit: privateChannelsLimit, pageIndex: privateChannelsPageIndex } = useStore(
        privateChannelsStores.privateChannelsValues
    );

    const publicChannelsIsLoading = useStore(getPublicChannels.pending);
    const privateChannelsIsLoading = useStore(getPrivateChannels.pending);

    const isPublicChannel = activeChannels === channelsItem[0].path;

    //Mock for development
    //const publicChannels = publicChannelsMock;
    //const privateChannels = privateChannelMock;
    //const publicChannel = publicChannels.find(({ name }) => name === selectedPublicChannel);
    //const publicChannelItem = publicChannel ? publicChannel.item : [];

    // const onChangePublicSelector = (channel: string) => (checked: boolean) => {
    //     checked ? setSelectedPublicChannel(channel) : setSelectedPublicChannel(undefined);
    //     onChange([]);
    // };

    const onChangeChannelItem = (channel: string) => (checked: boolean) => {
        checked ? onChange([...value, channel]) : onChange(value.filter((item: string) => item !== channel));
    };

    const onChangeChannelType = (path: string) => {
        setActiveChannels(path);
        //setSelectedPublicChannel(undefined);
        //onChange([]);
    };

    const onPublicChannelsPaginationChange = (current: number) =>
        updatePublicChannelsValues({
            pageIndex: current
        });

    const onPublicChannelsSizeChange = (current: number, size: number) =>
        updatePublicChannelsValues({
            pageIndex: current,
            limit: size
        });

    const onPrivateChannelsPaginationChange = (current: number) =>
        updatePrivateChannelsValues({
            pageIndex: current
        });

    const onPrivateChannelsSizeChange = (current: number, size: number) =>
        updatePrivateChannelsValues({
            pageIndex: current,
            limit: size
        });

    useEffect(() => {
        if (isFirst && publicId) {
            updatePublicChannelsValues({
                merchantId: publicId?.slice(-24)
            });

            invokeGetPrivateChannels();

            setIsFirstToFalse();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [publicId]);

    return (
        <>
            <ContentWrapper padding={channelsPadding}>
                <Row marginBottom={tertiaryMargin}>
                    {channelsItem.map(({ path }) => (
                        <MarginWrapper key={path} marginRight={channelsItemMarginRight}>
                            <BarItem
                                withoutBorderLine
                                active={activeChannels === path}
                                path={path}
                                onClick={onChangeChannelType}
                            >
                                {`${path} (${
                                    path === channelsItem[0].path
                                        ? publicTypeChannels?.length
                                        : privateTypeChannels?.length
                                })`}
                            </BarItem>
                        </MarginWrapper>
                    ))}
                </Row>

                {isPublicChannel ? (
                    <>
                        {/* <PublicChannelRadio noWrap>
                            {publicChannels.map(({ name }) => (
                                <Section key={name} marginBottom={primaryMargin}>
                                    <Radio
                                        defaultValue={name === selectedPublicChannel}
                                        onChange={onChangePublicSelector(name)}
                                    >
                                        {name}
                                    </Radio>
                                </Section>
                            ))}
                        </PublicChannelRadio> */}
                        <PaginationLayout
                            limit={publicChannelsLimit}
                            pageIndex={publicChannelsPageIndex}
                            totalRecords={publicChannelsTotalRecords}
                            onPaginationChange={onPublicChannelsPaginationChange}
                            onSizeChange={onPublicChannelsSizeChange}
                        >
                            {publicChannelsIsLoading ? (
                                <Loader />
                            ) : (
                                <ChannelTable
                                    channels={publicTypeChannels || undefined}
                                    selectedChannelNames={value}
                                    onChangeChannelItem={onChangeChannelItem}
                                />
                            )}
                        </PaginationLayout>
                    </>
                ) : (
                    <PaginationLayout
                        limit={privateChannelsLimit}
                        pageIndex={privateChannelsPageIndex}
                        totalRecords={privateChannelsTotalRecords}
                        onPaginationChange={onPrivateChannelsPaginationChange}
                        onSizeChange={onPrivateChannelsSizeChange}
                    >
                        {privateChannelsIsLoading ? (
                            <Loader />
                        ) : (
                            <ChannelTable
                                channels={privateTypeChannels || undefined}
                                selectedChannelNames={value}
                                onChangeChannelItem={onChangeChannelItem}
                            />
                        )}
                    </PaginationLayout>
                )}
            </ContentWrapper>
            {/*{selectedPublicChannel && isPublicChannel && (*/}
            {/*    <Section marginTop="8px">*/}
            {/*        <ContentWrapper padding={channelsPadding} width="100%">*/}
            {/*            <PaginationLayout*/}
            {/*                limit={10}*/}
            {/*                pageIndex={0}*/}
            {/*                totalRecords={100}*/}
            {/*                onPaginationChange={(current: number) => {}}*/}
            {/*                onSizeChange={(current: number, size: number) => {}}*/}
            {/*            >*/}
            {/*                <ChannelTable*/}
            {/*                    channels={publicChannelItem}*/}
            {/*                    selectedChannelNames={value}*/}
            {/*                    selectedPublicChannel={selectedPublicChannel}*/}
            {/*                    onChangeChannelItem={onChangeChannelItem}*/}
            {/*                />*/}
            {/*            </PaginationLayout>*/}
            {/*        </ContentWrapper>*/}
            {/*    </Section>*/}
            {/*)}*/}
        </>
    );
};
