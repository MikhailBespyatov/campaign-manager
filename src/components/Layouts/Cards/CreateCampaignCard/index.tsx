import defaultImage from 'assets/img/default_image.svg';
import group1img from 'assets/img/group_1.svg';
import group2img from 'assets/img/group_2.svg';
import group3img from 'assets/img/group_3.svg';
import group4img from 'assets/img/group_4.svg';
import { AbsoluteImg } from 'components/common/ImageComponents/AbsoluteImg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { P } from 'components/common/TextComponents/P';
import { Span } from 'components/common/TextComponents/Span';
import { Column, Row } from 'components/common/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/common/wrappers/MarginWrapper';
import { Card, Description } from 'components/grid/Card';
import { cardHeight, cardWidth, productImgDiameter } from 'components/Layouts/Cards/CreateCampaignCard/constants';
import { primaryPadding, secondaryPadding, white } from 'constants/styles';
import React, { FC } from 'react';
import { modalEvents } from 'stores/modal';
import { MarginRightBottom, Sizes } from 'types';

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

interface Props extends MarginRightBottom, Sizes {}

export const CreateCampaignCard = ({ ...styles }: Props) => {
    const openCardModal = () => modalEvents.openCardModal('some id');

    return (
        <Card height={cardHeight} width={cardWidth} {...styles}>
            <Description>
                <AbsoluteImg pointer src={defaultImage} onClick={openCardModal} />
                <Row marginBottom="5px">
                    <Column marginRight={primaryPadding}>
                        <P color={white}>8.5</P>
                    </Column>
                    <Column marginRight={primaryPadding}>
                        <P color={white}>7.8</P>
                    </Column>
                    <P color={white}>9.2</P>
                </Row>
                <Row>
                    <RatingSpan>some bla bla</RatingSpan>
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
    );
};
