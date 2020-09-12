import defaultImage from 'assets/img/default_image.svg';
import group1img from 'assets/img/group_1.svg';
import group2img from 'assets/img/group_2.svg';
import group3img from 'assets/img/group_3.svg';
import group4img from 'assets/img/group_4.svg';
import smilesImage from 'assets/img/smiles.svg';
import { AbsoluteImg } from 'components/common/ImageComponents/AbsoluteImg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { Card, CardColumn, CardRow, CardRowFeatures, Description, FeatureCell } from 'components/grid/Card';
import { backgroundTheme1, colorTheme1, productImgDiameter } from 'components/Layouts/Cards/VideoCard/constants';
import { ProductSpan, RatingSpan } from 'components/Layouts/Cards/VideoCard/styles';
import { routes } from 'constants/routes';
import React from 'react';
import { useHistory } from 'react-router';
import { modalEvents } from 'stores/modal';
import { MarginRightBottom } from 'types';

interface Props extends MarginRightBottom {}

export const VideoCard = ({ ...marginRightBottom }: Props) => {
    const history = useHistory();
    const openCardModal = () => modalEvents.openCardModal('some id');

    const handleDetail = () => history.push(routes.campaignManager.discover.index + '/id');

    return (
        <Card {...marginRightBottom}>
            <Description>
                <AbsoluteImg pointer src={defaultImage} onClick={openCardModal} />
                <CardRow>
                    <CardColumn>
                        <CardRow>
                            <CustomImg height="30px" src={smilesImage} width="224px" />
                        </CardRow>
                        <CardRow>
                            <RatingSpan>some bla bla</RatingSpan>
                        </CardRow>
                    </CardColumn>
                </CardRow>
                <CardRow marginBottom="0">
                    <CardColumn>
                        <CardRow marginBottom="13px">
                            <CardColumn>
                                <CardRow alignCenter marginBottom="3px">
                                    <CustomImg height={productImgDiameter} src={group1img} width={productImgDiameter} />
                                    <ProductSpan>Adidas</ProductSpan>
                                </CardRow>
                                <CardRow alignCenter marginBottom="3px">
                                    <CustomImg height={productImgDiameter} src={group2img} width={productImgDiameter} />
                                    <ProductSpan>Shoes</ProductSpan>
                                </CardRow>
                                <CardRow alignCenter marginBottom="3px">
                                    <CustomImg height={productImgDiameter} src={group3img} width={productImgDiameter} />
                                    <ProductSpan>Sport Shoes</ProductSpan>
                                </CardRow>
                                <CardRow alignCenter marginBottom="3px">
                                    <CustomImg height={productImgDiameter} src={group4img} width={productImgDiameter} />
                                    <ProductSpan>Superstar</ProductSpan>
                                </CardRow>
                            </CardColumn>
                        </CardRow>
                        <CardRow marginBottom="3px">
                            <RatingSpan>some bla bla</RatingSpan>
                        </CardRow>
                    </CardColumn>
                </CardRow>
            </Description>
            <CardRowFeatures>
                <FeatureCell background={backgroundTheme1} color={colorTheme1} quantity={2}>
                    Play Video
                </FeatureCell>
                <FeatureCell quantity={2} onClick={handleDetail}>
                    Details here
                </FeatureCell>
            </CardRowFeatures>
        </Card>
    );
};
