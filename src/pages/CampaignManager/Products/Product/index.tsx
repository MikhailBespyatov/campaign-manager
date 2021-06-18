import WOMLogo from 'assets/img/wom_logo.svg';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { CampaignManagerLayout } from 'components/Layouts/CampaignManagerLayout';
import { VideoCard } from 'components/Layouts/Cards/VideoCard';
import { EmptySearchResult } from 'components/Layouts/EmptySearchResult';
import { VideosFilterLayout } from 'components/Layouts/filterLayouts/VideosFilterLayout';
import { ModifyingLayout } from 'components/Layouts/ModifyingLayout';
import { defaultFontWeight, defaultPage } from 'constants/defaults';
import { useStore } from 'effector-react';
import { CardCatalogGrid } from 'pages/CampaignManager/Discover/styles';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { campaignContentEvents, campaignContentStores } from 'stores/campaignContent';
import { productsEffects, productsEvents, productsStores } from 'stores/products';
import { ProductThumbnail } from '../styles';
import { productContentMarginBottom, productContentPadding } from './constants';

interface ParamsProps {
    productId: string;
}
export const Product = () => {
    const { productId } = useParams<ParamsProps>();
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
                                    <Span fontSize="16px" fontWeight={defaultFontWeight} lineHeight="20px">
                                        {name}
                                    </Span>
                                </MarginWrapper>
                                <Span fontSize="13px" fontWeight={defaultFontWeight} lineHeight="17px">
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
                        <>
                            {!!items?.length ? (
                                <CardCatalogGrid>
                                    {' '}
                                    {items.map(item => (
                                        <VideoCard key={item.womContentId} {...item} />
                                    ))}
                                </CardCatalogGrid>
                            ) : (
                                <Section justifyCenter>
                                    <EmptySearchResult title="Sorry! No result found" />
                                </Section>
                            )}
                        </>
                    )}
                </VideosFilterLayout>
            </ModifyingLayout>
        </CampaignManagerLayout>
    );
};
