import addIdImg from 'assets/img/add_video.svg';
import defaultImage from 'assets/img/default_image.svg';
import playVideoImg from 'assets/img/play_video_icon.svg';
import { ViewStatsButton } from 'components/common/buttons/ViewStatsButton';
import { AbsoluteImg } from 'components/common/imageComponents/AbsoluteImg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { AbsoluteVideo } from 'components/common/Video';
import { Card, Description, StatsCell } from 'components/grid/Card';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import {
    addIdImgDiameter,
    qualityScoreFontSize,
    qualityScoreFontWeight,
    qualityScoreLineHeight
} from 'components/Layouts/Cards/VideoCard/constants';
import { secondaryPadding, white } from 'constants/styles';
import { useField } from 'effector-forms';
import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { forms } from 'stores/forms';
import { modalEvents } from 'stores/modal';
import { Unselectable } from 'types';
import { roundScore } from 'utils/usefulFunctions';

interface Props extends WOM.ContentItemResponse, Unselectable {}

export const VideoCard = ({
    womContentId,
    uriPrimary,
    womQualityScore,
    products,
    streamDetails,
    //engagement,
    unselectable
}: Props) => {
    //const history = useHistory();
    //const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    // const contentIds = useStore(campaignsStores.contentIds);
    const { value: contentIds, onChange } = useField(forms.createCampaignForm.fields.videos);
    const location = useLocation();
    const isDiscoverPage = location.pathname.includes('discover');
    const isProductPage = location.pathname.includes('products/product');
    const buttonsPositionLeft = isDiscoverPage || isProductPage ? '128px' : '72px';

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const ID = useMemo(() => (womContentId ? womContentId : ''), [womContentId]);
    // const productsItem = useMemo(() => (products && products.length && products[0] !== 0 ? products[0] : {}), [
    //     products
    // ]);
    const active = useMemo(
        () => (womContentId && contentIds.map(i => i.womContentId)?.includes(womContentId)) || false,
        [womContentId, contentIds]
    );

    const openCardModal = () => modalEvents.openCardModal({ id: ID });
    const onVideoPlay = () => setIsVideoPlaying(!isVideoPlaying);
    // const handleDetail = () => history.push(globalPrefixUrl + routes.campaignManager.discover.indexDetails + ID);
    // const handleDetail = () => modalEvents.openCardModal({ id: ID });
    const addIdHandler = () => {
        if (womContentId)
            active
                ? onChange(contentIds.filter(items => items.womContentId !== womContentId))
                : onChange(contentIds.concat([{ womContentId, uriPrimary, womQualityScore, products }]));
    };
    // TODO: setting up eslint for emoji
    return (
        <Card active={active} unselectableStyled={unselectable}>
            <Description>
                {!unselectable && (
                    <AbsoluteWrapper left={buttonsPositionLeft} top="168px" zIndex="5">
                        <Row>
                            <CustomImg
                                pointer
                                height={addIdImgDiameter}
                                src={playVideoImg}
                                width={addIdImgDiameter}
                                onClick={onVideoPlay}
                            />

                            {!isDiscoverPage && !isProductPage && (
                                <MarginWrapper marginLeft="34px">
                                    <CustomImg
                                        pointer
                                        height={addIdImgDiameter}
                                        src={addIdImg}
                                        width={addIdImgDiameter}
                                        onClick={addIdHandler}
                                    />
                                </MarginWrapper>
                            )}
                        </Row>
                    </AbsoluteWrapper>
                )}
                {isVideoPlaying ? (
                    <AbsoluteVideo controls isPlaying={isVideoPlaying} src={streamDetails?.hlsUrl || ''} />
                ) : (
                    <AbsoluteImg src={uriPrimary ? uriPrimary : defaultImage} zIndex="0" />
                )}
                {/*<Row zIndex="2">*/}
                {/*    <RatingSpan>{`${engagement?.viewsD1Percentage}% ${engagement?.viewsD2Percentage}% ${engagement?.viewsD3Percentage}% ${engagement?.viewsD4Percentage}%`}</RatingSpan>*/}
                {/*</Row>*/}
                {/*<MarginWrapper marginTop="auto" zIndex="2">*/}
                {/*    <Column>*/}
                {/*<Row alignCenter marginBottom={'0'}>*/}
                {/*    <Column marginRight={secondaryPadding}>*/}
                {/*        <CustomImg height={productImgDiameter} src={group1img} width={productImgDiameter} />*/}
                {/*    </Column>*/}
                {/*    <ProductSpan>*/}
                {/*        {productsItem?.tagBrand ? productsItem.tagBrand : noContentMessage}*/}
                {/*    </ProductSpan>*/}
                {/*</Row>*/}
                {/* <Row alignCenter marginBottom={'0'}>
                            <Column marginRight={secondaryPadding}>
                                <CustomImg height={productImgDiameter} src={group2img} width={productImgDiameter} />
                            </Column>
                            <ProductSpan>
                                {productsItem?.tagCategory ? productsItem.tagCategory : noContentMessage}
                            </ProductSpan>
                        </Row>
                        <Row alignCenter marginBottom={'0'}>
                            <Column marginRight={secondaryPadding}>
                                <CustomImg height={productImgDiameter} src={group3img} width={productImgDiameter} />
                            </Column>
                            <ProductSpan>
                                {productsItem?.tagSubCategory ? productsItem.tagSubCategory : noContentMessage}
                            </ProductSpan>
                        </Row> */}
                {/*<Row alignCenter marginBottom={'0'}>*/}
                {/*    <Column marginRight={secondaryPadding}>*/}
                {/*        <CustomImg height={productImgDiameter} src={group4img} width={productImgDiameter} />*/}
                {/*    </Column>*/}
                {/*    <ProductSpan>{productsItem?.item ? productsItem.item : noContentMessage}</ProductSpan>*/}
                {/*</Row>*/}
                {/*    </Column>*/}
                {/*</MarginWrapper>*/}
                {!isVideoPlaying && (
                    <StatsCell bottom="0" left="0">
                        <Row marginBottom="5px" marginTop="5px" zIndex="2">
                            <Column marginRight={secondaryPadding}>
                                <Span
                                    color={white}
                                    fontSize={qualityScoreFontSize}
                                    fontWeight={qualityScoreFontWeight}
                                    lineHeight={qualityScoreLineHeight}
                                >
                                    {`A ${roundScore(womQualityScore?.authenticity || 0)}`}
                                </Span>
                            </Column>
                            <Column marginRight={secondaryPadding}>
                                <Span
                                    color={white}
                                    fontSize={qualityScoreFontSize}
                                    fontWeight={qualityScoreFontWeight}
                                    lineHeight={qualityScoreLineHeight}
                                >
                                    {`C ${roundScore(womQualityScore?.positivity || 0)}`}
                                </Span>
                            </Column>
                            <Span
                                color={white}
                                fontSize={qualityScoreFontSize}
                                fontWeight={qualityScoreFontWeight}
                                lineHeight={qualityScoreLineHeight}
                            >
                                {`P ${roundScore(womQualityScore?.creativity || 0)}`}
                            </Span>
                        </Row>
                        <Row>
                            <ViewStatsButton onClick={openCardModal}>VIEW STATS</ViewStatsButton>
                        </Row>
                    </StatsCell>
                )}
            </Description>
            {/*<CardRowFeatures>*/}
            {/*    <FeatureCell background={backgroundTheme1} color={colorTheme1} quantity={2} onClick={onVideoPlay}>*/}
            {/*        {isVideoPlaying ? 'Pause' : 'Play'} Video*/}
            {/*    </FeatureCell>*/}
            {/*    <FeatureCell quantity={2} onClick={handleDetail}>*/}
            {/*        View Stats*/}
            {/*    </FeatureCell>*/}
            {/*</CardRowFeatures>*/}
        </Card>
    );
};
