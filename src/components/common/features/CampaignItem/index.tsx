import history from 'BrowserHistory';
import { CampaignStatus } from 'components/common/blocks/CampaignStatus';
import { DateOfCampaignBlock } from 'components/common/blocks/DateOfCampaignBlock';
import { DateOfDetailsCampaignBlock } from 'components/common/blocks/DateOfDetailsCampaignBlock';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { buttonBorderRadius } from 'components/common/features/CampaignItem/constants';
//import { channelNamesArray } from 'components/common/features/CampaignItem/constants';
import { Span } from 'components/common/typography/Span';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { defaultFontSize } from 'constants/defaults';
import { routes } from 'constants/routes';
import { primaryButtonDiameter, red, secondaryMargin } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { campaignsEvents } from 'stores/campaigns';
import { themeStores } from 'stores/theme';
import { Status } from 'types';
import { CampaignDetail, CampaignStatusBlock, CampaignSubtitle, StyledSpan } from './styles';

interface CampaignSubtitleProps {
    videosQuantity?: number;
    womAmount?: number;
    womSpentAmount?: number;
}

export const CampaignSubtitleBlock: FC<CampaignSubtitleProps> = ({ videosQuantity, womAmount, womSpentAmount }) => (
    <CampaignSubtitle>
        Content&nbsp;<StyledSpan>{videosQuantity}&nbsp;videos,</StyledSpan>
        &nbsp;Total Budget&nbsp;<StyledSpan>{womAmount || 0}&nbsp;WOM</StyledSpan>
        &nbsp;Spent&nbsp;<StyledSpan>{womSpentAmount ? womSpentAmount.toFixed(1) : 0}&nbsp;WOM</StyledSpan>
    </CampaignSubtitle>
);

interface Props extends WOM.CampaignDetailResponse, Status {
    isDetailsPage?: boolean;
    backgroundImg?: string;
    hideShowStatisticButton?: boolean;
}

export const CampaignItem: FC<Props> = ({
    title,
    budget,
    isDetailsPage,
    //backgroundImg,
    id = '',
    schedule,
    contentIds,
    status,
    hideShowStatisticButton
}) => {
    //const { value: channelIDsArray } = useField(forms.createCampaignForm.fields.channels);

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
            {/* {isDetailsPage && <ItemImgBlock background={backgroundImg || defaultImg} />} */}
            <CampaignDetail>
                <Column>
                    <MarginWrapper marginBottom="5px">
                        <Span fontSize={defaultFontSize} fontWeight="400" lineHeight="17px">
                            {title}
                        </Span>
                    </MarginWrapper>
                    <MarginWrapper marginBottom={secondaryMargin}>
                        <CampaignSubtitleBlock
                            videosQuantity={contentIds?.length}
                            womAmount={budget?.budgetTotal}
                            womSpentAmount={budget?.budgetSpent}
                        />
                    </MarginWrapper>
                    <Row marginBottom="4px">
                        {isDetailsPage ? (
                            <>
                                <MarginWrapper marginRight="25px" marginTop={secondaryMargin}>
                                    <DateOfDetailsCampaignBlock
                                        date={schedule?.utcToStart || new Date().toISOString()}
                                        state="start"
                                    />
                                </MarginWrapper>
                                <MarginWrapper marginTop={secondaryMargin}>
                                    <DateOfDetailsCampaignBlock
                                        date={schedule?.utcToEnd || new Date().toISOString()}
                                        state="end"
                                    />
                                </MarginWrapper>
                            </>
                        ) : !isDraftStatus ? (
                            <>
                                <MarginWrapper marginRight="20px">
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
                    {/* {hideShowStatisticButton && channelNamesArray.length && (
                        <Section>
                            <Section marginBottom="8px" marginTop="8px">
                                <Span color={blue}>Channels Included in This Campaign</Span>
                            </Section>
                            <Column noWrap>
                                {channelNamesArray.map(name => (
                                    <IncludedChannelWrapper key={name}>
                                        <Span noWrap fontSize="12px" fontWeight="400">
                                            {name}
                                        </Span>
                                    </IncludedChannelWrapper>
                                ))}
                            </Column>
                        </Section>
                    )} */}
                    {/*    <Row marginBottom="0">*/}
                    {/*    {status === 'running' && (*/}
                    {/*        <MarginWrapper marginRight={tertiaryMargin}>*/}
                    {/*            <ManualRoundedButton reverse background={white} height="57px" mainColor={primaryColor}>*/}
                    {/*                PAUSE CAMPAIGN*/}
                    {/*            </ManualRoundedButton>*/}
                    {/*        </MarginWrapper>*/}
                    {/*    )}*/}
                    {/*    {status === 'paused' && (*/}
                    {/*        <MarginWrapper marginRight={tertiaryMargin}>*/}
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
                    <MarginWrapper marginBottom="20px">
                        <CampaignStatus daysRemaining={schedule?.remainingDays} status={status} />
                    </MarginWrapper>
                    {isDetailsPage || hideShowStatisticButton ? null : isDraftStatus ? (
                        <Row alignCenter marginTop="10px">
                            <MarginWrapper marginRight="20px">
                                <ManualRoundedButton
                                    background="transparent"
                                    borderRadius={buttonBorderRadius}
                                    fontSize="14px"
                                    fontWeight="400"
                                    height={primaryButtonDiameter}
                                    mainColor={red}
                                    minWidth="100px"
                                    onClick={onDeleteDraftClick}
                                >
                                    Delete
                                </ManualRoundedButton>
                            </MarginWrapper>
                            <ManualRoundedButton
                                borderRadius={buttonBorderRadius}
                                height={primaryButtonDiameter}
                                minWidth="fit-content"
                                onClick={onContinueClick}
                            >
                                CONTINUE
                            </ManualRoundedButton>
                        </Row>
                    ) : (
                        <Row>
                            {/* <MarginWrapper marginRight={secondaryMargin}>
                                <ManualRoundedButton
                                    background={lightPink}
                                    borderRadius= {buttonBorderRadius}
                                    fontWeight="700"
                                    height={primaryButtonDiameter}
                                    mainColor={red}
                                    minWidth="148px"
                                    onClick={Noop}
                                >
                                    REMOVE CAMPAIGN
                                </ManualRoundedButton>
                            </MarginWrapper>
                            <MarginWrapper marginRight={secondaryMargin}>
                                <ManualRoundedButton
                                    borderRadius= {buttonBorderRadius}
                                    fontWeight="700"
                                    height={primaryButtonDiameter}
                                    minWidth="65px"
                                    onClick={Noop}
                                >
                                    EDIT
                                </ManualRoundedButton>
                            </MarginWrapper> */}
                            <ManualRoundedButton
                                borderRadius={buttonBorderRadius}
                                fontWeight="700"
                                height={primaryButtonDiameter}
                                minWidth="148px"
                                onClick={onMoreInfoClick}
                            >
                                SHOW STATISTICS
                            </ManualRoundedButton>
                        </Row>
                    )}
                </CampaignStatusBlock>
            </CampaignDetail>
        </Row>
    );
};
