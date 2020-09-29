import defaultImage from 'assets/img/default_image.svg';
import group1img from 'assets/img/group_1.svg';
import group2img from 'assets/img/group_2.svg';
import group3img from 'assets/img/group_3.svg';
import group4img from 'assets/img/group_4.svg';
import { AbsoluteImg } from 'components/common/imageComponents/AbsoluteImg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { P } from 'components/common/typography/titles/P';
import { Card, Description } from 'components/grid/Card';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { cardHeight, cardWidth, productImgDiameter } from 'components/Layouts/Cards/CreateCampaignCard/constants';
import { noContentMessage } from 'constants/messages';
import { primaryPadding, secondaryPadding, white } from 'constants/styles';
import React, { FC } from 'react';
import { modalEvents } from 'stores/modal';
import { MarginRightBottom, Sizes } from 'types';
import { roundScore } from 'utils/usefulFunctions';

const RatingSpan: FC = ({ children }) => (
    <Span color={white} fontSize="8px" lineHeight="12px">
        {children}
    </Span>
);

const ProductSpan: FC = ({ children }) => (
    <Span color={white} fontSize="14px" lineHeight="29px">
        {children}
    </Span>
);

//TODO [any]
interface Props extends MarginRightBottom, Sizes {
    uriPrimary?: string;
    womQualityScore?: WOM.WOMQualityScore;
    products?: any;
}

export const CreateCampaignCard = ({ uriPrimary, womQualityScore, products, ...styles }: Props) => {
    const openCardModal = () => modalEvents.openCardModal('some id');

    const productsItem = products && products.length && products[0];

    return (
        <Card height={cardHeight} width={cardWidth} {...styles}>
            <Description>
                <AbsoluteImg pointer src={uriPrimary ? uriPrimary : defaultImage} onClick={openCardModal} />
                <Row marginBottom="5px">
                    <Column marginRight={primaryPadding}>
                        <P color={white}>{roundScore(womQualityScore?.authenticity || 0)}</P>
                    </Column>
                    <Column marginRight={primaryPadding}>
                        <P color={white}>{roundScore(womQualityScore?.positivity || 0)}</P>
                    </Column>
                    <P color={white}>{roundScore(womQualityScore?.creativity || 0)}</P>
                </Row>
                <Row>
                    <RatingSpan>some content</RatingSpan>
                </Row>
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
                        <Row alignCenter marginBottom={'0'}>
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
    );
};
