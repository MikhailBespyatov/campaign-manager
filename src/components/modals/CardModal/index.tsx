import closeModalImg from 'assets/img/close_modal.svg';
import history from 'BrowserHistory';
import { ColumnBlockCell, RowBlockCell } from 'components/common/blocks/BlockCell';
import { HighlightedTitleBlock } from 'components/common/blocks/HighlightedTitleBlock';
import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Loader } from 'components/common/Loader';
import { ClosableTag } from 'components/common/tags/ClosableTag';
import { Span } from 'components/common/typography/Span';
import { P } from 'components/common/typography/titles/P';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { CreateCampaignCard } from 'components/Layouts/Cards/CreateCampaignCard';
import {
    closeModalImgDiameter,
    miniMarginBottom,
    percentageSpanColor,
    scoreTitleColor,
    validatorsPadding
} from 'components/modals/CardModal/constants';
import { Wrapper } from 'components/modals/CardModal/styles';
import { routes } from 'constants/routes';
import { primaryPadding, secondaryPadding, tertiaryPadding } from 'constants/styles';
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

    const onDetailsClick = () => {
        history.push(routes.campaignManager.discover.details);
        modalEvents.closeCardModal();
    };

    return (
        <Wrapper visible={visible}>
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
                marginRight="0"
                title="Video Name"
            >
                {loading ? (
                    <RowBlockCell padding={primaryPadding}>
                        <Loader />
                    </RowBlockCell>
                ) : (
                    <>
                        <ColumnBlockCell>
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
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Category</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>Shoes</P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Sub-cat</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>Sport shoes</P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Item</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>Superstar</P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Videos</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>10 (20)</P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Creator</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>Miles Stone</P>
                                        </Row>
                                    </Column>
                                </Row>
                            </RowBlockCell>
                            <RowBlockCell padding={validatorsPadding}>
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
                                <Row marginBottom={miniMarginBottom}>
                                    <SmallSpan>Preview</SmallSpan>
                                </Row>
                                <Row>
                                    <P>1200</P>
                                </Row>
                                <Row marginBottom={miniMarginBottom}>
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
                                        <EngagementSpan>{engagement?.viewsD1Percentage || 0}%</EngagementSpan>
                                        <EngagementSpan>{engagement?.viewsD2Percentage || 0}%</EngagementSpan>
                                        <EngagementSpan>{engagement?.viewsD3Percentage || 0}%</EngagementSpan>
                                        <EngagementSpan>{engagement?.viewsD4Percentage || 0}%</EngagementSpan>
                                    </Column>
                                </Row>
                            </RowBlockCell>
                            <RowBlockCell padding={validatorsPadding}>
                                <Row>
                                    <Subtitle>Engagement</Subtitle>
                                </Row>
                                <Row>
                                    <Column marginRight={'50px'}>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Like</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.likeCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.likesPercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Save</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.saveCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.savesPercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Comment</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.commentCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>
                                                ({engagement?.commentsPercentage || 0}%)
                                            </SmallSpan>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Rate</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.ratingCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.RatingsPercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Honesty</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.honestyCount || 0}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.honestyPercentage || 0}%)</SmallSpan>
                                        </Row>
                                    </Column>
                                    <Column>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Creativity</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.likeCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.likePercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Positivity</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.likeCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.likePercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Click</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.clickCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.clicksPercentage || 0}%)</SmallSpan>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Buy</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.buyCount}</P>&nbsp;
                                            <SmallSpan opacity={0.5}>({engagement?.buysPercentage || 0}%)</SmallSpan>
                                        </Row>
                                    </Column>
                                </Row>
                            </RowBlockCell>
                        </ColumnBlockCell>
                        <ColumnBlockCell removeBorder>
                            <RowBlockCell removeBorder padding={validatorsPadding}>
                                <Row marginBottom="40px">
                                    <Subtitle>Additional details</Subtitle>
                                </Row>
                                <Row marginBottom={miniMarginBottom}>
                                    <SmallSpan>Category</SmallSpan>
                                </Row>
                                <Row>
                                    <P>Apparel, Accessories</P>
                                </Row>
                                <Row marginBottom={miniMarginBottom}>
                                    <SmallSpan>Sub-category</SmallSpan>
                                </Row>
                                <Row>
                                    <P>Socks, Sunglasses</P>
                                </Row>
                                <Row marginBottom={miniMarginBottom}>
                                    <SmallSpan>Item</SmallSpan>
                                </Row>
                                <Row>
                                    <P>8 Pack sports whipstart</P>
                                </Row>
                            </RowBlockCell>
                            <RowBlockCell removeBorder padding={validatorsPadding}>
                                <Row marginBottom="40px">
                                    <Subtitle>&nbsp;</Subtitle>
                                </Row>
                                <Row marginBottom={miniMarginBottom}>
                                    <SmallSpan>In-use</SmallSpan>
                                </Row>
                                <Row>
                                    <P>YEAY, Zelando, Submarino</P>
                                </Row>
                                <Row marginBottom={miniMarginBottom}>
                                    <SmallSpan>In-promotion</SmallSpan>
                                </Row>
                                <Row>
                                    <P>Zelando</P>
                                </Row>
                                <Row marginBottom={miniMarginBottom}>
                                    <SmallSpan>Available</SmallSpan>
                                </Row>
                                <Row>
                                    <P>YEAY, Zelando, Submarino, Adidas</P>
                                </Row>
                            </RowBlockCell>
                            <RowBlockCell removeBorder padding={validatorsPadding}>
                                <Row marginBottom="40px">
                                    <Subtitle>Hashtags</Subtitle>
                                </Row>
                                <Row marginBottom={miniMarginBottom}>
                                    <ClosableTag closable>ADIDAS</ClosableTag>
                                    <ClosableTag closable>SUPERSTAR</ClosableTag>
                                    <ClosableTag closable>SPORTSHOE</ClosableTag>
                                </Row>
                            </RowBlockCell>
                        </ColumnBlockCell>
                        <ColumnBlockCell>
                            <Section justifyCenter marginBottom={tertiaryPadding}>
                                <Column marginRight="50px">
                                    <RoundedButton onClick={onDetailsClick}>Details</RoundedButton>
                                </Column>
                                <RoundedButton reverse>+&nbsp;PROMOTE</RoundedButton>
                            </Section>
                        </ColumnBlockCell>
                    </>
                )}
            </HighlightedTitleBlock>
        </Wrapper>
    );
};
