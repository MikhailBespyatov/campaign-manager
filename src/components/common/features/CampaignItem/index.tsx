import defaultImg from 'assets/img/search_icon.svg';
import history from 'BrowserHistory';
import { CampaignStatus } from 'components/common/blocks/CampaignStatus';
import { DateOfCampaignBlock } from 'components/common/blocks/DateOfCampaignBlock';
import { DateOfDetailsCampaignBlock } from 'components/common/blocks/DateOfDetailsCampaignBlock';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { SimpleButton } from 'components/common/buttons/SimpleButton';
import { Span } from 'components/common/typography/Span';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { routes } from 'constants/routes';
import { grey4, red, white } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { campaignsEvents } from 'stores/campaigns';
import { themeStores } from 'stores/theme';
import { Status } from 'types';
import { CampaignDetail, CampaignStatusBlock, ItemImgBlock } from './styles';

interface Props extends WOM.CampaignDetailResponse, Status {
    isDetailsPage?: boolean;
    backgroundImg?: string;
    hideShowStatisticButton?: boolean;
}

export const CampaignItem: FC<Props> = ({
    title,
    budget,
    isDetailsPage,
    backgroundImg,
    id = '',
    schedule,
    contentIds,
    status,
    hideShowStatisticButton
}) => {
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const isDraftStatus = status === 'draft';
    // const { primaryColor } = useStore(themeStores.theme);
    const onMoreInfoClick = () => history.push(globalPrefixUrl + routes.campaignManager.campaign.indexDetails + id);
    const onContinueClick = () => {
        campaignsEvents.setFormFromDraft(id);
        history.push(globalPrefixUrl + routes.campaignManager.campaign.create);
    };
    const onDeleteDraftClick = () => campaignsEvents.deleteDraftCampaign(id);

    return (
        <Row marginBottom="0">
            {isDetailsPage && <ItemImgBlock background={backgroundImg || defaultImg} />}
            <CampaignDetail marginRight={isDetailsPage ? '25px' : '0'}>
                <Column>
                    <MarginWrapper marginBottom="8px">
                        <Span fontSize="18px" fontWeight="400" lineHeight="22px">
                            {title}
                        </Span>
                    </MarginWrapper>
                    <MarginWrapper marginBottom="18px">
                        <Span color={grey4} fontSize="16px" fontWeight="400" lineHeight="22px">
                            {`Content: ${contentIds?.length} videos, Total Budget: ${budget?.budgetTotal} WOM`}
                        </Span>
                    </MarginWrapper>
                    <Row marginBottom="60px">
                        {isDetailsPage ? (
                            <>
                                <MarginWrapper marginRight="25px" marginTop="10px">
                                    <DateOfDetailsCampaignBlock
                                        date={schedule?.utcToStart || new Date().toISOString()}
                                        state="start"
                                    />
                                </MarginWrapper>
                                <MarginWrapper marginTop="10px">
                                    <DateOfDetailsCampaignBlock
                                        date={schedule?.utcToEnd || new Date().toISOString()}
                                        state="end"
                                    />
                                </MarginWrapper>
                            </>
                        ) : !isDraftStatus ? (
                            <>
                                <MarginWrapper marginRight="40px">
                                    <DateOfCampaignBlock
                                        date={schedule?.utcToStart || new Date().toISOString()}
                                        state="start"
                                    />
                                </MarginWrapper>
                                <DateOfCampaignBlock
                                    date={schedule?.utcToEnd || new Date().toISOString()}
                                    isExpiredBorder={status === 'expired'}
                                    state="end"
                                />
                            </>
                        ) : null}
                    </Row>
                    {/*    <Row marginBottom="0">*/}
                    {/*    {status === 'running' && (*/}
                    {/*        <MarginWrapper marginRight="16px">*/}
                    {/*            <ManualRoundedButton reverse background={white} height="57px" mainColor={primaryColor}>*/}
                    {/*                PAUSE CAMPAIGN*/}
                    {/*            </ManualRoundedButton>*/}
                    {/*        </MarginWrapper>*/}
                    {/*    )}*/}
                    {/*    {status === 'paused' && (*/}
                    {/*        <MarginWrapper marginRight="16px">*/}
                    {/*            <ManualRoundedButton reverse background={white} height="57px" mainColor={primaryColor}>*/}
                    {/*                RESUME CAMPAIGN*/}
                    {/*            </ManualRoundedButton>*/}
                    {/*        </MarginWrapper>*/}
                    {/*    )}*/}
                    {/*    /!*<MarginWrapper>*!/*/}
                    {/*    /!*    <ManualRoundedButton reverse background={white} height="57px" mainColor={'red'}>*!/*/}
                    {/*    /!*        REMOVE CAMPAIGN*!/*/}
                    {/*    /!*    </ManualRoundedButton>*!/*/}
                    {/*    /!*</MarginWrapper>*!/*/}
                    {/*</Row>*/}
                </Column>

                <CampaignStatusBlock>
                    <CampaignStatus daysRemaining={schedule?.remainingDays} status={status} />
                    {isDetailsPage || hideShowStatisticButton ? null : isDraftStatus ? (
                        <Row alignCenter>
                            <MarginWrapper marginRight="20px">
                                <SimpleButton
                                    backgroundColor={white}
                                    color={red}
                                    height="38px"
                                    width="167px"
                                    onClick={onDeleteDraftClick}
                                >
                                    Delete
                                </SimpleButton>
                            </MarginWrapper>
                            <ManualRoundedButton
                                borderRadius="8px"
                                height="38px"
                                width="167px"
                                onClick={onContinueClick}
                            >
                                CONTINUE
                            </ManualRoundedButton>
                        </Row>
                    ) : (
                        <ManualRoundedButton borderRadius="8px" height="38px" width="167px" onClick={onMoreInfoClick}>
                            SHOW STATISTICS
                        </ManualRoundedButton>
                    )}
                </CampaignStatusBlock>
            </CampaignDetail>
        </Row>
    );
};
