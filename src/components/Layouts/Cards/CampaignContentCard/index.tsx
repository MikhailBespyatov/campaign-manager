import { AddableTag } from 'components/common/tags/AddableTag';
import { ClosableTag } from 'components/common/tags/ClosableTag';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { defaultFontSize } from 'constants/defaults';
import { errorColor, formGrey5, primaryColor, secondaryMargin, successColor } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import { campaignContentEffects, campaignContentStores } from 'stores/campaignContent';
import { loadingStores } from 'stores/loading';
import { Id, Visibility } from 'types';

interface Props extends Id, Visibility {
    buttonTop: JSX.Element;
}

export const CampaignContentCard = ({ buttonTop, id, visible }: Props) => {
    const {} = useStore(campaignContentStores.item);
    const loading = useStore(loadingStores.loading);

    useEffect(() => {
        visible && campaignContentEffects.getItemById(id);
    }, [id, visible]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Section alignCenter marginBottom="32px">
                        <Column marginRight="41px">{buttonTop}</Column>
                        <Column marginRight="50px">
                            <ClosableTag>Details</ClosableTag>
                        </Column>
                        <Column marginRight="0">
                            {/* TODO: tag+ component */}
                            <AddableTag>Promote</AddableTag>
                        </Column>
                    </Section>
                    <Section marginBottom="0">
                        <Column marginRight="53px" maxWidth="400px">
                            <Row marginBottom="29px">
                                <Column marginRight="26px">
                                    <Row noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                            opacity={0.5}
                                        >
                                            Brand
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                            opacity={0.5}
                                        >
                                            Category
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                            opacity={0.5}
                                        >
                                            Sub-cat
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                            opacity={0.5}
                                        >
                                            Item
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                            opacity={0.5}
                                        >
                                            Creator
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                            opacity={0.5}
                                        >
                                            Videos
                                        </Span>
                                    </Row>
                                </Column>
                                <Column marginRight="0">
                                    <Row noWrap marginBottom="15px">
                                        <Span color={primaryColor} fontSize="24px" lineHeight="29px">
                                            Adidas
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={primaryColor} fontSize="24px" lineHeight="29px">
                                            Shoes
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={primaryColor} fontSize="24px" lineHeight="29px">
                                            Sport Shoes
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={primaryColor} fontSize="24px" lineHeight="29px">
                                            Superstar
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={primaryColor} fontSize="24px" lineHeight="29px">
                                            Milestone
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={primaryColor} fontSize="24px" lineHeight="29px">
                                            10 (20)
                                        </Span>
                                    </Row>
                                </Column>
                            </Row>
                            <Row marginBottom="27px">
                                {/* <CustomImg height="591px" src={cardModalImg} width="372px" /> */}
                            </Row>
                            <Row marginBottom="28px">
                                <Column marginRight={secondaryMargin}>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={primaryColor} fontSize="24px" lineHeight="29px">
                                            Cat
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={primaryColor} fontSize="24px" lineHeight="29px">
                                            Sub-Cat
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={primaryColor} fontSize="24px" lineHeight="29px">
                                            Item
                                        </Span>
                                    </Row>
                                </Column>
                                <Column marginRight="0">
                                    <Row alignCenter noWrap height="29px" marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                            opacity={0.5}
                                        >
                                            Apparel Accessories
                                        </Span>
                                    </Row>
                                    <Row alignCenter noWrap height="29px" marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                            opacity={0.5}
                                        >
                                            Socks Sunglasses
                                        </Span>
                                    </Row>
                                    <Row alignCenter noWrap height="29px" marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                            opacity={0.5}
                                        >
                                            8 Pack Sport Whipstart
                                        </Span>
                                    </Row>
                                </Column>
                            </Row>
                            <Row marginBottom="17px">
                                <Span color="#A5A8B8" fontSize="35px" fontWeight="normal" lineHeight="43px">
                                    Hashtags
                                </Span>
                            </Row>
                            <Row marginBottom="0">
                                <ClosableTag closable hashtag marginBottom="15px" marginRight="15px">
                                    ADIDAS
                                </ClosableTag>
                                <ClosableTag closable hashtag marginBottom="15px" marginRight="15px">
                                    SUPERSTAR
                                </ClosableTag>
                                <ClosableTag closable hashtag marginBottom="15px" marginRight="15px">
                                    SUPERSHOES
                                </ClosableTag>
                            </Row>
                        </Column>
                        <Column marginRight="0" maxWidth="300px">
                            <Row marginBottom={secondaryMargin}>
                                <Span color={primaryColor} fontSize="30px" lineHeight="37px">
                                    Authentication
                                    {/* Validators */}
                                </Span>
                            </Row>
                            <Row marginBottom="35px">
                                <Span
                                    color={formGrey5}
                                    fontSize="24px"
                                    fontWeight="normal"
                                    lineHeight="29px"
                                    opacity={0.5}
                                >
                                    H 8.5 C 2.8 P 9.2
                                </Span>
                            </Row>
                            <Row marginBottom={secondaryMargin}>
                                <Span color={primaryColor} fontSize="30px" lineHeight="37px">
                                    Validators
                                </Span>
                            </Row>
                            <Row marginBottom="20px">
                                <Column marginRight="35px">
                                    <Row noWrap marginBottom="15px">
                                        <Span
                                            color={formGrey5}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                            opacity={0.5}
                                        >
                                            Preview
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span
                                            color={formGrey5}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                            opacity={0.5}
                                        >
                                            View
                                        </Span>
                                    </Row>
                                </Column>
                                <Column marginRight="0">
                                    <Row alignCenter noWrap marginBottom="15px">
                                        <Span color={formGrey5} fontSize="24px" fontWeight="normal" lineHeight="29px">
                                            1200
                                        </Span>
                                    </Row>
                                    <Row alignCenter noWrap marginBottom="15px">
                                        <Span color={formGrey5} fontSize="24px" fontWeight="normal" lineHeight="29px">
                                            1152
                                        </Span>

                                        <Span
                                            color={primaryColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                            opacity={0.5}
                                        >
                                            &#160; (96.0%)
                                        </Span>
                                    </Row>
                                </Column>
                            </Row>
                            <Row marginBottom="35px">
                                <Column marginRight="35px">
                                    <Row noWrap marginBottom={secondaryMargin}>
                                        <Span
                                            color={formGrey5}
                                            fontSize="18px"
                                            fontWeight="normal"
                                            lineHeight="22px"
                                            opacity={0.5}
                                        >
                                            &#60;25%
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom={secondaryMargin}>
                                        <Span
                                            color={formGrey5}
                                            fontSize="18px"
                                            fontWeight="normal"
                                            lineHeight="22px"
                                            opacity={0.5}
                                        >
                                            25%-50%
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom={secondaryMargin}>
                                        <Span
                                            color={formGrey5}
                                            fontSize="18px"
                                            fontWeight="normal"
                                            lineHeight="22px"
                                            opacity={0.5}
                                        >
                                            50%-75%
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom={secondaryMargin}>
                                        <Span
                                            color={formGrey5}
                                            fontSize="18px"
                                            fontWeight="normal"
                                            lineHeight="22px"
                                            opacity={0.5}
                                        >
                                            &#62;75%
                                        </Span>
                                    </Row>
                                </Column>
                                <Column marginRight="0">
                                    <Row noWrap marginBottom={secondaryMargin}>
                                        <Span color={formGrey5} fontSize="18px" fontWeight="normal" lineHeight="22px">
                                            10%
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom={secondaryMargin}>
                                        <Span color={formGrey5} fontSize="18px" fontWeight="normal" lineHeight="22px">
                                            20%
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom={secondaryMargin}>
                                        <Span color={formGrey5} fontSize="18px" fontWeight="normal" lineHeight="22px">
                                            30%
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom={secondaryMargin}>
                                        <Span color={formGrey5} fontSize="18px" fontWeight="normal" lineHeight="22px">
                                            40%
                                        </Span>
                                    </Row>
                                </Column>
                            </Row>
                            <Row marginBottom="20px">
                                <Span color={primaryColor} fontSize="30px" lineHeight="37px">
                                    Engagements
                                </Span>
                            </Row>
                            <Row marginBottom="42px">
                                <Column marginRight={secondaryMargin}>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={formGrey5} fontSize="24px" fontWeight="normal" lineHeight="29px">
                                            Like
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={formGrey5} fontSize="24px" fontWeight="normal" lineHeight="29px">
                                            Save
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={formGrey5} fontSize="24px" fontWeight="normal" lineHeight="29px">
                                            Comment
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={formGrey5} fontSize="24px" fontWeight="normal" lineHeight="29px">
                                            Rate
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={formGrey5} fontSize="24px" fontWeight="normal" lineHeight="29px">
                                            Honestly
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={formGrey5} fontSize="24px" fontWeight="normal" lineHeight="29px">
                                            Creativity
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={formGrey5} fontSize="24px" fontWeight="normal" lineHeight="29px">
                                            Positivity
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={formGrey5} fontSize="24px" fontWeight="normal" lineHeight="29px">
                                            Click
                                        </Span>
                                    </Row>
                                    <Row noWrap marginBottom="15px">
                                        <Span color={formGrey5} fontSize="24px" fontWeight="normal" lineHeight="29px">
                                            Buy
                                        </Span>
                                    </Row>
                                </Column>
                                <Column marginRight="0">
                                    <Row alignCenter noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                        >
                                            1022
                                        </Span>

                                        <Span
                                            color={primaryColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                            opacity={0.5}
                                        >
                                            &#160; (96.0%)
                                        </Span>
                                    </Row>
                                    <Row alignCenter noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                        >
                                            122
                                        </Span>

                                        <Span
                                            color={primaryColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                            opacity={0.5}
                                        >
                                            &#160; (96.0%)
                                        </Span>
                                    </Row>
                                    <Row alignCenter noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                        >
                                            122
                                        </Span>

                                        <Span
                                            color={primaryColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                            opacity={0.5}
                                        >
                                            &#160; (96.0%)
                                        </Span>
                                    </Row>
                                    <Row alignCenter noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                        >
                                            122
                                        </Span>

                                        <Span
                                            color={primaryColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                            opacity={0.5}
                                        >
                                            &#160; (96.0%)
                                        </Span>
                                    </Row>
                                    <Row alignCenter noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                        >
                                            122
                                        </Span>

                                        <Span
                                            color={primaryColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                            opacity={0.5}
                                        >
                                            &#160; (96.0%)
                                        </Span>
                                    </Row>
                                    <Row alignCenter noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                        >
                                            122
                                        </Span>

                                        <Span
                                            color={primaryColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                            opacity={0.5}
                                        >
                                            &#160; (96.0%)
                                        </Span>
                                    </Row>
                                    <Row alignCenter noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                        >
                                            122
                                        </Span>

                                        <Span
                                            color={errorColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                        >
                                            &#160; -2.5
                                        </Span>
                                    </Row>
                                    <Row alignCenter noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                        >
                                            122
                                        </Span>

                                        <Span
                                            color={successColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                        >
                                            &#160; +2.7
                                        </Span>
                                    </Row>
                                    <Row alignCenter noWrap marginBottom="15px">
                                        <Span
                                            color={primaryColor}
                                            fontSize="24px"
                                            fontWeight="normal"
                                            lineHeight="29px"
                                        >
                                            122
                                        </Span>

                                        <Span
                                            color={primaryColor}
                                            fontSize={defaultFontSize}
                                            fontWeight="normal"
                                            lineHeight="17px"
                                            opacity={0.5}
                                        >
                                            &#160; (96.0%)
                                        </Span>
                                    </Row>
                                </Column>
                            </Row>
                            <Row marginBottom="13px">
                                <Span color={primaryColor} fontSize="30px" lineHeight="37px">
                                    Activity
                                    {/* In-use */}
                                </Span>
                            </Row>
                            <Row marginBottom="17px">
                                <Span
                                    color={formGrey5}
                                    fontSize="24px"
                                    fontWeight="normal"
                                    lineHeight="29px"
                                    opacity={0.5}
                                >
                                    YEAY, Zelando, Submarino
                                </Span>
                            </Row>
                            <Row marginBottom="13px">
                                <Span color={primaryColor} fontSize="30px" lineHeight="37px">
                                    In-promotion
                                </Span>
                            </Row>
                            <Row marginBottom="17px">
                                <Span
                                    color={formGrey5}
                                    fontSize="24px"
                                    fontWeight="normal"
                                    lineHeight="29px"
                                    opacity={0.5}
                                >
                                    Zelando
                                </Span>
                            </Row>
                            <Row marginBottom="13px">
                                <Span color={primaryColor} fontSize="30px" lineHeight="37px">
                                    Available
                                </Span>
                            </Row>
                            <Row marginBottom="17px">
                                <Span
                                    color={formGrey5}
                                    fontSize="24px"
                                    fontWeight="normal"
                                    lineHeight="29px"
                                    opacity={0.5}
                                >
                                    YEAY, Zelando, Submarino, Adidas
                                </Span>
                            </Row>
                        </Column>
                    </Section>
                </>
            )}
        </>
    );
};
