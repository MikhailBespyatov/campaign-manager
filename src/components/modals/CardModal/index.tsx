import closeModalImg from 'assets/img/close_modal.svg';
import history from 'BrowserHistory';
import { ColumnBlockCell, RowBlockCell } from 'components/common/blocks/BlockCell';
import { HighlightedTitleBlock } from 'components/common/blocks/HighlightedTitleBlock';
import { RoundedButton } from 'components/common/buttons/RoundedButton';
import { PercentageGrowth } from 'components/common/features/PercentageGrowth';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { InternalLink } from 'components/common/links/InternalLink';
import { Loader } from 'components/common/Loader';
import { ClosableTag } from 'components/common/tags/ClosableTag';
import { Span } from 'components/common/typography/Span';
import { P } from 'components/common/typography/titles/P';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { CreateCampaignCard } from 'components/Layouts/Cards/CreateCampaignCard';
import {
    closeModalImgDiameter,
    miniMarginBottom,
    percentageSpanColor,
    scoreTitleColor,
    validatorsPadding
} from 'components/modals/CardModal/constants';
import { Wrapper } from 'components/modals/CardModal/styles';
import { noContentMessage } from 'constants/messages';
import { routes } from 'constants/routes';
import { primaryPadding, secondaryPadding } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { FC, useEffect, useMemo } from 'react';
import { campaignContentEffects, campaignContentStores } from 'stores/campaignContent';
import { campaignsEvents } from 'stores/campaigns';
import { loadingStores } from 'stores/loading';
import { modalEvents, modalStores } from 'stores/modal';
import { themeStores } from 'stores/theme';
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

const body = document.getElementsByTagName('body')[0];

export const CardModal = () => {
    const { visible, id } = useStore(modalStores.cardModal);
    const { uriPrimary, womQualityScore, engagement, products, tags, inCampaignIds } = useStore(
        campaignContentStores.item
    );
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const loading = useStore(loadingStores.loading);

    const productsItem = useMemo(() => (products && products.length && products[0] !== 0 ? products[0] : {}), [
        products
    ]);
    const extraTags = productsItem.extraTags;
    // const username = userDetails && userDetails?.username;
    // const imageUrl = userDetails && userDetails?.profile && userDetails?.profile?.imageUrl;
    // const tagBrand = productsItem !== 0 ? productsItem?.tagBrand : '';
    // const tagCategory = productsItem !== 0 ? productsItem?.tagCategory : '';
    // const tagSubCategory = productsItem !== 0 ? productsItem?.tagSubCategory : '';
    // const item = productsItem !== 0 ? productsItem?.item : '';

    const onClose = () => modalEvents.closeCardModal();

    const onDetailsClick = () => {
        history.push(routes.campaignManager.discover.details + '/' + id);
        modalEvents.closeCardModal();
    };

    const onPromoteClick = () => {
        history.push(routes.campaignManager.campaign.create);
        campaignsEvents.pushContentId({ womContentId: id, uriPrimary, womQualityScore, products });
        modalEvents.closeCardModal();
    };

    useEffect(() => {
        if (visible) {
            campaignContentEffects.getItemById(id);
            body.style.overflow = 'hidden';
        } else body.style.overflow = 'auto';
    }, [id, visible]);

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
                                        <CreateCampaignCard
                                            products={products}
                                            uriPrimary={uriPrimary}
                                            womQualityScore={womQualityScore}
                                        />
                                    </Column>
                                    <Column>
                                        <Row>
                                            <Subtitle>Video details</Subtitle>
                                        </Row>
                                        <SmallSpan>Brand</SmallSpan>
                                        <Row>
                                            <P>{productsItem?.tagBrand ? productsItem.tagBrand : noContentMessage}</P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Category</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>
                                                {productsItem?.tagCategory
                                                    ? productsItem.tagCategory
                                                    : noContentMessage}
                                            </P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Sub-cat</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>
                                                {productsItem?.tagSubCategory
                                                    ? productsItem.tagSubCategory
                                                    : noContentMessage}
                                            </P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Item</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>{productsItem?.item ? productsItem.item : noContentMessage}</P>
                                        </Row>
                                        {/* <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Videos</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>??</P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Creator</SmallSpan>
                                        </Row>
                                        <Row alignCenter>
                                            <Column marginRight={secondaryPadding}>
                                                <P>{username ? username : noContentMessage}</P>
                                            </Column>
                                            <CustomImg
                                                height={avatarDiameter}
                                                src={imageUrl ? imageUrl : defaultAvatar}
                                                width={avatarDiameter}
                                            />
                                        </Row> */}
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
                                {/* <Row marginBottom={miniMarginBottom}>
                                    <SmallSpan>Preview</SmallSpan>
                                </Row>
                                <Row>
                                    <P>??</P>
                                </Row>
                                <Row marginBottom={miniMarginBottom}>
                                    <SmallSpan>View</SmallSpan>
                                </Row>
                                <Row alignCenter>
                                    <P>1152</P>&nbsp;<SmallSpan opacity={0.5}>(96.0%)</SmallSpan>
                                    <P>??</P>
                                </Row> */}
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
                                <Row justifyCenter marginTop="auto">
                                    <RoundedButton reverse onClick={onPromoteClick}>
                                        +&nbsp;PROMOTE
                                    </RoundedButton>
                                </Row>
                            </RowBlockCell>
                            <RowBlockCell padding={validatorsPadding}>
                                <Row>
                                    <Subtitle>Engagement</Subtitle>
                                </Row>
                                <Row>
                                    <Column marginRight={'50px'}>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Views</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.viewCount}</P>&nbsp;
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Likes</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.likeCount}</P>&nbsp;
                                            <PercentageGrowth
                                                type={
                                                    engagement?.likesPercentage && engagement.likesPercentage > 0
                                                        ? 'success'
                                                        : 'error'
                                                }
                                            >
                                                {engagement?.likesPercentage || 0}
                                            </PercentageGrowth>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Saves</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.saveCount}</P>&nbsp;
                                            <PercentageGrowth
                                                type={
                                                    engagement?.savesPercentage && engagement.savesPercentage > 0
                                                        ? 'success'
                                                        : 'error'
                                                }
                                            >
                                                {engagement?.savesPercentage || 0}
                                            </PercentageGrowth>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Comments</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.commentCount}</P>&nbsp;
                                            <PercentageGrowth
                                                type={
                                                    engagement?.commentsPercentage && engagement.commentsPercentage > 0
                                                        ? 'success'
                                                        : 'error'
                                                }
                                            >
                                                {engagement?.commentsPercentage || 0}
                                            </PercentageGrowth>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Shares</SmallSpan>
                                        </Row>
                                        <Row alignCenter marginBottom={secondaryPadding}>
                                            <P>{engagement?.shareCount}</P>&nbsp;
                                            <PercentageGrowth
                                                type={
                                                    engagement?.sharesPercentage && engagement.sharesPercentage > 0
                                                        ? 'success'
                                                        : 'error'
                                                }
                                            >
                                                {engagement?.sharesPercentage || 0}
                                            </PercentageGrowth>
                                        </Row>
                                    </Column>
                                </Row>
                                <Row justifyCenter marginTop="auto">
                                    <RoundedButton onClick={onDetailsClick}>Details</RoundedButton>
                                </Row>
                            </RowBlockCell>
                        </ColumnBlockCell>
                        <ColumnBlockCell removeBorder>
                            <RowBlockCell removeBorder padding={validatorsPadding}>
                                <Row marginBottom="40px">
                                    <Subtitle>Additional details</Subtitle>
                                </Row>
                                <Row marginBottom={miniMarginBottom}>
                                    <SmallSpan>In-use</SmallSpan>
                                </Row>
                                <Row maxWidth="420px">
                                    {inCampaignIds?.map(i => (
                                        <InternalLink
                                            key={i}
                                            to={globalPrefixUrl + routes.campaignManager.campaign.indexDetails + i}
                                        >
                                            {i}
                                        </InternalLink>
                                    ))}
                                </Row>
                            </RowBlockCell>
                            <RowBlockCell removeBorder padding={validatorsPadding}>
                                <Row marginBottom="40px">
                                    <Subtitle>Hashtags</Subtitle>
                                </Row>
                                <Row marginBottom={miniMarginBottom} maxWidth="400px">
                                    {tags?.map(i => (
                                        <ClosableTag key={i}>{i.toUpperCase()}</ClosableTag>
                                    ))}
                                </Row>
                            </RowBlockCell>
                            <RowBlockCell removeBorder padding={validatorsPadding}>
                                <Row marginBottom="40px">
                                    <Subtitle>Extra Hashtags</Subtitle>
                                </Row>
                                <Row marginBottom={miniMarginBottom}>
                                    {extraTags?.map(i => (
                                        <ClosableTag key={i}>{i.toUpperCase()}</ClosableTag>
                                    ))}
                                </Row>
                            </RowBlockCell>
                        </ColumnBlockCell>
                    </>
                )}
            </HighlightedTitleBlock>
        </Wrapper>
    );
};
