import React, { FC, Fragment, useState } from 'react';
import { CreateCampaignStepsProps, DataTable } from 'types';
import { BarItem } from 'components/common/dividers/BarItem';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import {
    channelLogoDiameter,
    channelsItem,
    channelsItemMarginRight,
    channelsPadding,
    privateChannelMock,
    publicChannelParameters,
    publicChannelsMock
} from 'pages/CampaignManager/Campaign/Create/Steps/Channels/constants';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ChannelNameSpan, PublicChannelRadio, TitlePublicChannel } from './styles';
import { Radio } from 'components/common/inputs/NewDesign/Radio';
import { Checkbox } from 'components/common/inputs/NewDesign/Checkbox';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import mockChannelImg from 'assets/img/wom_logo.svg';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { useField } from 'effector-forms';
import { forms } from 'stores/forms';
import { PaginationLayout } from 'components/Layouts/PaginationLayout';
import { Table } from 'components/common/tables/NewDesign/Table';
import { CopyableField } from 'components/common/features/CopyableField';
import { OverflowAutoLayout } from 'components/Layouts';

interface ChannelTableProps {
    selectedPublicChannel?: string;
    channels: typeof privateChannelMock;
    selectedChannelNames: string[];
    onChangeChannelItem: (channel: string) => (checked: boolean) => void;
}

const ChannelTable = ({
    selectedPublicChannel,
    channels,
    selectedChannelNames,
    onChangeChannelItem
}: ChannelTableProps) => {
    const dataTable: DataTable[] = channels.map(({ channelLink, channelName }) => ({
        cells: [
            <Fragment key={channelName}>
                <MarginWrapper marginLeft="8px" marginRight="17px">
                    <CustomImg height={channelLogoDiameter} src={mockChannelImg} width={channelLogoDiameter} />
                </MarginWrapper>
                <ChannelNameSpan>{channelName}</ChannelNameSpan>
            </Fragment>,
            <CopyableField key={channelLink} copyData={channelLink} />,
            <Checkbox
                key={channelName}
                defaultValue={selectedChannelNames.includes(channelName)}
                onChange={onChangeChannelItem(channelName)}
            />
        ],
        isCheckedRow: selectedChannelNames.includes(channelName),
        alignment: ['start', 'center', 'center']
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

export const Channels: FC<CreateCampaignStepsProps> = () => {
    const [activeChannels, setActiveChannels] = useState(channelsItem[0].path);
    const [selectedPublicChannel, setSelectedPublicChannel] = useState<string | undefined>();
    // const [selectedChannelNames, setSelectedChannelNames] = useState<string[]>([]);

    const { value, onChange } = useField(forms.createCampaignForm.fields.channels);

    const isPublicChannel = activeChannels === channelsItem[0].path;

    //Mock for development
    const publicChannels = publicChannelsMock;
    const privateChannels = privateChannelMock;
    const publicChannel = publicChannels.find(({ name }) => name === selectedPublicChannel);
    const publicChannelItem = publicChannel ? publicChannel.item : [];

    const onChangePublicSelector = (channel: string) => (checked: boolean) => {
        checked ? setSelectedPublicChannel(channel) : setSelectedPublicChannel(undefined);
        onChange([]);
    };

    const onChangeChannelItem = (channel: string) => (checked: boolean) => {
        checked ? onChange([...value, channel]) : onChange(value.filter((item: string) => item !== channel));
    };

    const onChangeChannelType = (path: string) => {
        setActiveChannels(path);
        setSelectedPublicChannel(undefined);
        onChange([]);
    };

    return (
        <>
            <ContentWrapper padding={channelsPadding}>
                <Row marginBottom="16px">
                    {channelsItem.map(({ path }) => (
                        <MarginWrapper key={path} marginRight={channelsItemMarginRight}>
                            <BarItem
                                withoutBorderLine
                                active={activeChannels === path}
                                path={path}
                                onClick={onChangeChannelType}
                            >
                                {`${path} (${
                                    path === channelsItem[0].path ? publicChannels.length : privateChannels.length
                                })`}
                            </BarItem>
                        </MarginWrapper>
                    ))}
                </Row>
                {isPublicChannel ? (
                    <PublicChannelRadio noWrap>
                        {publicChannels.map(({ name }) => (
                            <Section key={name} marginBottom="8px">
                                <Radio
                                    defaultValue={name === selectedPublicChannel}
                                    onChange={onChangePublicSelector(name)}
                                >
                                    {name}
                                </Radio>
                            </Section>
                        ))}
                    </PublicChannelRadio>
                ) : (
                    <PaginationLayout
                        limit={10}
                        pageIndex={0}
                        totalRecords={100}
                        onPaginationChange={(current: number) => {}}
                        onSizeChange={(current: number, size: number) => {}}
                    >
                        <ChannelTable
                            channels={privateChannels}
                            selectedChannelNames={value}
                            onChangeChannelItem={onChangeChannelItem}
                        />
                    </PaginationLayout>
                )}
            </ContentWrapper>
            {selectedPublicChannel && isPublicChannel && (
                <Section marginTop="8px">
                    <ContentWrapper padding={channelsPadding} width="100%">
                        <PaginationLayout
                            limit={10}
                            pageIndex={0}
                            totalRecords={100}
                            onPaginationChange={(current: number) => {}}
                            onSizeChange={(current: number, size: number) => {}}
                        >
                            <ChannelTable
                                channels={publicChannelItem}
                                selectedChannelNames={value}
                                selectedPublicChannel={selectedPublicChannel}
                                onChangeChannelItem={onChangeChannelItem}
                            />
                        </PaginationLayout>
                    </ContentWrapper>
                </Section>
            )}
        </>
    );
};
