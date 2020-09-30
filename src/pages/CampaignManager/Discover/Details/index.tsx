import defaultAvatar from 'assets/img/avatar.svg';
import { Block } from 'components/common/blocks/Block';
import { ColumnBlockCell, RowBlockCell } from 'components/common/blocks/BlockCell';
import { BorderBlock } from 'components/common/blocks/BorderBlock';
import { ColorPromptLine } from 'components/common/grpahicComponents/ColorPromptLine';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Loader } from 'components/common/Loader';
import { ClosableTag } from 'components/common/tags/ClosableTag';
import {
    EngagementSpan,
    PercentageSpan,
    SmallSpan,
    Subtitle,
    TableHeaderSpan
} from 'components/common/typography/special';
import { P } from 'components/common/typography/titles/P';
import { TagFilter } from 'components/filters/TagFilter';
import { ContentWrapper } from 'components/grid/wrappers/ContentWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { CreateCampaignCard } from 'components/Layouts/Cards/CreateCampaignCard';
import { miniMarginBottom, scoreTitleColor, validatorsPadding } from 'components/modals/CardModal/constants';
import { noContentMessage } from 'constants/messages';
import { avatarDiameter, primaryPadding, secondaryPadding } from 'constants/styles';
import ReactEcharts from 'echarts-for-react';
import { useStore } from 'effector-react';
import {
    buyColor,
    clickColor,
    engageColor,
    graphicOption,
    previewColor,
    viewColor
} from 'pages/CampaignManager/Discover/Details/constants';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { campaignContentEffects, campaignContentStores } from 'stores/campaignContent';
import { loadingStores } from 'stores/loading';
import { roundScore } from 'utils/usefulFunctions';

interface ParamsProps {
    campaignId?: string;
}

export const Details = () => {
    const { campaignId } = useParams<ParamsProps>();
    const { uriPrimary, womQualityScore, engagement, products, userDetails, tags } = useStore(
        campaignContentStores.item
    );
    const loading = useStore(loadingStores.loading);

    const productsItem = products && products.length && products[0] !== 0 ? products[0] : {};
    const username = userDetails && userDetails?.username;
    const imageUrl = userDetails && userDetails?.profile && userDetails?.profile?.imageUrl;

    useEffect(() => {
        campaignId && campaignContentEffects.getItemById(campaignId);
    }, [campaignId]);

    return (
        <CampaignManagerLayout>
            <Section alignCenter marginBottom="35px">
                <TagFilter />
            </Section>
            {/* <Section marginBottom="0">
                <Summary subtitle="Campaigns Running" title="25" />
                <Summary subtitle="Campaign Budget" title="20,000" />
                <Summary subtitle="Campaign Spent" title="12,000" />
                <Summary subtitle="Campaign spend per day" title="1,000" />
                <Summary subtitle="Remaining Budget" title="10,000" />
                <Summary subtitle="Remaining Duration" title="12d" />
            </Section> */}
            <ContentWrapper>
                <Section noWrap>
                    <Block title="??">
                        {loading ? (
                            <RowBlockCell padding={primaryPadding}>
                                <Loader />
                            </RowBlockCell>
                        ) : (
                            <>
                                <ColumnBlockCell removeBorder>
                                    <RowBlockCell removeBorder padding={primaryPadding}>
                                        <Row marginBottom="0">
                                            <Column marginRight={primaryPadding}>
                                                <CreateCampaignCard
                                                    uriPrimary={uriPrimary}
                                                    womQualityScore={womQualityScore}
                                                />
                                            </Column>
                                            <Column>
                                                <Row>
                                                    <Subtitle>Video details</Subtitle>
                                                </Row>
                                                <SmallSpan>Brand</SmallSpan>
                                                <Row>
                                                    <P>
                                                        {productsItem?.tagBrand
                                                            ? productsItem.tagBrand
                                                            : noContentMessage}
                                                    </P>
                                                </Row>
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Category</SmallSpan>
                                                </Row>
                                                <Row>
                                                    <P>
                                                        {productsItem?.tagCategory
                                                            ? productsItem.tagCategory
                                                            : noContentMessage}
                                                    </P>
                                                </Row>
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Sub-cat</SmallSpan>
                                                </Row>
                                                <Row>
                                                    <P>
                                                        {productsItem?.tagSubCategory
                                                            ? productsItem.tagSubCategory
                                                            : noContentMessage}
                                                    </P>
                                                </Row>
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Item</SmallSpan>
                                                </Row>
                                                <Row>
                                                    <P>{productsItem?.item ? productsItem.item : noContentMessage}</P>
                                                </Row>
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Videos</SmallSpan>
                                                </Row>
                                                <Row>
                                                    <P>??</P>
                                                </Row>
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Creator</SmallSpan>
                                                </Row>
                                                <Row alignCenter>
                                                    <Column marginRight={secondaryPadding}>
                                                        <P>{username ? username : noContentMessage}</P>
                                                    </Column>
                                                    <CustomImg
                                                        height={avatarDiameter}
                                                        src={imageUrl ? imageUrl : defaultAvatar}
                                                        width={avatarDiameter}
                                                    />
                                                </Row>
                                            </Column>
                                        </Row>
                                    </RowBlockCell>
                                    <RowBlockCell removeBorder padding={validatorsPadding}>
                                        <Row>
                                            <Subtitle>Validators</Subtitle>
                                        </Row>
                                        <Row>
                                            <Column marginRight={primaryPadding}>
                                                <P color={scoreTitleColor}>H</P>
                                                <P>{roundScore(womQualityScore?.authenticity || 0)}</P>
                                            </Column>
                                            <Column marginRight={primaryPadding}>
                                                <P color={scoreTitleColor}>C</P>
                                                <P>{roundScore(womQualityScore?.creativity || 0)}</P>
                                            </Column>
                                            <Column marginRight={'0'}>
                                                <P color={scoreTitleColor}>P</P>
                                                <P>{roundScore(womQualityScore?.positivity || 0)}</P>
                                            </Column>
                                        </Row>
                                        <Row>
                                            <Subtitle>Viewers</Subtitle>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Preview</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>??</P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>View</SmallSpan>
                                        </Row>
                                        <Row alignCenter>
                                            {/* <P>1152</P>&nbsp;<SmallSpan opacity={0.5}>(96.0%)</SmallSpan> */}
                                            <P>??</P>
                                        </Row>
                                        <Row>
                                            <Column marginRight={primaryPadding}>
                                                <PercentageSpan>{'< 25%'}</PercentageSpan>
                                                <PercentageSpan>25% - 50%</PercentageSpan>
                                                <PercentageSpan>50% - 75%</PercentageSpan>
                                                <PercentageSpan>{'> 75%'}</PercentageSpan>
                                            </Column>
                                            <Column>
                                                <EngagementSpan>{engagement?.viewsD1Percentage || 0}%</EngagementSpan>
                                                <EngagementSpan>{engagement?.viewsD2Percentage || 0}%</EngagementSpan>
                                                <EngagementSpan>{engagement?.viewsD3Percentage || 0}%</EngagementSpan>
                                                <EngagementSpan>{engagement?.viewsD4Percentage || 0}%</EngagementSpan>
                                            </Column>
                                        </Row>
                                    </RowBlockCell>
                                </ColumnBlockCell>
                                <RowBlockCell removeBorder padding={primaryPadding}>
                                    <Row>
                                        <Subtitle>Engagement</Subtitle>
                                    </Row>
                                    <Column>
                                        <Row marginRight={'50px'}>
                                            <Column marginRight="40px">
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Like</SmallSpan>
                                                </Row>
                                                <Row alignCenter marginBottom={secondaryPadding}>
                                                    <P>{engagement?.likeCount}</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>
                                                        ({engagement?.likesPercentage || 0}%)
                                                    </SmallSpan>
                                                </Row>
                                            </Column>
                                            <Column marginRight="40px">
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Save</SmallSpan>
                                                </Row>
                                                <Row alignCenter marginBottom={secondaryPadding}>
                                                    <P>{engagement?.saveCount}</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>
                                                        ({engagement?.savesPercentage || 0}%)
                                                    </SmallSpan>
                                                </Row>
                                            </Column>
                                            <Column marginRight="40px">
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Comment</SmallSpan>
                                                </Row>
                                                <Row alignCenter marginBottom={secondaryPadding}>
                                                    <P>{engagement?.commentCount}</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>
                                                        ({engagement?.commentsPercentage || 0}%)
                                                    </SmallSpan>
                                                </Row>
                                            </Column>
                                            <Column marginRight="40px">
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Rate</SmallSpan>
                                                </Row>
                                                <Row alignCenter marginBottom={secondaryPadding}>
                                                    <P>{engagement?.ratingCount}</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>
                                                        ({engagement?.ratingsPercentage || 0}%)
                                                    </SmallSpan>
                                                </Row>
                                            </Column>
                                            <Column marginRight="40px">
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Honesty</SmallSpan>
                                                </Row>
                                                <Row alignCenter marginBottom={secondaryPadding}>
                                                    {/* <P>{engagement?.honestyCount || 0}</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>
                                                        ({engagement?.honestyPercentage || 0}%)
                                                    </SmallSpan> */}
                                                    <P>??</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>??</SmallSpan>
                                                </Row>
                                            </Column>
                                        </Row>
                                        <Row>
                                            <Column marginRight="40px">
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Creativity</SmallSpan>
                                                </Row>
                                                <Row alignCenter marginBottom={secondaryPadding}>
                                                    {/* <P>{engagement?.likeCount}</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>
                                                        ({engagement?.likesPercentage || 0}%)
                                                    </SmallSpan> */}
                                                    <P>??</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>??</SmallSpan>
                                                </Row>
                                            </Column>
                                            <Column marginRight="40px">
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Positivity</SmallSpan>
                                                </Row>
                                                <Row alignCenter marginBottom={secondaryPadding}>
                                                    {/* <P>{engagement?.likeCount}</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>
                                                        ({engagement?.likesPercentage || 0}%)
                                                    </SmallSpan> */}
                                                    <P>??</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>??</SmallSpan>
                                                </Row>
                                            </Column>
                                            <Column marginRight="40px">
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Click</SmallSpan>
                                                </Row>
                                                <Row alignCenter marginBottom={secondaryPadding}>
                                                    <P>{engagement?.clickCount}</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>
                                                        ({engagement?.clicksPercentage || 0}%)
                                                    </SmallSpan>
                                                </Row>
                                            </Column>
                                            <Column marginRight="40px">
                                                <Row marginBottom={miniMarginBottom}>
                                                    <SmallSpan>Buy</SmallSpan>
                                                </Row>
                                                <Row alignCenter marginBottom={secondaryPadding}>
                                                    <P>{engagement?.buyCount}</P>&nbsp;
                                                    <SmallSpan opacity={0.5}>
                                                        ({engagement?.buysPercentage || 0}%)
                                                    </SmallSpan>
                                                </Row>
                                            </Column>
                                        </Row>
                                    </Column>
                                </RowBlockCell>
                                <ColumnBlockCell removeBorder>
                                    <RowBlockCell removeBorder padding={validatorsPadding}>
                                        <Row marginBottom="40px">
                                            <Subtitle>Additional details</Subtitle>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Category</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>??</P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Sub-category</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>??</P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Item</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>??</P>
                                        </Row>
                                    </RowBlockCell>
                                    <RowBlockCell removeBorder padding={validatorsPadding}>
                                        <Row marginBottom="40px">
                                            <Subtitle>&nbsp;</Subtitle>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>In-use</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>??</P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>In-promotion</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>??</P>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            <SmallSpan>Available</SmallSpan>
                                        </Row>
                                        <Row>
                                            <P>??</P>
                                        </Row>
                                    </RowBlockCell>
                                </ColumnBlockCell>
                                <ColumnBlockCell>
                                    <RowBlockCell removeBorder padding={validatorsPadding}>
                                        <Row marginBottom="40px">
                                            <Subtitle>Hashtags</Subtitle>
                                        </Row>
                                        <Row marginBottom={miniMarginBottom}>
                                            {tags &&
                                                tags.length &&
                                                tags.map(i => <ClosableTag key={i}>{i.toUpperCase()}</ClosableTag>)}
                                        </Row>
                                    </RowBlockCell>
                                </ColumnBlockCell>
                            </>
                        )}
                    </Block>
                    <Column>
                        <BorderBlock>
                            <Section alignCenter justifyCenter>
                                <ColorPromptLine background={previewColor} />
                                <TableHeaderSpan>New Shoes</TableHeaderSpan>
                            </Section>
                            <ReactEcharts
                                option={graphicOption(previewColor)}
                                style={{ height: '300px', width: '575px' }}
                            />
                        </BorderBlock>
                        <BorderBlock>
                            <Section alignCenter justifyCenter>
                                <ColorPromptLine background={viewColor} />
                                <TableHeaderSpan>Brand Only</TableHeaderSpan>
                            </Section>
                            <ReactEcharts
                                option={graphicOption(viewColor)}
                                style={{ height: '300px', width: '575px' }}
                            />
                        </BorderBlock>
                        <BorderBlock>
                            <Section alignCenter justifyCenter>
                                <ColorPromptLine background={engageColor} />
                                <TableHeaderSpan>Test Campaign</TableHeaderSpan>
                            </Section>
                            <ReactEcharts
                                option={graphicOption(engageColor)}
                                style={{ height: '300px', width: '575px' }}
                            />
                        </BorderBlock>
                        <BorderBlock>
                            <Section alignCenter justifyCenter>
                                <ColorPromptLine background={clickColor} />
                                <TableHeaderSpan>Zalando Push</TableHeaderSpan>
                            </Section>
                            <ReactEcharts
                                option={graphicOption(clickColor)}
                                style={{ height: '300px', width: '575px' }}
                            />
                        </BorderBlock>
                        <BorderBlock>
                            <Section alignCenter justifyCenter>
                                <ColorPromptLine background={buyColor} />
                                <TableHeaderSpan>YEAY General</TableHeaderSpan>
                            </Section>
                            <ReactEcharts
                                option={graphicOption(buyColor)}
                                style={{ height: '300px', width: '575px' }}
                            />
                        </BorderBlock>
                    </Column>
                </Section>
            </ContentWrapper>
        </CampaignManagerLayout>
    );
};

/* <OverflowAutoWrapper>
<Row noWrap widthMaxContent>
    <Column marginRight="0">
        <CampaignContentCard
            buttonTop={
                <CustomImg
                    pointer
                    height={closeModalImgDiameter}
                    src={backModalImg}
                    width={closeModalImgDiameter}
                    onClick={onBack}
                />
            }
            id="id"
        />
    </Column>
    <Column>
        <Row alignCenter noWrap>
            <Column marginRight="6px">
                <Span color="#0F1642" fontSize="25px" fontWeight="normal" lineHeight="30px">
                    Milestones
                </Span>
            </Column>
            <Column marginRight="18px">
                <RoundedButton>Allow</RoundedButton>
            </Column>
            <Column marginRight="18px">
                <RoundedButton>Start Promo</RoundedButton>
            </Column>
            <Column marginRight="18px">
                <RoundedButton>End Promo</RoundedButton>
            </Column>
            <MarginWrapper marginLeft="auto">
                <RowRadio defaultActive="Relative" values={['Absolute', 'Relative']} />
            </MarginWrapper>
        </Row>
        <Section>
            <ReactEcharts
                option={graphicOption('#FC4237')}
                style={{ height: '300px', width: '100%' }}
            />
        </Section>
        <Section alignCenter justifyCenter>
            <Column marginRight="16px">
                <CustomImg height={ballDiameter} src={ballPreviewImg} width={ballDiameter} />
            </Column>
            <Column>
                <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                    Preview
                </Span>
            </Column>
        </Section>
        <Section>
            <ReactEcharts
                option={graphicOption('#AD0132')}
                style={{ height: '300px', width: '100%' }}
            />
        </Section>
        <Section alignCenter justifyCenter>
            <Column marginRight="16px">
                <CustomImg height={ballDiameter} src={ballViewImg} width={ballDiameter} />
            </Column>
            <Column>
                <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                    View
                </Span>
            </Column>
        </Section>
        <Section>
            <ReactEcharts
                option={graphicOption('#15226B')}
                style={{ height: '300px', width: '100%' }}
            />
        </Section>
        <Section alignCenter justifyCenter>
            <Column marginRight="16px">
                <CustomImg height={ballDiameter} src={ballEngageImg} width={ballDiameter} />
            </Column>
            <Column>
                <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                    Engage
                </Span>
            </Column>
        </Section>
        <Section>
            <ReactEcharts
                option={graphicOption('#0CB6D1')}
                style={{ height: '300px', width: '100%' }}
            />
        </Section>
        <Section alignCenter justifyCenter>
            <Column marginRight="16px">
                <CustomImg height={ballDiameter} src={ballClickImg} width={ballDiameter} />
            </Column>
            <Column>
                <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                    Click
                </Span>
            </Column>
        </Section>
        <Section>
            <ReactEcharts
                option={graphicOption('#FE7500')}
                style={{ height: '300px', width: '100%' }}
            />
        </Section>
        <Section alignCenter justifyCenter>
            <Column marginRight="16px">
                <CustomImg height={ballDiameter} src={ballBuyImg} width={ballDiameter} />
            </Column>
            <Column>
                <Span color="#0F1642" fontSize="22px" fontWeight="normal" lineHeight="27px">
                    Buy
                </Span>
            </Column>
        </Section>
    </Column>
</Row>
</OverflowAutoWrapper> */
