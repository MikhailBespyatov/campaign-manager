import defaultImage from 'assets/img/default_image.svg';
import group1img from 'assets/img/group_1.svg';
import group2img from 'assets/img/group_2.svg';
import group3img from 'assets/img/group_3.svg';
import group4img from 'assets/img/group_4.svg';
import addIdImg from 'assets/img/increment.svg';
import { AbsoluteImg } from 'components/common/imageComponents/AbsoluteImg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { ProductSpanMini } from 'components/common/typography/special';
import { Card, Description } from 'components/grid/Card';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import {
    addIdImgDiameter,
    cardHeight,
    cardProductWidth,
    cardWidth,
    descriptionPadding,
    productImgDiameter
} from 'components/Layouts/Cards/CreateCampaignMiniCard/constants';
import { noContentMessage } from 'constants/messages';
import { primaryPadding, secondaryPadding, white } from 'constants/styles';
import React, { FC, useMemo } from 'react';
import { modalEvents } from 'stores/modal';
import { MarginRightBottom, Sizes } from 'types';
import { roundScore } from 'utils/usefulFunctions';

const RateSpan: FC = ({ children }) => (
    <Span color={white} fontSize="12px" lineHeight="20px">
        {children}
    </Span>
);

const ProductSpan: FC = ({ children }) => <ProductSpanMini width={cardProductWidth}>{children}</ProductSpanMini>;

interface Props extends MarginRightBottom, Sizes, WOM.ContentItemResponse {
    onRemove: () => void;
}

export const CreateCampaignMiniCard = ({
    marginBottom,
    marginRight,
    onRemove,
    womContentId,
    uriPrimary,
    womQualityScore,
    products
}: Props) => {
    const productsItem = useMemo(() => (products && products.length && products[0] !== 0 ? products[0] : {}), [
        products
    ]);

    const openCardModal = () => modalEvents.openCardModal(womContentId || '');

    return (
        <Column alignCenter>
            <Card height={cardHeight} marginBottom={marginBottom} marginRight={marginRight} width={cardWidth}>
                <Description padding={descriptionPadding} onClick={openCardModal}>
                    <AbsoluteImg src={uriPrimary ? uriPrimary : defaultImage} />
                    <Row marginBottom="5px">
                        <Column marginRight={secondaryPadding}>
                            <RateSpan>{roundScore(womQualityScore?.authenticity || 0)}</RateSpan>
                        </Column>
                        <Column marginRight={secondaryPadding}>
                            <RateSpan>{roundScore(womQualityScore?.positivity || 0)}</RateSpan>
                        </Column>
                        <RateSpan>{roundScore(womQualityScore?.creativity || 0)}</RateSpan>
                    </Row>
                    <MarginWrapper marginTop="auto">
                        <Column>
                            <Row alignCenter marginBottom={'4px'}>
                                <Column marginRight={secondaryPadding}>
                                    <CustomImg height={productImgDiameter} src={group1img} width={productImgDiameter} />
                                </Column>
                                <ProductSpan>
                                    {productsItem?.tagBrand ? productsItem.tagBrand : noContentMessage}
                                </ProductSpan>
                            </Row>
                            <Row alignCenter marginBottom={'4px'}>
                                <Column marginRight={secondaryPadding}>
                                    <CustomImg height={productImgDiameter} src={group2img} width={productImgDiameter} />
                                </Column>
                                <ProductSpan>
                                    {productsItem?.tagCategory ? productsItem.tagCategory : noContentMessage}
                                </ProductSpan>
                            </Row>
                            <Row alignCenter noWrap marginBottom={'4px'}>
                                <Column marginRight={secondaryPadding}>
                                    <CustomImg height={productImgDiameter} src={group3img} width={productImgDiameter} />
                                </Column>
                                <ProductSpan>
                                    {productsItem?.tagSubCategory ? productsItem.tagSubCategory : noContentMessage}
                                </ProductSpan>
                            </Row>
                            <Row alignCenter marginBottom={'0'}>
                                <Column marginRight={secondaryPadding}>
                                    <CustomImg height={productImgDiameter} src={group4img} width={productImgDiameter} />
                                </Column>
                                <ProductSpan>{productsItem?.item ? productsItem.item : noContentMessage}</ProductSpan>
                            </Row>
                        </Column>
                    </MarginWrapper>
                </Description>
            </Card>
            <Row marginBottom="0" marginRight={primaryPadding}>
                <CustomImg
                    pointer
                    height={addIdImgDiameter}
                    rotate={45}
                    src={addIdImg}
                    width={addIdImgDiameter}
                    onClick={onRemove}
                />
            </Row>
        </Column>
    );
};
