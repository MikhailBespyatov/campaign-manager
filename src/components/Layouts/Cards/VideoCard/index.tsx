import defaultImage from 'assets/img/default_image.svg';
import group1img from 'assets/img/group_1.svg';
import group2img from 'assets/img/group_2.svg';
import group3img from 'assets/img/group_3.svg';
import group4img from 'assets/img/group_4.svg';
import addIdImg from 'assets/img/increment.svg';
import { AbsoluteImg } from 'components/common/imageComponents/AbsoluteImg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { ProductSpan, RatingSpan } from 'components/common/typography/special';
import { P } from 'components/common/typography/titles/P';
import { AbsoluteVideo } from 'components/common/Video';
import { Card, CardRowFeatures, Description, FeatureCell } from 'components/grid/Card';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import {
    addIdImgDiameter,
    backgroundTheme1,
    colorTheme1,
    productImgDiameter
} from 'components/Layouts/Cards/VideoCard/constants';
import { noContentMessage } from 'constants/messages';
import { routes } from 'constants/routes';
import { padding, primaryPadding, secondaryPadding, white } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { campaignsEvents, campaignsStores } from 'stores/campaigns';
import { modalEvents } from 'stores/modal';
import { roundScore } from 'utils/usefulFunctions';

interface Props extends WOM.ContentItemResponse {}

export const VideoCard = ({ womContentId, uriPrimary, womQualityScore, products, streamDetails }: Props) => {
    const history = useHistory();
    const contentIds = useStore(campaignsStores.contentIds);

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const ID = useMemo(() => (womContentId ? womContentId : ''), [womContentId]);
    const productsItem = useMemo(() => (products && products.length && products[0] !== 0 ? products[0] : {}), [
        products
    ]);
    const active = useMemo(() => (womContentId && contentIds?.includes(womContentId)) || false, [
        womContentId,
        contentIds
    ]);

    const openCardModal = () => modalEvents.openCardModal(ID);

    const onVideoPlay = () => setIsVideoPlaying(!isVideoPlaying);

    const handleDetail = () => history.push(routes.campaignManager.discover.indexDetails + ID);

    const addIdHandler = () => {
        if (womContentId)
            active ? campaignsEvents.removeContentById(womContentId) : campaignsEvents.pushContentId(womContentId);
    };

    return (
        <Card pointer active={active}>
            <Description onClick={openCardModal}>
                <AbsoluteWrapper bottom={padding} right={padding} zIndex="5">
                    <CustomImg
                        height={addIdImgDiameter}
                        rotate={active ? 0 : 45}
                        src={addIdImg}
                        width={addIdImgDiameter}
                        onClick={addIdHandler}
                    />
                </AbsoluteWrapper>
                {isVideoPlaying ? (
                    <AbsoluteVideo controls isPlaying={isVideoPlaying} src={streamDetails?.hlsUrl || ''} />
                ) : (
                    <AbsoluteImg pointer src={uriPrimary ? uriPrimary : defaultImage} zIndex="-1" />
                )}
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
                    <RatingSpan>??</RatingSpan>
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
            <CardRowFeatures>
                <FeatureCell background={backgroundTheme1} color={colorTheme1} quantity={2} onClick={onVideoPlay}>
                    {isVideoPlaying ? 'Pause' : 'Play'} Video
                </FeatureCell>
                <FeatureCell quantity={2} onClick={handleDetail}>
                    Details here
                </FeatureCell>
            </CardRowFeatures>
        </Card>
    );
};
