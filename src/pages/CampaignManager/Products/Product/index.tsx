import React, { useEffect } from 'react';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { ModifyingLayout } from 'components/Layouts/ModifyingLayout';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { productContentMarginBottom, productContentPadding } from './constants';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { ProductThumbnail } from '../styles';
import WOMLogo from 'assets/img/wom_logo.svg';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Span } from 'components/common/typography/Span';
import { useParams } from 'react-router';
import { Loader } from 'components/common/Loader';
import { VideoCard } from 'components/Layouts/Cards/VideoCard';
import { noContentMessage } from 'pages/CampaignManager/Discover/constants';
import { VideosFilterLayout } from 'components/Layouts/filterLayouts/VideosFilterLayout';
import { useStore } from 'effector-react';
import { campaignContentEvents, campaignContentStores } from 'stores/campaignContent';
import { productsEffects, productsEvents, productsStores } from 'stores/products';
import { defaultPage } from 'constants/defaults';

export const Product = () => {
    const { productId } = useParams();
    const { imageUrl, brand, name } = useStore(productsStores.item);
    const [{ items, totalRecords }, loading] = useStore(campaignContentStores.combinedItems);

    useEffect(
        () => {
            name &&
                brand &&
                campaignContentEvents.updateValues({
                    tagsAny: [name, brand, `${name} ${brand}`],
                    tagsAll: undefined,
                    pageIndex: defaultPage
                });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [name, brand]
    );

    useEffect(
        () => {
            productsEffects.getItemById(productId);
            return () => {
                campaignContentEvents.setDefaultValues();
                productsEvents.resetItem();
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <CampaignManagerLayout>
            <ModifyingLayout withoutAction>
                <Section marginBottom={productContentMarginBottom}>
                    <ContentWrapper padding={productContentPadding} width="100%">
                        <Row alignCenter>
                            <MarginWrapper marginRight="17px">
                                <ProductThumbnail backgroundImage={imageUrl || WOMLogo} />
                            </MarginWrapper>
                            <Column>
                                <MarginWrapper marginBottom="10px">
                                    <Span fontSize="16px" fontWeight="600" lineHeight="20px">
                                        {name}
                                    </Span>
                                </MarginWrapper>
                                <Span fontSize="13px" fontWeight="600" lineHeight="17px">
                                    {brand}
                                </Span>
                            </Column>
                        </Row>
                    </ContentWrapper>
                </Section>
                <VideosFilterLayout loading={loading} totalRecords={totalRecords}>
                    {loading ? (
                        <Section>
                            <Loader />
                        </Section>
                    ) : (
                        <Section>
                            {items
                                ? items.map(item => <VideoCard key={item.womContentId} {...item} />)
                                : noContentMessage}
                        </Section>
                    )}
                </VideosFilterLayout>
            </ModifyingLayout>
        </CampaignManagerLayout>
    );
};
