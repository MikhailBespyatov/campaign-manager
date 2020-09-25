import closeModalImg from 'assets/img/close_modal.svg';
import { RowBlockCell } from 'components/common/blocks/BlockCell';
import { HighlightedTitleBlock } from 'components/common/blocks/HighlightedTitleBlock';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/typography/Span';
import { P } from 'components/common/typography/titles/P';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CreateCampaignCard } from 'components/Layouts/Cards/CreateCampaignCard';
import {
    closeModalImgDiameter,
    percentageSpanColor,
    scoreTitleColor,
    validatorsPadding
} from 'components/modals/CardModal/constants';
import { Wrapper } from 'components/modals/CardModal/styles';
import { primaryPadding, secondaryPadding } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { campaignContentEffects, campaignContentStores } from 'stores/campaignContent';
import { loadingStores } from 'stores/loading';
import { modalEvents, modalStores } from 'stores/modal';
import { roundScore } from 'utils/usefulFunctions';

interface SmallSpanProps {
    opacity?: number;
}

const Subtitle: FC = ({ children }) => (
    <Span fontSize="18px" fontWeight="700" lineHeight="28px">
        {children}
    </Span>
);

const SmallSpan: FC<SmallSpanProps> = ({ children, opacity }) => (
    <Span fontSize="12px" lineHeight="20px" opacity={opacity ? opacity : 0.4}>
        {children}
    </Span>
);

const PercentageSpan: FC = ({ children }) => (
    <Span color={percentageSpanColor} fontSize="14px" lineHeight="22px">
        {children}
    </Span>
);

const EngagementSpan: FC = ({ children }) => (
    <Span fontSize="14px" lineHeight="22px">
        {children}
    </Span>
);

export const CardModal = () => {
    const { visible, id } = useStore(modalStores.cardModal);
    // @ts-ignore
    const { uriPrimary, womQualityScore, engagement } = useStore(campaignContentStores.item);
    const loading = useStore(loadingStores.loading);

    useEffect(() => {
        visible && campaignContentEffects.getItemById(id);
    }, [id, visible]);

    const onClose = () => modalEvents.closeCardModal();

    return (
        <Wrapper visible={visible}>
            <MarginWrapper margin="auto">
                <HighlightedTitleBlock
                    buttons={
                        <CustomImg
                            pointer
                            height={closeModalImgDiameter}
                            src={closeModalImg}
                            width={closeModalImgDiameter}
                            onClick={onClose}
                        />
                    }
                    title="Video Name"
                >
                    {loading ? (
                        <RowBlockCell padding={primaryPadding}>
                            <Loader />
                        </RowBlockCell>
                    ) : (
                        <>
                            <RowBlockCell padding={primaryPadding}>
                                <Row marginBottom="0">
                                    <Column marginRight={primaryPadding}>
                                        <CreateCampaignCard uriPrimary={uriPrimary} womQualityScore={womQualityScore} />
                                    </Column>
                                    <Column>
                                        <Row>
                                            <Subtitle>Video details</Subtitle>
                                        </Row>
                                        <SmallSpan>Brand</SmallSpan>
                                        <Row>
                                            <P>Adidas</P>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Category</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>Shoes</P>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Sub-cat</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>Sport shoes</P>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Item</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>Superstar</P>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Videos</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>10 (20)</P>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Creator</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>Miles Stone</P>
                                        </Row>
                                    </Column>
                                </Row>
                            </RowBlockCell>
                            <RowBlockCell padding={validatorsPadding}>
                                <Column>
                                    <Row>
                                        <Subtitle>Validators</Subtitle>
                                    </Row>
                                    <Row>
                                        <Column marginRight={primaryPadding}>
                                            <P color={scoreTitleColor}>H</P>
                                            <P>{roundScore(womQualityScore?.authenticity || 0)}</P>
                                        </Column>
                                        <Column marginRight={primaryPadding}>
                                            <P color={scoreTitleColor}>C</P>
                                            <P>{roundScore(womQualityScore?.creativity || 0)}</P>
                                        </Column>
                                        <Column marginRight={'0'}>
                                            <P color={scoreTitleColor}>P</P>
                                            <P>{roundScore(womQualityScore?.positivity || 0)}</P>
                                        </Column>
                                    </Row>
                                    <Row>
                                        <Subtitle>Viewers</Subtitle>
                                    </Row>
                                    <Row marginBottom="4px">
                                        <SmallSpan>Preview</SmallSpan>
                                    </Row>
                                    <Row>
                                        <P>1200</P>
                                    </Row>
                                    <Row marginBottom="4px">
                                        <SmallSpan>View</SmallSpan>
                                    </Row>
                                    <Row alignCenter>
                                        <P>1152</P>&nbsp;<SmallSpan opacity={0.5}>(96.0%)</SmallSpan>
                                    </Row>
                                    <Row>
                                        <Column marginRight={primaryPadding}>
                                            <PercentageSpan>{'< 25%'}</PercentageSpan>
                                            <PercentageSpan>25% - 50%</PercentageSpan>
                                            <PercentageSpan>50% - 75%</PercentageSpan>
                                            <PercentageSpan>{'> 75%'}</PercentageSpan>
                                        </Column>
                                        <Column>
                                            <EngagementSpan>{engagement?.viewsD1Percentage}%</EngagementSpan>
                                            <EngagementSpan>{engagement?.viewsD2Percentage}%</EngagementSpan>
                                            <EngagementSpan>{engagement?.viewsD3Percentage}%</EngagementSpan>
                                            <EngagementSpan>{engagement?.viewsD4Percentage}%</EngagementSpan>
                                        </Column>
                                    </Row>
                                </Column>
                            </RowBlockCell>
                            <RowBlockCell padding={validatorsPadding}>
                                {/* <Column></Column> */}
                                <Row>
                                    <Subtitle>Engagement</Subtitle>
                                </Row>
                                <Row>
                                    <Column marginRight={'50px'}>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Like</SmallSpan>
                                        </Row>
                                        <Row marginBottom={secondaryPadding}>
                                            <P>{engagement?.likeCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.likesPercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Save</SmallSpan>
                                        </Row>
                                        <Row marginBottom={secondaryPadding}>
                                            <P>{engagement?.saveCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.savesPercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Comment</SmallSpan>
                                        </Row>
                                        <Row marginBottom={secondaryPadding}>
                                            <P>{engagement?.commentCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>
                                                ({engagement?.commentsPercentage || 0}%)
                                            </SmallSpan>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Rate</SmallSpan>
                                        </Row>
                                        <Row marginBottom={secondaryPadding}>
                                            <P>{engagement?.ratingCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.RatingsPercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Honesty</SmallSpan>
                                        </Row>
                                        <Row marginBottom={secondaryPadding}>
                                            <P>{engagement?.honestyCount || 0}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.honestyPercentage || 0}%)</SmallSpan>
                                        </Row>
                                    </Column>
                                    <Column>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Creativity</SmallSpan>
                                        </Row>
                                        <Row marginBottom={secondaryPadding}>
                                            <P>{engagement?.likeCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.likePercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Positivity</SmallSpan>
                                        </Row>
                                        <Row marginBottom={secondaryPadding}>
                                            <P>{engagement?.likeCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.likePercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Click</SmallSpan>
                                        </Row>
                                        <Row marginBottom={secondaryPadding}>
                                            <P>{engagement?.clickCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.clicksPercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom="4px">
                                            <SmallSpan>Buy</SmallSpan>
                                        </Row>
                                        <Row marginBottom={secondaryPadding}>
                                            <P>{engagement?.buyCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.buysPercentage || 0}%)</SmallSpan>
                                        </Row>
                                    </Column>
                                </Row>
                            </RowBlockCell>
                        </>
                    )}
                </HighlightedTitleBlock>
            </MarginWrapper>
        </Wrapper>
    );
};
