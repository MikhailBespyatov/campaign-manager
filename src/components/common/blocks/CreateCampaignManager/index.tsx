import React, { FC, useState } from 'react';
import {
    CreateCampaignBlock,
    CreateCampaignBlockHeader,
    HeaderCreateCampaignManager,
    HeaderCreateWrapper,
    SelectCampaignBlock,
    SelectCampaignWrapper,
    SelectedVideo,
    SelectVideoDescription
} from './styles';
import { Span } from 'components/common/typography/Span';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import {
    headerBackground,
    itemsCreateCampaign,
    selectVideoBackgroundColor
} from 'components/common/blocks/CreateCampaignManager/constants';
import { BarItem } from 'components/common/dividers/BarItem';
import { SelectVideoBlock } from 'components/common/blocks/SelectVideoBlock';
import { modalEvents } from 'stores/modal';
import { useStore } from 'effector-react';
import { campaignsStores } from 'stores/campaigns';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { SelectedVideoCard } from 'components/Layouts/Cards/SelectedVideoCard';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { defaultFontWeight } from 'constants/defaults';

export const CreateCampaignManager: FC = () => {
    const [activeSubPage, setActiveSubPage] = useState(itemsCreateCampaign[0].path);
    const initialContentIds = useStore(campaignsStores.contentIds);

    const handleOpenPopUpDiscard = () =>
        modalEvents.openPopUpCampaignManager({
            visible: true,
            popUp: 'discard'
        });

    return (
        <MarginWrapper marginBottom="32px">
            <MarginWrapper marginBottom="14px">
                <HeaderCreateCampaignManager>
                    <HeaderCreateWrapper>
                        <MarginWrapper marginLeft="43px">
                            <Span fontSize="24px" fontWeight="400" lineHeight="22px">
                                CAMPAIGN MANAGER
                            </Span>
                        </MarginWrapper>
                        <Row marginBottom="0" marginRight="43px">
                            <MarginWrapper marginRight="22px">
                                <ManualRoundedButton reverse background={headerBackground}>
                                    SAVE
                                </ManualRoundedButton>
                            </MarginWrapper>
                            <ManualRoundedButton
                                reverse
                                background={headerBackground}
                                mainColor={'red'}
                                onClick={handleOpenPopUpDiscard}
                            >
                                DISCARD
                            </ManualRoundedButton>
                        </Row>
                    </HeaderCreateWrapper>
                </HeaderCreateCampaignManager>
            </MarginWrapper>
            <SelectCampaignWrapper>
                <SelectCampaignBlock>
                    {!initialContentIds.length ? (
                        <SelectVideoDescription>
                            <SelectVideoBlock />
                        </SelectVideoDescription>
                    ) : (
                        <SelectedVideo background={selectVideoBackgroundColor}>
                            <MarginWrapper marginTop="7px">
                                <Span fontSize="16px" fontWeight={defaultFontWeight} lineHeight="20px">
                                    {initialContentIds.length} Video Selected
                                </Span>
                            </MarginWrapper>
                            <Row height="100%">
                                {initialContentIds.map(({ uriPrimary, womContentId }) => (
                                    <MarginWrapper key={womContentId} marginRight="25px" marginTop="30px">
                                        <SelectedVideoCard id={womContentId} uriPrimary={uriPrimary} />
                                    </MarginWrapper>
                                ))}
                            </Row>
                        </SelectedVideo>
                    )}
                </SelectCampaignBlock>
                <SelectCampaignBlock>
                    <CreateCampaignBlock>
                        <MarginWrapper marginBottom="0" marginLeft="23px" marginTop="22px">
                            <CreateCampaignBlockHeader>
                                {itemsCreateCampaign.map(({ path }, index) => {
                                    const changeSubPageClick = () => (!index ? setActiveSubPage(path) : undefined);
                                    return (
                                        <BarItem
                                            key={path}
                                            active={activeSubPage === path}
                                            namePage={''}
                                            path={path}
                                            onClick={changeSubPageClick}
                                        >
                                            {path}
                                        </BarItem>
                                    );
                                })}
                            </CreateCampaignBlockHeader>
                        </MarginWrapper>
                        {/*<CreateCampaignForm activeSubPage={activeSubPage} onClick={setActiveSubPage} />*/}
                    </CreateCampaignBlock>
                </SelectCampaignBlock>
            </SelectCampaignWrapper>
        </MarginWrapper>
    );
};
