import closeModalImg from 'assets/img/close_modal.svg';
import history from 'BrowserHistory';
import { RowBlockCell } from 'components/common/blocks/BlockCell';
import { HighlightedTitleBlock } from 'components/common/blocks/HighlightedTitleBlock';
import { PercentageGrowth } from 'components/common/features/PercentageGrowth';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { InternalLink } from 'components/common/links/InternalLink';
import { Loader } from 'components/common/Loader';
import { ClosableTag } from 'components/common/tags/ClosableTag';
import { Span } from 'components/common/typography/Span';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { CreateCampaignCard } from 'components/Layouts/Cards/CreateCampaignCard';
import { closeModalImgDiameter, miniMarginBottom, viewersMarginBottom } from 'components/modals/CardModal/constants';
import { TitleWrapper, VideoDetailsWrapper, Wrapper } from 'components/modals/CardModal/styles';
import { noContentMessage } from 'constants/messages';
import { routes } from 'constants/routes';
import { grey4, primaryPadding, white } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { FC, useEffect, useMemo } from 'react';
import { campaignContentEffects, campaignContentEvents, campaignContentStores } from 'stores/campaignContent';
import { campaignsEffects, campaignsEvents, campaignsStores } from 'stores/campaigns';
import { loadingStores } from 'stores/loading';
import { modalEvents, modalStores } from 'stores/modal';
import { themeStores } from 'stores/theme';
import { roundScore } from 'utils/usefulFunctions';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';

interface SmallSpanProps {
    opacity?: number;
}
const Title: FC = ({ children }) => (
    <TitleWrapper>
        <Span fontSize="16px" fontWeight="600" lineHeight="20px">
            {children}
        </Span>
    </TitleWrapper>
);

const Subtitle: FC = ({ children }) => (
    <Span color={grey4} fontSize="16px" fontWeight="400" lineHeight="22px">
        {children}
    </Span>
);

const Item: FC = ({ children }) => (
    <Span fontSize="18px" fontWeight="400" lineHeight="22px">
        {children}
    </Span>
);

interface ItemBlockProps {
    title: string;
    item?: string | number;
    percentageGrowth?: JSX.Element;
}
const ItemBlock: FC<ItemBlockProps> = ({ title, item, percentageGrowth }) => (
    <Column>
        <MarginWrapper marginBottom="8px">
            <Subtitle>{title}</Subtitle>
        </MarginWrapper>
        {percentageGrowth ? (
            <Row alignCenter>
                <MarginWrapper marginRight="10px">
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
        <Span fontSize="18px" fontWeight="400" lineHeight="22px">
            {children}
        </Span>
    </MarginWrapper>
);

const EngagementSpan: FC = ({ children }) => (
    <MarginWrapper marginBottom={viewersMarginBottom}>
        <Span fontSize="18px" fontWeight="700" lineHeight="22px">
            {children}
        </Span>
    </MarginWrapper>
);

const body = document.body;

export const CardModal = () => {
    const { visible, id } = useStore(modalStores.cardModal);
    const { uriPrimary, womQualityScore, engagement, products, tags, streamDetails } = useStore(
        campaignContentStores.item
    );
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const itemsInUse = useStore(campaignsStores.itemsInUse);
    const loading = useStore(loadingStores.loading);
    const itemsInUseLoading = useStore(loadingStores.initialLoading);
    const { primaryColor } = useStore(themeStores.theme);

    const productsItem = useMemo(() => (products && products.length && products[0] !== 0 ? products[0] : {}), [
        products
    ]);
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
        history.push(globalPrefixUrl + routes.campaignManager.discover.index);
        campaignContentEvents.setVisibleCreateCampaign(true);
        modalEvents.openPopUpCampaignManager({
            visible: true,
            popUp: 'info'
        });
        campaignsEvents.pushContentId({ womContentId: id, uriPrimary, womQualityScore, products });
        modalEvents.closeCardModal();
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
                        <VideoDetailsWrapper>
                            <Column alignCenter marginRight="35px" width="300px">
                                {visible && (
                                    <CreateCampaignCard
                                        isVideoDetailsModal
                                        engagement={engagement}
                                        products={products}
                                        streamDetails={streamDetails}
                                        uriPrimary={uriPrimary}
                                        womQualityScore={womQualityScore}
                                    />
                                )}
                                <ManualRoundedButton
                                    reverse
                                    background={white}
                                    mainColor={primaryColor}
                                    onClick={onPromoteClick}
                                >
                                    PROMOTE
                                </ManualRoundedButton>
                            </Column>
                            <Column width="65%">
                                <Section>
                                    <Title>Video Name</Title>
                                    <Row>
                                        <MarginWrapper marginRight="100px">
                                            <ItemBlock
                                                item={productsItem?.tagBrand ? productsItem.tagBrand : noContentMessage}
                                                title="Brand"
                                            />
                                        </MarginWrapper>
                                        <MarginWrapper>
                                            <ItemBlock
                                                item={productsItem?.item ? productsItem.item : noContentMessage}
                                                title="Item"
                                            />
                                        </MarginWrapper>
                                    </Row>
                                </Section>
                                <Section>
                                    <Title>Engagement</Title>
                                    <Row justifyBetween width="80%">
                                        <MarginWrapper>
                                            <ItemBlock item={engagement?.viewCount} title="Views" />
                                        </MarginWrapper>
                                        <MarginWrapper>
                                            <ItemBlock
                                                item={engagement?.likeCount}
                                                percentageGrowth={
                                                    <PercentageGrowth
                                                        isPlusStyle
                                                        type={
                                                            engagement?.likesPercentage &&
                                                            engagement.likesPercentage > 0
                                                                ? 'success'
                                                                : 'error'
                                                        }
                                                    >
                                                        {engagement?.likesPercentage || 0}
                                                    </PercentageGrowth>
                                                }
                                                title="Likes"
                                            />
                                        </MarginWrapper>
                                        <MarginWrapper>
                                            <ItemBlock
                                                item={engagement?.saveCount}
                                                percentageGrowth={
                                                    <PercentageGrowth
                                                        isPlusStyle
                                                        type={
                                                            engagement?.savesPercentage &&
                                                            engagement.savesPercentage > 0
                                                                ? 'success'
                                                                : 'error'
                                                        }
                                                    >
                                                        {engagement?.savesPercentage || 0}
                                                    </PercentageGrowth>
                                                }
                                                title="Saves"
                                            />
                                        </MarginWrapper>
                                        <MarginWrapper>
                                            <ItemBlock
                                                item={engagement?.commentCount}
                                                percentageGrowth={
                                                    <PercentageGrowth
                                                        isPlusStyle
                                                        type={
                                                            engagement?.commentsPercentage &&
                                                            engagement.commentsPercentage > 0
                                                                ? 'success'
                                                                : 'error'
                                                        }
                                                    >
                                                        {engagement?.commentsPercentage || 0}
                                                    </PercentageGrowth>
                                                }
                                                title="Comments"
                                            />
                                        </MarginWrapper>
                                        <MarginWrapper>
                                            <ItemBlock
                                                item={engagement?.shareCount}
                                                percentageGrowth={
                                                    <PercentageGrowth
                                                        isPlusStyle
                                                        type={
                                                            engagement?.sharesPercentage &&
                                                            engagement.sharesPercentage > 0
                                                                ? 'success'
                                                                : 'error'
                                                        }
                                                    >
                                                        {engagement?.sharesPercentage || 0}
                                                    </PercentageGrowth>
                                                }
                                                title="Shares"
                                            />
                                        </MarginWrapper>
                                    </Row>
                                </Section>
                                <Section>
                                    <Title>Authentication</Title>
                                    <Column>
                                        <MarginWrapper marginBottom="15px">
                                            <Span fontSize="18px" fontWeight="400" lineHeight="22px">
                                                Average WOM Authentication Score
                                            </Span>
                                        </MarginWrapper>
                                        <Row>
                                            <MarginWrapper marginRight="25px">
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
                                            <MarginWrapper>
                                                <Column>
                                                    <MarginWrapper marginBottom="8px">
                                                        <Subtitle>Viewers</Subtitle>
                                                    </MarginWrapper>
                                                    <Row>
                                                        <Column marginRight={primaryPadding}>
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
                                        </Row>
                                    </Column>
                                </Section>
                                <Section>
                                    <Title>Hashtags</Title>
                                    <Row marginBottom={miniMarginBottom}>
                                        {tags?.map(i => (
                                            <ClosableTag key={i}>{i}</ClosableTag>
                                        ))}
                                    </Row>
                                </Section>
                                <Section>
                                    <Title>Campaigns</Title>
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
                            </Column>
                        </VideoDetailsWrapper>
                    </>
                )}
            </HighlightedTitleBlock>
        </Wrapper>
    );
};
