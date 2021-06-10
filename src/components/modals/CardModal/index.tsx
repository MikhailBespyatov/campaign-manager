import history from 'BrowserHistory';
import { RowBlockCell } from 'components/common/blocks/BlockCell';
import { HighlightedTitleBlock } from 'components/common/blocks/HighlightedTitleBlock';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { PercentageGrowth } from 'components/common/features/PercentageGrowth';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { InternalLink } from 'components/common/links/InternalLink';
import { ClosableTag } from 'components/common/tags/ClosableTag';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CreateCampaignCard } from 'components/Layouts/Cards/CreateCampaignCard';
import { viewersMarginBottom } from 'components/modals/CardModal/constants';
import { TitleWrapper, VideoDetailsWrapper, Wrapper } from 'components/modals/CardModal/styles';
import { noContentMessage } from 'constants/messages';
import { routes } from 'constants/routes';
import { grey4, primaryPadding, tertiaryPadding, white } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { FC, useEffect, useMemo } from 'react';
import { campaignContentEffects, campaignContentStores } from 'stores/campaignContent';
import { campaignsEffects, campaignsEvents, campaignsStores } from 'stores/campaigns';
import { loadingStores } from 'stores/loading';
import { modalEvents, modalStores } from 'stores/modal';
import { themeStores } from 'stores/theme';
import { engagementStatusTypes, roundScore } from 'utils/usefulFunctions';
import { wrapperVerticalPadding } from 'components/modals/QexWidgetModal/constants';
import { addIdImgDiameter } from 'components/Layouts/Cards/CreateCampaignMiniCard/constants';
import closeImg from 'assets/img/add_video.svg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';

interface SmallSpanProps {
    opacity?: number;
}
const Title: FC = ({ children }) => (
    <TitleWrapper>
        <Span fontSize="12px" fontWeight="600" lineHeight="15px">
            {children}
        </Span>
    </TitleWrapper>
);

const Subtitle: FC = ({ children }) => (
    <Span color={grey4} fontSize="12px" fontWeight="400" lineHeight="15px">
        {children}
    </Span>
);

const Item: FC = ({ children }) => (
    <Span fontSize="14px" fontWeight="400" lineHeight="17px">
        {children}
    </Span>
);

interface ItemBlockProps {
    title: string;
    item?: string | number;
    percentageGrowth?: JSX.Element;
}
const ItemBlock = ({ title, item, percentageGrowth }: ItemBlockProps) => (
    <Column>
        <MarginWrapper marginBottom="4px">
            <Subtitle>{title}</Subtitle>
        </MarginWrapper>
        {percentageGrowth ? (
            <Row alignCenter>
                <MarginWrapper marginRight="4px">
                    <Item>{item}</Item>
                </MarginWrapper>
                {percentageGrowth}
            </Row>
        ) : (
            <Item>{item}</Item>
        )}
    </Column>
);

// const SmallSpan: FC<SmallSpanProps> = ({ children, opacity }) => (
//     <Span fontSize="12px" lineHeight="20px" opacity={opacity ? opacity : 0.4}>
//         {children}
//     </Span>
// );

const PercentageSpan: FC = ({ children }) => (
    <MarginWrapper marginBottom={viewersMarginBottom}>
        <Span fontSize="13px" fontWeight="400" lineHeight="16px">
            {children}
        </Span>
    </MarginWrapper>
);

const EngagementSpan: FC = ({ children }) => (
    <MarginWrapper marginBottom={viewersMarginBottom}>
        <Span fontSize="14px" fontWeight="700" lineHeight="17px">
            {children}
        </Span>
    </MarginWrapper>
);

const body = document.body;

export const CardModal = () => {
    const {
        visible,
        state: { id }
    } = useStore(modalStores.cardModal);
    const { uriPrimary, womQualityScore, engagement, products, tags, streamDetails } = useStore(
        campaignContentStores.item
    );
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const itemsInUse = useStore(campaignsStores.itemsInUse);
    const loading = useStore(loadingStores.loading);
    const itemsInUseLoading = useStore(loadingStores.initialLoading);
    const { primaryColor } = useStore(themeStores.theme);

    const productsItem = useMemo(() => products?.[0] || {}, [products]);
    //const extraTags = productsItem.extraTags;
    // const username = userDetails && userDetails?.username;
    // const imageUrl = userDetails && userDetails?.profile && userDetails?.profile?.imageUrl;
    // const tagBrand = productsItem !== 0 ? productsItem?.tagBrand : '';
    // const tagCategory = productsItem !== 0 ? productsItem?.tagCategory : '';
    // const tagSubCategory = productsItem !== 0 ? productsItem?.tagSubCategory : '';
    // const item = productsItem !== 0 ? productsItem?.item : '';

    const onClose = () => modalEvents.closeCardModal();

    // const onDetailsClick = () => {
    //     history.push(routes.campaignManager.discover.details + '/' + id);
    //     modalEvents.closeCardModal();
    // };

    const onPromoteClick = () => {
        campaignsEvents.pushContentId({ womContentId: id, uriPrimary, womQualityScore, products });
        modalEvents.closeCardModal();
        history.push(globalPrefixUrl + routes.campaignManager.campaign.create);
    };

    useEffect(() => {
        if (visible) {
            campaignContentEffects.getItemById(id);
            campaignsEffects.getItemsInUseById(id);
            body.style.overflow = 'hidden';
        } else body.style.overflow = 'auto';
    }, [id, visible]);

    return (
        <Wrapper visible={visible}>
            <AbsoluteWrapper right={tertiaryPadding} top={wrapperVerticalPadding} zIndex="5">
                <CustomImg
                    pointer
                    height={addIdImgDiameter}
                    rotate={45}
                    src={closeImg}
                    width={addIdImgDiameter}
                    onClick={onClose}
                />
            </AbsoluteWrapper>
            <HighlightedTitleBlock marginRight="0" title="Video Name">
                {loading ? (
                    <RowBlockCell padding={primaryPadding}>
                        <Loader />
                    </RowBlockCell>
                ) : (
                    <>
                        <VideoDetailsWrapper>
                            <Column alignCenter marginRight="16px" width="160px">
                                {visible && (
                                    <CreateCampaignCard
                                        isVideoDetailsModal
                                        engagement={engagement}
                                        height="230px"
                                        products={products}
                                        streamDetails={streamDetails}
                                        uriPrimary={uriPrimary}
                                        width="160px"
                                        womQualityScore={womQualityScore}
                                    />
                                )}
                                <MarginWrapper marginTop="6px">
                                    <ManualRoundedButton
                                        reverse
                                        background={white}
                                        height="44px"
                                        mainColor={primaryColor}
                                        minWidth="95px"
                                        width="95px"
                                        onClick={onPromoteClick}
                                    >
                                        PROMOTE
                                    </ManualRoundedButton>
                                </MarginWrapper>
                            </Column>
                            <Section>
                                <Section marginBottom="16px">
                                    <Title>Video Name</Title>
                                    <Row>
                                        <MarginWrapper marginRight="100px">
                                            <ItemBlock item={productsItem.tagBrand || noContentMessage} title="Brand" />
                                        </MarginWrapper>
                                        <ItemBlock item={productsItem.tagBrand || noContentMessage} title="Item" />
                                    </Row>
                                </Section>
                                <Section>
                                    <Column width="100%">
                                        <Title>Engagement</Title>
                                        <Row justifyBetween width="80%">
                                            <ItemBlock item={engagement?.viewCount} title="Views" />
                                            <ItemBlock
                                                item={engagement?.likeCount}
                                                percentageGrowth={
                                                    <PercentageGrowth
                                                        isPlusStyle
                                                        type={engagementStatusTypes(engagement?.likesPercentage)}
                                                    >
                                                        {engagement?.likesPercentage || 0}
                                                    </PercentageGrowth>
                                                }
                                                title="Likes"
                                            />
                                            <ItemBlock
                                                item={engagement?.saveCount}
                                                percentageGrowth={
                                                    <PercentageGrowth
                                                        isPlusStyle
                                                        type={engagementStatusTypes(engagement?.savesPercentage)}
                                                    >
                                                        {engagement?.savesPercentage || 0}
                                                    </PercentageGrowth>
                                                }
                                                title="Saves"
                                            />
                                            <ItemBlock
                                                item={engagement?.commentCount}
                                                percentageGrowth={
                                                    <PercentageGrowth
                                                        isPlusStyle
                                                        type={engagementStatusTypes(engagement?.commentsPercentage)}
                                                    >
                                                        {engagement?.commentsPercentage || 0}
                                                    </PercentageGrowth>
                                                }
                                                title="Comments"
                                            />
                                            <ItemBlock
                                                item={engagement?.shareCount}
                                                percentageGrowth={
                                                    <PercentageGrowth
                                                        isPlusStyle
                                                        type={engagementStatusTypes(engagement?.sharesPercentage)}
                                                    >
                                                        {engagement?.sharesPercentage || 0}
                                                    </PercentageGrowth>
                                                }
                                                title="Shares"
                                            />
                                        </Row>
                                        <MarginWrapper marginTop="10px">
                                            <Column>
                                                <MarginWrapper marginBottom="8px">
                                                    <Subtitle>
                                                        Average Percentage Viewed
                                                        {/* Viewers */}
                                                    </Subtitle>
                                                </MarginWrapper>
                                                <Row>
                                                    <Column marginRight="53px">
                                                        <PercentageSpan>{'< 25%'}</PercentageSpan>
                                                        <PercentageSpan>25% - 50%</PercentageSpan>
                                                        <PercentageSpan>50% - 75%</PercentageSpan>
                                                        <PercentageSpan>{'> 75%'}</PercentageSpan>
                                                    </Column>
                                                    <Column>
                                                        <EngagementSpan>
                                                            {engagement?.viewsD1Percentage || 0}%
                                                        </EngagementSpan>
                                                        <EngagementSpan>
                                                            {engagement?.viewsD2Percentage || 0}%
                                                        </EngagementSpan>
                                                        <EngagementSpan>
                                                            {engagement?.viewsD3Percentage || 0}%
                                                        </EngagementSpan>
                                                        <EngagementSpan>
                                                            {engagement?.viewsD4Percentage || 0}%
                                                        </EngagementSpan>
                                                    </Column>
                                                </Row>
                                            </Column>
                                        </MarginWrapper>
                                    </Column>
                                </Section>
                                <Section marginBottom="16px">
                                    <Title>Authentication</Title>
                                    <Column>
                                        <MarginWrapper marginBottom="4px">
                                            <Subtitle>Average Authentication Score</Subtitle>
                                        </MarginWrapper>
                                        <Row>
                                            <MarginWrapper marginRight="16px">
                                                <ItemBlock
                                                    item={roundScore(womQualityScore?.authenticity || 0)}
                                                    title="Honesty"
                                                />
                                            </MarginWrapper>
                                            <MarginWrapper marginRight="25px">
                                                <ItemBlock
                                                    item={roundScore(womQualityScore?.creativity || 0)}
                                                    title="Creativity"
                                                />
                                            </MarginWrapper>
                                            <MarginWrapper marginRight="100px">
                                                <ItemBlock
                                                    item={roundScore(womQualityScore?.positivity || 0)}
                                                    title="Positivity"
                                                />
                                            </MarginWrapper>
                                        </Row>
                                    </Column>
                                </Section>
                                <Section marginBottom="16px">
                                    <Title>Hashtags</Title>
                                    <Row marginTop="8px">
                                        {tags?.map(i => (
                                            <ClosableTag
                                                key={i}
                                                backgroundColor="transparent"
                                                marginBottom="10px"
                                                marginRight="8px"
                                            >
                                                {i}
                                            </ClosableTag>
                                        ))}
                                    </Row>
                                </Section>
                                <Section>
                                    <Title>
                                        Activity
                                        {/* Campaigns */}
                                    </Title>
                                    <Column>
                                        <MarginWrapper marginBottom="8px">
                                            <Subtitle>Other campaigns featuring this video</Subtitle>
                                        </MarginWrapper>
                                        <Row maxWidth="420px">
                                            {itemsInUseLoading ? (
                                                <Loader />
                                            ) : itemsInUse?.length ? (
                                                itemsInUse.map(({ id, title }) => (
                                                    <InternalLink
                                                        key={id}
                                                        to={
                                                            globalPrefixUrl +
                                                            routes.campaignManager.campaign.indexDetails +
                                                            id
                                                        }
                                                        onClick={onClose}
                                                    >
                                                        {title}
                                                    </InternalLink>
                                                ))
                                            ) : (
                                                'No campaigns in use'
                                            )}
                                        </Row>
                                    </Column>
                                </Section>
                            </Section>
                        </VideoDetailsWrapper>
                    </>
                )}
            </HighlightedTitleBlock>
        </Wrapper>
    );
};
