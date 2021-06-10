import defaultImage from 'assets/img/default_image.svg';
import group1img from 'assets/img/group_1.svg';
import group4img from 'assets/img/group_4.svg';
import playImg from 'assets/img/play.svg';
import { AbsoluteImg } from 'components/common/imageComponents/AbsoluteImg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { ProductSpan, RatingSpan } from 'components/common/typography/special';
import { P } from 'components/common/typography/titles/P';
import { AbsoluteVideo } from 'components/common/Video';
import { Card, Description } from 'components/grid/Card';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import {
    cardHeight,
    cardWidth,
    playImgLeft,
    playImgTop,
    productImgDiameter
} from 'components/Layouts/Cards/CreateCampaignCard/constants';
import { noContentMessage } from 'constants/messages';
import { primaryButtonDiameter, primaryPadding, secondaryPadding, white } from 'constants/styles';
import React, { useState } from 'react';
import { MarginRightBottom, Sizes } from 'types';
import { roundScore } from 'utils/usefulFunctions';

interface Props extends MarginRightBottom, Sizes, WOM.ContentItemResponse {
    // uriPrimary?: string;
    // womQualityScore?: WOM.WOMQualityScore;
    // products?: any;
    isVideoDetailsModal?: boolean;
}

export const CreateCampaignCard = ({
    uriPrimary,
    womQualityScore,
    products,
    marginRight,
    marginBottom,
    streamDetails,
    isVideoDetailsModal,
    engagement,
    width,
    height
}: Props) => {
    const hlsUrl = streamDetails?.hlsUrl;
    const productsItem = products && products.length && products[0] !== 0 ? products[0] : {};

    const [startLoading, setStartLoading] = useState(false);

    const goLoading = () => setStartLoading(true);

    return (
        <Card
            height={height || cardHeight}
            marginBottom={marginBottom}
            marginRight={marginRight}
            width={width || cardWidth}
        >
            <Description>
                {startLoading ? (
                    <AbsoluteVideo controls isPlaying src={hlsUrl || ''} />
                ) : (
                    <>
                        <AbsoluteWrapper left={playImgLeft} top={playImgTop}>
                            <CustomImg
                                pointer
                                height={primaryButtonDiameter}
                                src={playImg}
                                width={primaryButtonDiameter}
                                onClick={goLoading}
                            />
                        </AbsoluteWrapper>
                        <AbsoluteImg pointer src={uriPrimary ? uriPrimary : defaultImage} />
                    </>
                )}
                {!isVideoDetailsModal && (
                    <>
                        <Row marginBottom="5px">
                            <Column marginRight={primaryPadding}>
                                <P color={white}>{roundScore(womQualityScore?.authenticity || 0)}</P>
                            </Column>
                            <Column marginRight={primaryPadding}>
                                <P color={white}>{roundScore(womQualityScore?.positivity || 0)}</P>
                            </Column>
                            <P color={white}>{roundScore(womQualityScore?.creativity || 0)}</P>
                        </Row>
                        <Row zIndex="2">
                            <RatingSpan>{`${engagement?.viewsD1Percentage}% ${engagement?.viewsD2Percentage}% ${engagement?.viewsD3Percentage}% ${engagement?.viewsD4Percentage}%`}</RatingSpan>
                        </Row>
                    </>
                )}
                {!isVideoDetailsModal && (
                    <MarginWrapper marginTop="auto">
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
                )}
            </Description>
        </Card>
    );
};
