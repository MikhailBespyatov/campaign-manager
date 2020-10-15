import defaultImage from 'assets/img/default_image.svg';
import group1img from 'assets/img/group_1.svg';
import group2img from 'assets/img/group_2.svg';
import group3img from 'assets/img/group_3.svg';
import group4img from 'assets/img/group_4.svg';
import { AddButton } from 'components/common/buttons/AddButton';
import { AbsoluteImg } from 'components/common/imageComponents/AbsoluteImg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { Card, Description } from 'components/grid/Card';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import {
    cardHeight,
    cardWidth,
    descriptionPadding,
    productImgDiameter
} from 'components/Layouts/Cards/SimilarCampaignCard/constants';
import { primaryPadding, secondaryPadding, white } from 'constants/styles';
import React, { FC } from 'react';
import { modalEvents } from 'stores/modal';
import { MarginRightBottom, Sizes } from 'types';

const RateSpan: FC = ({ children }) => (
    <Span color={white} fontSize="12px" lineHeight="20px">
        {children}
    </Span>
);

const ProductSpan: FC = ({ children }) => (
    <Span color={white} fontSize="7px" lineHeight="14px">
        {children}
    </Span>
);

interface Props extends MarginRightBottom, Sizes {}

export const SimilarCampaignCard = ({ ...styles }: Props) => {
    const openCardModal = () => modalEvents.openCardModal('some id');

    return (
        <Column alignCenter>
            <Card height={cardHeight} width={cardWidth} {...styles}>
                <Description padding={descriptionPadding}>
                    <AbsoluteImg pointer src={defaultImage} onClick={openCardModal} />
                    <Row marginBottom="5px">
                        <Column marginRight={secondaryPadding}>
                            <RateSpan>8.5</RateSpan>
                        </Column>
                        <Column marginRight={secondaryPadding}>
                            <RateSpan>7.8</RateSpan>
                        </Column>
                        <RateSpan>9.2</RateSpan>
                    </Row>
                    <MarginWrapper marginTop="auto">
                        <Column>
                            <Row alignCenter marginBottom={'0'}>
                                <Column marginRight={secondaryPadding}>
                                    <CustomImg height={productImgDiameter} src={group1img} width={productImgDiameter} />
                                </Column>
                                <ProductSpan>Adidas</ProductSpan>
                            </Row>
                            <Row alignCenter marginBottom={'0'}>
                                <Column marginRight={secondaryPadding}>
                                    <CustomImg height={productImgDiameter} src={group2img} width={productImgDiameter} />
                                </Column>
                                <ProductSpan>Shoes</ProductSpan>
                            </Row>
                            <Row alignCenter marginBottom={'0'}>
                                <Column marginRight={secondaryPadding}>
                                    <CustomImg height={productImgDiameter} src={group3img} width={productImgDiameter} />
                                </Column>
                                <ProductSpan>Sport Shoes</ProductSpan>
                            </Row>
                            <Row alignCenter marginBottom={'0'}>
                                <Column marginRight={secondaryPadding}>
                                    <CustomImg height={productImgDiameter} src={group4img} width={productImgDiameter} />
                                </Column>
                                <ProductSpan>Superstar</ProductSpan>
                            </Row>
                        </Column>
                    </MarginWrapper>
                </Description>
            </Card>
            <Row marginBottom="0" marginRight={primaryPadding} marginTop={primaryPadding}>
                <AddButton />
            </Row>
        </Column>
    );
};
