import addIdImg from 'assets/img/add_video.svg';
import defaultImage from 'assets/img/default_image.svg';
import group1img from 'assets/img/group_1.svg';
import group4img from 'assets/img/group_4.svg';
import removeIdImg from 'assets/img/increment.svg';
import { AbsoluteImg } from 'components/common/imageComponents/AbsoluteImg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { ProductSpan, RatingSpan } from 'components/common/typography/special';
import { AbsoluteVideo } from 'components/common/Video';
import { Card, CardRowFeatures, Description, FeatureCell } from 'components/grid/Card';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import {
    addIdImgDiameter,
    backgroundTheme1,
    colorTheme1,
    productImgDiameter,
    qualityScoreFontSize,
    qualityScoreFontWeight,
    qualityScoreLineHeight
} from 'components/Layouts/Cards/VideoCard/constants';
import { noContentMessage } from 'constants/messages';
import { padding, primaryPadding, secondaryPadding, white } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { useMemo, useState } from 'react';
import { campaignsEvents, campaignsStores } from 'stores/campaigns';
import { modalEvents } from 'stores/modal';
import { Unselectable } from 'types';
import { roundScore } from 'utils/usefulFunctions';
import { Span } from 'components/common/typography/Span';
import { Emoji } from 'components/common/typography/Emoji';

interface Props extends WOM.ContentItemResponse, Unselectable {}

export const VideoCard = ({
    womContentId,
    uriPrimary,
    womQualityScore,
    products,
    streamDetails,
    engagement,
    unselectable
}: Props) => {
    //const history = useHistory();
    //const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const contentIds = useStore(campaignsStores.contentIds);

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const ID = useMemo(() => (womContentId ? womContentId : ''), [womContentId]);
    const productsItem = useMemo(() => (products && products.length && products[0] !== 0 ? products[0] : {}), [
        products
    ]);
    const active = useMemo(
        () => (womContentId && contentIds.map(i => i.womContentId)?.includes(womContentId)) || false,
        [womContentId, contentIds]
    );

    const openCardModal = () => modalEvents.openCardModal(ID);
    const onVideoPlay = () => setIsVideoPlaying(!isVideoPlaying);
    // const handleDetail = () => history.push(globalPrefixUrl + routes.campaignManager.discover.indexDetails + ID);
    const handleDetail = () => modalEvents.openCardModal(ID);
    const addIdHandler = () => {
        if (womContentId)
            active
                ? campaignsEvents.removeContentById(womContentId)
                : campaignsEvents.pushContentId({ womContentId, uriPrimary, womQualityScore, products });
    };
    // TODO: setting up eslint for emoji
    return (
        <Card pointer active={active} unselectableStyled={unselectable}>
            <Description>
                {!unselectable && (
                    <AbsoluteWrapper bottom={padding} right={padding} zIndex="5">
                        {active ? (
                            <CustomImg
                                height={addIdImgDiameter}
                                src={removeIdImg}
                                width={addIdImgDiameter}
                                onClick={addIdHandler}
                            />
                        ) : (
                            <CustomImg
                                height={addIdImgDiameter}
                                src={addIdImg}
                                width={addIdImgDiameter}
                                onClick={addIdHandler}
                            />
                        )}
                    </AbsoluteWrapper>
                )}
                {isVideoPlaying ? (
                    <AbsoluteVideo controls isPlaying={isVideoPlaying} src={streamDetails?.hlsUrl || ''} />
                ) : (
                    <AbsoluteImg
                        pointer
                        src={uriPrimary ? uriPrimary : defaultImage}
                        zIndex="0"
                        onClick={openCardModal}
                    />
                )}
                <Row marginBottom="5px" marginTop="5px" zIndex="2">
                    <Column marginRight={primaryPadding}>
                        <Span
                            color={white}
                            fontSize={qualityScoreFontSize}
                            fontWeight={qualityScoreFontWeight}
                            lineHeight={qualityScoreLineHeight}
                        >
                            {/*eslint-disable-next-line */}
                            <Emoji>😇 </Emoji>
                            {roundScore(womQualityScore?.authenticity || 0)}
                        </Span>
                    </Column>
                    <Column marginRight={primaryPadding}>
                        <Span
                            color={white}
                            fontSize={qualityScoreFontSize}
                            fontWeight={qualityScoreFontWeight}
                            lineHeight={qualityScoreLineHeight}
                        >
                            {roundScore(womQualityScore?.positivity || 0)}
                        </Span>
                    </Column>
                    <Span
                        color={white}
                        fontSize={qualityScoreFontSize}
                        fontWeight={qualityScoreFontWeight}
                        lineHeight={qualityScoreLineHeight}
                    >
                        {/*eslint-disable-next-line */}
                        <Emoji>🔥 </Emoji>
                        {roundScore(womQualityScore?.creativity || 0)}
                    </Span>
                </Row>
                <Row zIndex="2">
                    <RatingSpan>{`${engagement?.viewsD1Percentage}% ${engagement?.viewsD2Percentage}% ${engagement?.viewsD3Percentage}% ${engagement?.viewsD4Percentage}%`}</RatingSpan>
                </Row>
                <MarginWrapper marginTop="auto" zIndex="2">
                    <Column>
                        <Row alignCenter marginBottom={'0'}>
                            <Column marginRight={secondaryPadding}>
                                <CustomImg height={productImgDiameter} src={group1img} width={productImgDiameter} />
                            </Column>
                            <ProductSpan>
                                {productsItem?.tagBrand ? productsItem.tagBrand : noContentMessage}
                            </ProductSpan>
                        </Row>
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
                        <Row alignCenter marginBottom={'0'}>
                            <Column marginRight={secondaryPadding}>
                                <CustomImg height={productImgDiameter} src={group4img} width={productImgDiameter} />
                            </Column>
                            <ProductSpan>{productsItem?.item ? productsItem.item : noContentMessage}</ProductSpan>
                        </Row>
                    </Column>
                </MarginWrapper>
            </Description>
            <CardRowFeatures>
                <FeatureCell background={backgroundTheme1} color={colorTheme1} quantity={2} onClick={onVideoPlay}>
                    {isVideoPlaying ? 'Pause' : 'Play'} Video
                </FeatureCell>
                <FeatureCell quantity={2} onClick={handleDetail}>
                    View Stats
                </FeatureCell>
            </CardRowFeatures>
        </Card>
    );
};
