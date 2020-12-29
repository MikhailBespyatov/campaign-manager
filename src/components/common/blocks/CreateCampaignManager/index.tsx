import React, { FC, useState } from 'react';
import {
    CreateCampaignBlock,
    CreateCampaignBlockHeader,
    HeaderCreateCampaignManager,
    HeaderCreateWrapper,
    SelectCampaignBlock,
    SelectCampaignWrapper,
    SelectVideoDescription
} from './styles';
import { UniversalWrapper } from 'components/grid/wrappers/UniversalWrapperDeprecated';
import { Span } from 'components/common/typography/Span';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import {
    headerBackground,
    itemsCreateCampaign,
    selectVideoBackgroundColor
} from 'components/common/blocks/CreateCampaignManager/constants';
import { BarItem } from 'components/common/dividers/BarItem';
import { CreateCampaignForm } from 'components/FormComponents/forms/CreateCampaignForm';
import { SelectVideoBlock } from 'components/common/blocks/SelectVideoBlock';
import { modalEvents } from 'stores/modal';
import { useStore } from 'effector-react';
import { campaignsStores } from 'stores/campaigns';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { SelectedVideoCard } from 'components/Layouts/Cards/SelectedVideoCard';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';

export const CreateCampaignManager: FC = () => {
    const [isFirstPage, setIsFirstPage] = useState(true);
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
                        <UniversalWrapper marginLeft="43px">
                            <Span fontSize="24px" fontWeight="400" lineHeight="22px">
                                CAMPAIGN MANAGER
                            </Span>
                        </UniversalWrapper>
                        <UniversalWrapper marginRight="43px">
                            <MarginWrapper marginRight="22px">
                                <ManualRoundedButton reverse background={headerBackground}>
                                    SAVE
                                </ManualRoundedButton>
                            </MarginWrapper>
                            <MarginWrapper>
                                <ManualRoundedButton
                                    reverse
                                    background={headerBackground}
                                    mainColor={'red'}
                                    onClick={handleOpenPopUpDiscard}
                                >
                                    DISCARD
                                </ManualRoundedButton>
                            </MarginWrapper>
                        </UniversalWrapper>
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
                        <UniversalWrapper
                            background={selectVideoBackgroundColor}
                            direction="column"
                            height="100%"
                            padding="15px"
                        >
                            <MarginWrapper marginTop="7px">
                                <Span fontSize="16px" fontWeight="600" lineHeight="20px">
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
                        </UniversalWrapper>
                    )}
                </SelectCampaignBlock>
                <SelectCampaignBlock>
                    <CreateCampaignBlock>
                        <MarginWrapper marginBottom="0" marginLeft="23px" marginTop="22px">
                            <CreateCampaignBlockHeader>
                                {itemsCreateCampaign.map(({ path }, index) => (
                                    <BarItem
                                        key={path}
                                        active={(index === 0 && isFirstPage) || (index === 1 && !isFirstPage)}
                                        namePage={''}
                                        path={path}
                                        onClick={() => setIsFirstPage(true)}
                                    >
                                        {path}
                                    </BarItem>
                                ))}
                            </CreateCampaignBlockHeader>
                        </MarginWrapper>
                        <CreateCampaignForm isFirstPage={isFirstPage} onClick={setIsFirstPage} />
                    </CreateCampaignBlock>
                </SelectCampaignBlock>
            </SelectCampaignWrapper>
        </MarginWrapper>
    );
};
