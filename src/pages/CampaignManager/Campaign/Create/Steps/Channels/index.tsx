import { CopyableField } from 'components/common/features/CopyableField';
import { Checkbox } from 'components/common/inputs/NewDesign/Checkbox';
import { Table } from 'components/common/tables/NewDesign/Table';
import { Loader } from 'components/dynamic/Loader';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { OverflowAutoLayout } from 'components/Layouts';
import { PaginationLayout } from 'components/Layouts/PaginationLayout';
import { useField } from 'effector-forms';
import { useStore } from 'effector-react';
import {
    channelsPadding,
    publicChannelParameters
} from 'pages/CampaignManager/Campaign/Create/Steps/Channels/constants';
import React, { FC, useEffect } from 'react';
import { channelsEffects, channelsEvents, channelsStores } from 'stores/channels';
import { forms } from 'stores/forms';
import { CreateCampaignStepsProps, DataTable } from 'types';
import { ChannelNameSpan, TitlePublicChannel } from './styles';

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
    const dataTable: DataTable[] | undefined = channels
        ?.filter(({ isPrivate }) => isPrivate)
        .map(({ name, id = '' }) => ({
            cells: [
                <ChannelNameSpan key={id}>{name}</ChannelNameSpan>,
                <CopyableField key={id} subject={id} />,
                <Checkbox
                    key={id}
                    defaultValue={selectedChannelNames.includes(id)}
                    onChange={onChangeChannelItem(id)}
                />
            ],
            isCheckedRow: selectedChannelNames.includes(id),
            alignment: ['center', 'center', 'center']
        }));

    return (
        <>
            {selectedPublicChannel && (
                <MarginWrapper marginBottom="10px">
                    <TitlePublicChannel>{selectedPublicChannel}</TitlePublicChannel>
                </MarginWrapper>
            )}
            <OverflowAutoLayout>
                <Table columnSizes={[1, 2, 1]} columns={publicChannelParameters} data={dataTable} />
            </OverflowAutoLayout>
        </>
    );
};

const { invokeGetChannels, setIsFirstToFalse, updateValues } = channelsEvents;

export const Channels: FC<CreateCampaignStepsProps> = () => {
    // const [activeChannels, setActiveChannels] = useState(channelsItem[0].path);
    // const [selectedPublicChannel, setSelectedPublicChannel] = useState<string | undefined>();
    // const [selectedChannelNames, setSelectedChannelNames] = useState<string[]>([]);

    const { value, onChange } = useField(forms.createCampaignForm.fields.channels);
    const { items: privateChannels, totalRecords } = useStore(channelsStores.items);
    const isFirst = useStore(channelsStores.isFirst);
    const { limit, pageIndex } = useStore(channelsStores.values);
    const loading = useStore(channelsEffects.getItems.pending);

    // const isPublicChannel = activeChannels === channelsItem[0].path;

    //Mock for development
    // const publicChannels = publicChannelsMock;
    // const privateChannels = privateChannelMock;
    // const publicChannel = publicChannels.find(({ name }) => name === selectedPublicChannel);
    // const publicChannelItem = publicChannel ? publicChannel.item : [];

    // const onChangePublicSelector = (channel: string) => (checked: boolean) => {
    //     checked ? setSelectedPublicChannel(channel) : setSelectedPublicChannel(undefined);
    //     onChange([]);
    // };

    const onChangeChannelItem = (channel: string) => (checked: boolean) => {
        checked ? onChange([...value, channel]) : onChange(value.filter((item: string) => item !== channel));
    };

    // const onChangeChannelType = (path: string) => {
    //     setActiveChannels(path);
    //     setSelectedPublicChannel(undefined);
    //     onChange([]);
    // };

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
        <>
            <ContentWrapper padding={channelsPadding}>
                {/*<Row marginBottom={tertiaryMargin}>*/}
                {/*    {channelsItem.map(({ path }) => (*/}
                {/*        <MarginWrapper key={path} marginRight={channelsItemMarginRight}>*/}
                {/*            <BarItem*/}
                {/*                withoutBorderLine*/}
                {/*                active={activeChannels === path}*/}
                {/*                path={path}*/}
                {/*                onClick={onChangeChannelType}*/}
                {/*            >*/}
                {/*                {`${path} (${*/}
                {/*                    path === channelsItem[0].path ? publicChannels.length : privateChannels.length*/}
                {/*                })`}*/}
                {/*            </BarItem>*/}
                {/*        </MarginWrapper>*/}
                {/*    ))}*/}
                {/*</Row>*/}
                {/*{isPublicChannel ? (*/}
                {/*    <PublicChannelRadio noWrap>*/}
                {/*        {publicChannels.map(({ name }) => (*/}
                {/*            <Section key={name} marginBottom={primaryMargin}>*/}
                {/*                <Radio*/}
                {/*                    defaultValue={name === selectedPublicChannel}*/}
                {/*                    onChange={onChangePublicSelector(name)}*/}
                {/*                >*/}
                {/*                    {name}*/}
                {/*                </Radio>*/}
                {/*            </Section>*/}
                {/*        ))}*/}
                {/*    </PublicChannelRadio>*/}
                {/*) : (*/}
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
                        <ChannelTable
                            channels={privateChannels}
                            selectedChannelNames={value}
                            onChangeChannelItem={onChangeChannelItem}
                        />
                    )}
                </PaginationLayout>
                {/*)}*/}
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
